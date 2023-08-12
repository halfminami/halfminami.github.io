import { createRef, render } from "preact";
import "./msg.scss";
import { JSX } from "preact";

function Msg(msg: string | JSX.Element, time = 4000, fade = 300) {
  const parent =
    document.body.querySelector<HTMLDivElement>("#msg-holder") ||
    document.body.appendChild(document.createElement("div"));
  parent.id = "msg-holder";

  const div = parent.appendChild(document.createElement("div"));
  const ref = createRef();

  render(
    <div
      className={"message"}
      style={{
        transitionDuration: `${fade}ms`,
      }}
      ref={ref}
    >
      {msg}
    </div>,
    div
  );

  setTimeout(() => {
    ref.current.style.opacity = "0";

    setTimeout(() => {
      render(null, div);
      div.remove();
    }, fade);
  }, time);
}

export { Msg };
