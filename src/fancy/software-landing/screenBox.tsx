import "./screenBox.scss";
import { JSXProps } from "./type";

type ScreenBoxProps = JSXProps & {};

function ScreenBox({ children, style }: ScreenBoxProps) {
  return (
    <section className="screenbox" {...{ style }}>
      {children}
    </section>
  );
}

export { ScreenBox };
