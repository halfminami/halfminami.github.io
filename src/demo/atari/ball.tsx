import "./ball.scss";
import { props } from "./main";

type ballProps = props & { cx: number; cy: number; r: number };

/** pass state x&y */
function Ball(prop: ballProps) {
  return (
    <div
      className={["ball"]
        .concat(prop.props.className ? [prop.props.className] : [])
        .join(" ")}
      style={{
        left: `${prop.cx - prop.r}px`,
        top: `${prop.cy - prop.r}px`,
        width: `${prop.r * 2}px`,
      }}
      {...prop.props}
    >
      {prop.children}
    </div>
  );
}

export { Ball };
