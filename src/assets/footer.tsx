import { render } from "preact";
import "./footer.scss";

function RepoLink() {
  return (
    <a href={"https://github.com/halfminami/halfminami.github.io"}>
      this github pages repo
    </a>
  );
}

function Footer() {
  return (
    <>
      <p>Footer here</p>
      <p>
        <RepoLink></RepoLink>
      </p>
    </>
  );
}

function mnt() {
  const f = document.body.insertAdjacentElement(
    "beforeend",
    document.createElement("footer")
  );
  render(<Footer></Footer>, f!);
}

export { Footer, mnt, RepoLink };
