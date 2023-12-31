import { render } from 'preact';
import { useState } from 'preact/hooks';

import { MainWelcome } from './assets/mainWelcome';
import { Index as DemoIndex } from './demo';
import { Index as FancyIndex } from './fancy';
import { Index as GistIndex } from './gist';
import { Msg } from './assets/msg';

// common styles
import './style.scss';
import { mnt as mntHeader } from './assets/header';
import { RepoLink, mnt as mntFooter } from './assets/footer';

function Hello({ msg = '' }) {
  const [cnt, setCnt] = useState(0);
  return (
    <button
      onClick={() => {
        setCnt(cnt + 1);
        // Msg(`clicked at ${new Date().toTimeString()}!`);
        Msg(
          <span>
            clicked at{' '}
            <span style={{ color: 'yellowgreen' }}>
              {new Date().toTimeString()}
            </span>
            !
          </span>
        );
      }}
    >
      {msg ? msg + ', ' : ''}count is {cnt}
    </button>
  );
}

render(
  <p>
    Welcome to my tiny website! and <Hello msg="click me"></Hello>
  </p>,
  document.getElementById('hello')!
);

mntHeader('root');
mntFooter();

const welcome = document.body.insertAdjacentElement(
  'afterbegin',
  document.createElement('div')
)!;
welcome.classList.add('welcome');

render(<MainWelcome></MainWelcome>, welcome);

render(
  <ul>
    <li>
      <a href="./demo/index.html">demo</a>
      <details>
        <summary>some programming stuff. live demo.</summary>
        <DemoIndex></DemoIndex>
      </details>
    </li>
    <li>
      <a href="./fancy/index.html">fancy</a>
      <details>
        <summary>cool css. lorem ipsums.</summary>
        <FancyIndex></FancyIndex>
      </details>
    </li>
    <li>
      <a href="./gist/index.html">gist</a>
      <details>
        <summary>gist live example</summary>
        <GistIndex></GistIndex>
      </details>
    </li>
  </ul>,
  document.getElementById('index')!
);

for (const span of Array.from(document.getElementsByClassName('repo'))) {
  render(<RepoLink></RepoLink>, span);
}
