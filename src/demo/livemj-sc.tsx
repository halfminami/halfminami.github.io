import { mnt as mntMJ, randomFormula } from './livemj/livemj';

declare global {
  var randomFormula: any;
}

window.addEventListener('load', () => {
  mntMJ("tex.inlineMath=[['$', '$'],['\\\\(', '\\\\)']]");
});

window.randomFormula = () => {
  console.log(randomFormula());
};

import { mnt as mntHeader } from '../assets/header';
import { mnt as mntFooter } from '../assets/footer';
import '../../src/style.scss';

mntHeader();
mntFooter();

import { livemjTitle as title } from '.';
document.title = title;
