import { useEffect, useRef, useState } from 'preact/hooks';
import './App.scss';
import {
  formatHex,
  getHue,
  nan0,
  parseHex,
  remainPositive,
  roundDec,
} from './funcs';

function App() {
  const mainCanvRef = useRef<HTMLCanvasElement>(null);
  const colorCanvRef = useRef<HTMLCanvasElement>(null);
  const WIDTH = 600;
  const HEIGHT = 300;
  const subHEIGHT = 20;

  const [hue, setHue] = useState(0);
  const [hex, setHex] = useState(formatHex(0, 0, 0));
  const [rgbR, setRgbR] = useState(0);
  const [rgbG, setRgbG] = useState(0);
  const [rgbB, setRgbB] = useState(0);

  useEffect(() => {
    // not to change hue when a point in big rect is clicked
    setHex(formatHex(rgbR, rgbG, rgbB));
  }, [rgbR, rgbB, rgbG]);

  const getCtx = (c: HTMLCanvasElement) =>
    c.getContext('2d', { willReadFrequently: true, alpha: true });

  const returnFillCanvas =
    (ctx: CanvasRenderingContext2D) =>
    (style: string | CanvasGradient | CanvasPattern) => {
      ctx.fillStyle = style;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    };

  const imageDataOnClick = (ctx: CanvasRenderingContext2D, e: MouseEvent) =>
    ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;

  // whitened and darkened colors
  useEffect(() => {
    const canv = mainCanvRef.current!;
    const ctx = getCtx(canv);

    const listener = (e: MouseEvent) => {
      const [r, g, b, _] = imageDataOnClick(ctx!, e);

      setRgbR(r);
      setRgbG(g);
      setRgbB(b);
    };

    if (ctx) {
      const fillCanvas = returnFillCanvas(ctx);

      const graClr = ctx.createLinearGradient(0, 0, WIDTH, 0);
      graClr.addColorStop(0, 'white');
      graClr.addColorStop(1, `hsl(${hue} 100% 50%)`);

      fillCanvas(graClr);

      const graDrk = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      graDrk.addColorStop(0, 'transparent');
      graDrk.addColorStop(1, 'black');

      fillCanvas(graDrk);

      canv.addEventListener('click', listener);
    }

    return () => canv.removeEventListener('click', listener);
  }, [hue]);

  // hue colors
  useEffect(() => {
    const canv = colorCanvRef.current!;
    const ctx = getCtx(canv);

    const listener = (e: MouseEvent) => {
      const [r, g, b, _] = imageDataOnClick(ctx!, e);

      setHue(roundDec(getHue(r, g, b)));
    };

    if (ctx) {
      const fillCanvas = returnFillCanvas(ctx);

      const gra = ctx.createLinearGradient(0, 0, WIDTH, 0);
      for (let i = 0; i < 360; ++i) {
        gra.addColorStop(i / 359, `hsl(${i}deg 100% 50%)`);
      }

      fillCanvas(gra);

      canv.addEventListener('click', listener);
    }

    return () => canv.removeEventListener('click', listener);
  }, []);

  const parseRGBWrap = (s: string) =>
    remainPositive(nan0(parseInt(s)), 0xff + 1);

  return (
    <main>
      <canvas ref={mainCanvRef} width={`${WIDTH}px`} height={`${HEIGHT}px`}>
        gradient color picker field
      </canvas>
      <canvas ref={colorCanvRef} width={`${WIDTH}px`} height={`${subHEIGHT}px`}>
        sub color picker field
      </canvas>
      <label>
        hue:{' '}
        <input
          type="number"
          name=""
          id=""
          value={hue}
          onChange={(e) => {
            const n = nan0(parseFloat(e.currentTarget.value));
            setHue(roundDec(remainPositive(n, 360)));
          }}
        />
        deg
      </label>
      <label>
        hex code:{' '}
        <input
          type="text"
          value={hex}
          onChange={(e) => {
            const [r, g, b] = parseHex(e.currentTarget.value);
            setRgbR(r);
            setRgbG(g);
            setRgbB(b);
            setHue(roundDec(getHue(r, g, b)));
          }}
        />
      </label>
      <div className="row">
        <label>
          R:{' '}
          <input
            type="number"
            value={rgbR}
            onChange={(e) => {
              const r = parseRGBWrap(e.currentTarget.value);
              setRgbR(r);
              setHue(roundDec(getHue(r, rgbG, rgbB)));
            }}
          />
        </label>
        <label>
          G:{' '}
          <input
            type="number"
            value={rgbG}
            onChange={(e) => {
              const g = parseRGBWrap(e.currentTarget.value);
              setRgbG(g);
              setHue(roundDec(getHue(rgbR, g, rgbB)));
            }}
          />
        </label>
        <label>
          B:{' '}
          <input
            type="number"
            value={rgbB}
            onChange={(e) => {
              const b = parseRGBWrap(e.currentTarget.value);
              setRgbB(b);
              setHue(roundDec(getHue(rgbR, rgbG, b)));
            }}
          />
        </label>
      </div>
      <div className="preview" style={{ backgroundColor: hex }}></div>
    </main>
  );
}

export default App;
