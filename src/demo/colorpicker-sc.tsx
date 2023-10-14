import { render } from 'preact';
import App from './colorpicker/App';

import { colorpickerTitle as title } from '.';
document.title = title;

render(
  <>
    <h1>{title}</h1>
    <p>color picker</p>
    <App></App>
  </>,
  document.getElementById('app')!
);

import { mnt as mntHeader } from '../assets/header';
import { mnt as mntFooter } from '../assets/footer';
import '/src/style.scss';

mntHeader();
mntFooter();
