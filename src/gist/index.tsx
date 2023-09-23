import { render } from 'preact';

export const coderainTitle = 'Canvas Code Rain';
function Index() {
  return (
    <ul>
      <li>
        <a href="/gist/coderain.html">{coderainTitle}</a>
        <p>code rain background</p>
      </li>
    </ul>
  );
}

function mnt(id: string) {
  render(<Index></Index>, document.getElementById(id)!);
}

export { Index, mnt };
