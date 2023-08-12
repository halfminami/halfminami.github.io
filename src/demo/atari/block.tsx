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
      className={["block"]
        .concat(prop.props.className ? [prop.props.className] : [])
        .join(" ")}
      style={{
        left: `${prop.x}px`,
        right: `${prop.y}px`,
        width: `${prop.width}px`,
        height: `${prop.height}px`,
      }}
      {...prop.props}
    >
      {prop.children}
    </div>
  );
}

export { Block };
