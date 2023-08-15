import { render } from "preact";

function Index() {
  return (
    <ul>
      <li>
        <a href="/demo/livemj.html">MathJax Live Renderer</a>
        <p>using MathJax cdn on user input.</p>
      </li>
      <li>
        <a href="/demo/namedcolor.html">CSS named colors</a>
        <p>a list of named colors</p>
      </li>
      <li>
        <a href="/demo/breakout.html">infinite breakout game</a>
        <p>a simple breakout game. I just wanted to put some game here.</p>
      </li>
    </ul>
  );
}

function mnt(id: string) {
  render(<Index></Index>, document.getElementById(id)!);
}

export { Index, mnt };
