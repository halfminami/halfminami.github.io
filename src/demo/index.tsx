import { render } from 'preact';

export const livemjTitle = 'MathJax Live Renderer';
export const namedcolorTitle = 'CSS Named Colors';
export const breakoutTitle = 'Endless Breakout Game';
export const colorpickerTitle = 'Color Picker';
function Index() {
  return (
    <ul>
      <li>
        <a href="/demo/maze-generation-visualization/index.html">
          Maze Generation Animation
        </a>
        <p>maze generation with spanning tree</p>
      </li>
      <li>
        <a href="/demo/tree_visualization/index.html">Tree Visualization</a>
        <p>generates SVG representing tree</p>
      </li>
      <li>
        <a href="/demo/colorpicker.html">{colorpickerTitle}</a>
        <p>canvas color picker</p>
      </li>
      <li>
        <a href="/demo/namedcolor.html">{namedcolorTitle}</a>
        <p>a list of named colors</p>
      </li>
      <li>
        <a href="/demo/livemj.html">{livemjTitle}</a>
        <p>using MathJax cdn on user input.</p>
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
