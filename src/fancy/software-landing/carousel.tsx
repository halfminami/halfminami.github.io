import React from "preact/compat";
import "./carousel.scss";
import { JSXProps } from "./type";

interface CarouselProps extends JSXProps {
  children: React.JSX.Element[];
}

function Carousel({ style, children }: CarouselProps) {
  return (
    <ul className={"carousel"} {...{ style }}>
      {children.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export { Carousel };
