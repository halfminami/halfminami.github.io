import "./card.scss";
import { JSXProps } from "./type";

interface CardProps extends JSXProps {}

function Card({ children, style, props, className }: CardProps) {
  return (
    <div className={["card", className].join(" ")} {...{ style }} {...props}>
      <div className={"cardinner"}>{children}</div>
    </div>
  );
}

export { Card };
