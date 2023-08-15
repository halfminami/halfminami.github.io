import { render } from "preact";

export const livemjTitle = "MathJax Live Renderer";
export const namedcolorTitle = "CSS Named Colors";
export const breakoutTitle = "Endless Breakout Game";
function Index() {
  return (
    <ul>
      <li>
        <a href="/demo/livemj.html">{livemjTitle}</a>
        <p>using MathJax cdn on user input.</p>
      </li>
      <li>
        <a href="/demo/namedcolor.html">{namedcolorTitle}</a>
        <p>a list of named colors</p>
      </li>
      <li>
        <a href="/demo/breakout.html">{breakoutTitle}</a>
        <p>a simple breakout game. I just wanted to put some game here.</p>
      </li>
    </ul>
  );
}

function mnt(id: string) {
  render(<Index></Index>, document.getElementById(id)!);
}

export { Index, mnt };
