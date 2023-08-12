import { render } from "preact";
import "./footer.scss";

function Footer() {
  return (
    <>
      <p>Footer here</p>
      {/* <p>repo</p> */}
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

export { Footer, mnt };
