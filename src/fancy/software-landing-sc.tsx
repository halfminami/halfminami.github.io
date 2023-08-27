import { softwareLandingTitle as title } from ".";
import "./software-landing/software-landing.scss";
import { Header } from "./software-landing/header";
import { Footer } from "./software-landing/footer";
import { render } from "preact";
import { DefLogo } from "./software-landing/logo";
import { Main } from "./software-landing/main";
import { useEffect } from "preact/hooks";
const hdr = document.getElementById("header")!;

render(
  <DefLogo></DefLogo>,
  document.body.insertAdjacentElement(
    "afterbegin",
    document.createElement("div")
  )!
);
render(<Main></Main>, document.getElementById("main")!);
render(<Header top={hdr}></Header>, hdr);
render(<Footer></Footer>, document.getElementById("footer")!);

document.title = title;

// useEffect global
const a = document.body.appendChild(document.createElement("div"));
function A() {
  // show element on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (item) => {
        item.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("scrollshown");

            io.unobserve(item.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = Array.from(document.querySelectorAll(".scrollhidden"));

    els.forEach((item) => {
      io.observe(item);
    });
    return () => {
      els.forEach((item) => {
        item.classList.remove("scrollshown");
        item.classList.add("scrollhidden");
      });
      io.disconnect();
    };
  }, []);
  return null;
}
render(<A />, a);
