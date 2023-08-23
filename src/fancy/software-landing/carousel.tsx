import React from "preact/compat";
import "./carousel.scss";
import { JSXProps } from "./type";

interface CarouselProps extends JSXProps {
  children: React.JSX.Element[];
}

function Carousel({ style, children, props, className }: CarouselProps) {
  return (
    <ul className={["carousel", className].join(" ")} {...{ style }} {...props}>
      {children.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export { Carousel };
