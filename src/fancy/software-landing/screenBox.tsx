import "./screenBox.scss";
import { JSXProps } from "./type";

type ScreenBoxProps = JSXProps & {};

function ScreenBox({ children, style, props, className }: ScreenBoxProps) {
  return (
    <section
      className={["screenbox", className].join(" ")}
      {...{ style }}
      {...props}
    >
      {children}
    </section>
  );
}

export { ScreenBox };
