import "./card.scss";
import { JSXProps } from "./type";

interface CardProps extends JSXProps {}

function Card({ children, style }: CardProps) {
  return (
    <div className="card" {...{ style }}>
      {children}
    </div>
  );
}

export { Card };
