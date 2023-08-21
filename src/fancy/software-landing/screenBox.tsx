import "./screenBox.scss";
import { JSXProps } from "./type";

type ScreenBoxProps = JSXProps & {};

function ScreenBox({ children, style }: ScreenBoxProps) {
  return (
    <section className="screen" {...{ style }}>
      {children}
    </section>
  );
}

export { ScreenBox };
