import { useRef, useState } from "preact/hooks";
import "./readmore.scss";

function ReadMore({ article }: { article: HTMLElement }) {
  const folded = "read more";
  const opened = "show less";
  type btnMsg = "read more" | "show less";

  const hider = useRef<HTMLDivElement>(null);
  const [btnCont, setBtnCont] = useState<btnMsg>(folded);

  return (
    <>
      <div ref={hider} className={"hider"}></div>
      <button
        className={"readmore"}
        onClick={() => {
          if (btnCont == folded) {
            setBtnCont(opened);

            hider.current?.classList.add("hidden");
            article.classList.remove("toolong");
          } else {
            setBtnCont(folded);

            hider.current?.classList.remove("hidden");
            article.classList.add("toolong");
          }
        }}
      >
        {btnCont}
      </button>
    </>
  );
}
export { ReadMore };
