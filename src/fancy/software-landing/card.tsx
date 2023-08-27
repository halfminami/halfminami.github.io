import "./card.scss";
import { JSXProps } from "./type";

interface CardProps extends JSXProps {}

function Card({ children, style, props, className }: CardProps) {
  return (
    <div
      className={["cardwrapper", className].join(" ")}
      {...{ style }}
      {...props}
    >
      <div className={"card"}></div>
      <div className={"cardinner"}>{children}</div>
    </div>
  );
}

export { Card };
