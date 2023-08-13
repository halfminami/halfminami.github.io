import { JSX } from "preact/jsx-runtime";
import "./block.scss";
import { blockCheck, blockEvent, props } from "./main";

export type blockProps = props & {
  x: number;
  y: number;
  width: number;
  height: number;
};

function isMinMax<T>(min: T, value: T, max: T) {
  return min <= value && value <= max;
}

function Block(prop: blockProps) {
  return (
    <div
      {...Object.assign(prop.props, {
        style: Object.assign(
          {
            left: `${prop.x}px`,
            top: `${prop.y}px`,
            width: `${prop.width}px`,
            height: `${prop.height}px`,
          },
          prop.props.style
        ),
        className: ["block"]
          .concat(prop.props.className ? [prop.props.className] : [])
          .join(" "),
      })}
    >
      {prop.children}
    </div>
  );
}

/** creates check function and Block */
function blockWrapper(
  prop: blockProps,
  f: blockEvent
): [[blockCheck, blockEvent], JSX.Element] {
  return [
    [
      (p) =>
        isMinMax(prop.x, p.x, prop.x + prop.width) &&
        isMinMax(prop.y, p.y, prop.y + prop.height),
      f,
    ],
    <Block {...prop}></Block>,
  ];
}

export { blockWrapper };
