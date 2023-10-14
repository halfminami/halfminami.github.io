import { useEffect, useRef, useState } from 'preact/hooks';
import './App.scss';

function App() {
  const mainCanvRef = useRef<HTMLCanvasElement>(null);
  const colorCanvRef = useRef<HTMLCanvasElement>(null);
  const WIDTH = 600;
  const HEIGHT = 300;
  const subHEIGHT = 20;

  const createRGB = (r: number, g: number, b: number) => `rgb(${r} ${g} ${b})`;

  const [rgb, setRgb] = useState(createRGB(255, 0, 0));

  const getCtx = (c: HTMLCanvasElement) =>
    c.getContext('2d', { willReadFrequently: true });

  const returnFillCanvas =
    (ctx: CanvasRenderingContext2D) =>
    (style: string | CanvasGradient | CanvasPattern) => {
      ctx.fillStyle = style;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    };

  // whitened and darkened colors
  useEffect(() => {
    const canv = mainCanvRef.current!;
    const ctx = getCtx(canv);
    if (ctx) {
      const fillCanvas = returnFillCanvas(ctx);

      fillCanvas('white');

      const graClr = ctx.createLinearGradient(0, 0, WIDTH, 0);
      graClr.addColorStop(0, 'white');
      graClr.addColorStop(1, rgb);

      fillCanvas(graClr);

      const graDrk = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      graDrk.addColorStop(0, 'transparent');
      graDrk.addColorStop(1, 'black');

      fillCanvas(graDrk);
    }
  }, [rgb]);

  // hue colors
  useEffect(() => {
    const canv = colorCanvRef.current!;
    const ctx = getCtx(canv);

    const listener = (e: MouseEvent) => {
      const u8a = ctx!.getImageData(e.offsetX, e.offsetY, 1, 1).data!;
      setRgb(createRGB(u8a[0], u8a[1], u8a[2]));
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

  return (
    <main>
      <canvas ref={mainCanvRef} width={`${WIDTH}px`} height={`${HEIGHT}px`}>
        gradient color picker field
      </canvas>
      <canvas ref={colorCanvRef} width={`${WIDTH}px`} height={`${subHEIGHT}px`}>
        sub color picker field
      </canvas>
      {/* <input type="text" /> */}
    </main>
  );
}

export default App;
