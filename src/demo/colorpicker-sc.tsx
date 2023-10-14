import { render } from 'preact';
import App from './colorpicker/App';

import { colorpickerTitle as title } from '.';
document.title = title;

render(
  <>
    <h1>{title}</h1>
    <p>
      pick a color from the big rect. change hue on rainbow bar. type in inputs
      to change color.
    </p>
    <App></App>
  </>,
  document.getElementById('app')!
);

import { mnt as mntHeader } from '../assets/header';
import { mnt as mntFooter } from '../assets/footer';
import '/src/style.scss';

mntHeader();
mntFooter();
