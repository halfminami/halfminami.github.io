import "./ball.scss";
import { props } from "./main";

type ballProps = props & { cx: number; cy: number; r: number };

/** pass state x&y */
function Ball(prop: ballProps) {
  return (
    <div
      {...Object.assign(prop.props, {
        style: Object.assign(
          {
            left: `${prop.cx - prop.r}px`,
            top: `${prop.cy - prop.r}px`,
            width: `${prop.r * 2}px`,
          },
          prop.props.style
        ),
        className: ["ball"]
          .concat(prop.props.className ? [prop.props.className] : [])
          .join(" "),
      })}
    >
      {prop.children}
    </div>
  );
}

export { Ball };
