import "./block.scss";
import { props } from "./main";

type blockProps = props & {
  x: number;
  y: number;
  width: number;
  height: number;
};

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

export { Block };
