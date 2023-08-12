import { mnt as mntMJ, randomFormula } from "./livemj";
import { mnt as mntHeader } from "../assets/header";
import { mnt as mntFooter } from "../assets/footer";
import "../../src/style.scss";

declare global {
  var randomFormula: any;
}

window.addEventListener("load", () => {
  mntMJ("tex.inlineMath=[['$', '$'],['\\\\(', '\\\\)']]");
});

window.randomFormula = () => {
  console.log(randomFormula());
};

mntHeader();
mntFooter();
