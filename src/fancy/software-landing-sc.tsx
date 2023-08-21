import { softwareLandingTitle as title } from ".";
import "./software-landing/software-landing.scss";
import { Header } from "./software-landing/header";
import { Footer } from "./software-landing/footer";
import { render } from "preact";
import { DefLogo } from "./software-landing/logo";
import { Main } from "./software-landing/main";

render(
  <DefLogo></DefLogo>,
  document.body.insertAdjacentElement(
    "afterbegin",
    document.createElement("div")
  )!
);
render(<Main></Main>, document.getElementById("main")!);
render(<Header></Header>, document.getElementById("header")!);
render(<Footer></Footer>, document.getElementById("footer")!);

document.title = title;
