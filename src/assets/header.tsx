import { render } from 'preact';
import './header.scss';

function Header({ dir = '' }) {
  return (
    <>
      <span>index: </span>
      <nav>
        <a href="/index.html" className={dir == 'root' ? 'current' : ''}>
          root
        </a>
        <a href="/demo/index.html" className={dir == 'demo' ? 'current' : ''}>
          demo
        </a>
        <a href="/fancy/index.html" className={dir == 'fancy' ? 'current' : ''}>
          fancy
        </a>
        <a href="/gist/index.html" className={dir == 'gist' ? 'current' : ''}>
          gist
        </a>
      </nav>
    </>
  );
}

/** pass current location word, if any */
function mnt(top = '') {
  const h = document.body.insertAdjacentElement(
    'afterbegin',
    document.createElement('header')
  );
  render(<Header dir={top}></Header>, h!);
}

export { Header, mnt };
