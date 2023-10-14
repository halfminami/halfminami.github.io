// this is the first time using preact yay! poor code warning!
// (i have tried vue-sfc long before, but am totally new to javascript ui framework/library)

import { RefObject, render } from 'preact';
import { GrowsTextarea } from '../../assets/growsTextarea';
import { useEffect, useRef } from 'preact/hooks';
import './livemj.scss';
import { Msg } from '../../assets/msg';

declare global {
  var MathJax: any;
}

function LiveMJ() {
  const textarea: RefObject<HTMLTextAreaElement> = useRef(null);
  const div: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    updateDiv();
  }, []);

  function updateDiv() {
    // danger: self xss!
    if (div.current && textarea.current) {
      div.current.innerHTML = textarea.current.value
        .replace(/\<script.*\<\/script\>/g, '')
        .replace(/\<style.*\<\/style\>/g, '');
      // div should be updated even if the value is not changed
      // so not using hooks. idk y i chose preact here sry

      MathJax.typeset([div.current]);
    }
  }

  return (
    <div>
      <div style={{ marginRight: '1rem' }}>
        <label>
          inner html:
          <GrowsTextarea
            props={{
              ref: textarea,
              onChange: () => updateDiv(),
              className: 'mjinput',
            }}
            text={randomFormula()}
            width="100%"
          ></GrowsTextarea>
        </label>
        <button onClick={() => updateDiv()}>render!</button>
      </div>
      <div>
        <p style={{ color: 'gray', margin: 0 }}>result:</p>
        <div style={{ width: '100%' }} ref={div} className={'mjoutput'}></div>
      </div>
    </div>
  );
}

function randomFormula() {
  // includes begin and end
  function mathrandint(begin: number, end: number) {
    end++;
    if (0 < end - begin && end - begin < 1) return Math.floor(end);
    begin = Math.ceil(begin);
    end = Math.floor(end);
    if (end - begin < 0) return 0;
    return Math.min(Math.floor(Math.random() * (end - begin)) + begin, end - 1);
  }

  const tmpl = (mes: string, formula: string) =>
    `<p>${mes} \\(${formula}\\)</p>
<div>\\[${formula}\\]</div>`;

  // love random!
  const formulae = [
    (() => {
      const formula = `\\sum^{\\infty}_{i=0} ar^{i}=\\frac{a}{1-r} when \\left|r\\right| < 1`;
      return tmpl('here is sum of an infinite series formula!', formula);
    })(),
    (() => {
      const formula = `e^{j\\theta}=\\cos \\theta +j\\sin \\theta`;
      return tmpl("it's euler's formula!", formula);
    })(),
    (() => {
      const formula = `n\\left(A\\cup B\\cup C\\right)=n\\left(A\\right)+n\\left(B\\right)+n\\left(C\\right)-n\\left(A\\cap B\\right)-n\\left(B\\cap C\\right)-n\\left(A\\cap C\\right)+n\\left(A\\cap B\\cap C\\right)`;
      return tmpl('count elements in 3 sets!', formula);
    })(),
    (() => {
      const formula = `\\int xdx=\\frac{x^2}{2}+C`;
      return tmpl('an indefinite integral!', formula);
    })(),
    (() => {
      const formula = `S=4\\pi r^2`;
      return tmpl('that sphere surface area...', formula);
    })(),
    (() => {
      const formula = `S=\\frac{4}{3}\\pi r^3`;
      return tmpl('that sphere volume...', formula);
    })(),
  ];
  return formulae[mathrandint(0, formulae.length - 1)];
}

function loadopt(setoptF: () => void) {
  setoptF();

  MathJax.startup.output.clearCache();
  MathJax.startup.getComponents();

  for (const ta of Array.from(document.querySelectorAll('textarea.mjinput'))) {
    ta.dispatchEvent(new Event('change'));
  }

  MathJax.typeset(Array.from(document.querySelectorAll('.mjoutput')));
}

function OptionMJ({ initial = '' }) {
  const textarea: RefObject<HTMLTextAreaElement> = useRef(null);

  function setoptFunc(str: string): [() => void, string] {
    // danger: self xss!
    const prog = str
      .split('\n')
      .map((s) => 'MathJax.config.' + s.replace(/(?<=.+?);/, ';//'))
      .join('\n');

    const ret = new Function(prog) as () => void;
    return [ret, prog];
  }

  return (
    <div>
      <label>
        MathJax option:
        <GrowsTextarea
          props={{ ref: textarea }}
          text={initial}
          width="100%"
        ></GrowsTextarea>
      </label>
      <button
        onClick={() => {
          const [f, s] = setoptFunc(textarea.current!.value);
          loadopt(f);
          // Msg("created Function: " + s);
          Msg(
            <div>
              <span style={{ color: 'gray' }}>created Function:</span>{' '}
              <pre>{s}</pre>
            </div>
          );
        }}
      >
        load option!
      </button>
      <p>
        <strong>input javascript. (escape backslash)</strong> will be appended
        after <code>MathJax.config.</code>. cannot use semicolon. using
        tex-chtml.js only.
      </p>
    </div>
  );
}

function mnt(mjopt: string) {
  render(<LiveMJ />, document.querySelector('.cdnmathjax')!);

  render(
    <OptionMJ initial={mjopt} />,
    document.querySelector('.cdnmathjax-opt')!
  );
}

export { randomFormula, LiveMJ, OptionMJ, mnt };
