import "./coolButton.scss";
import { JSXProps } from "./type";

interface CoolButtonProps extends JSXProps {}

function CoolButton({ children, style, props, className }: CoolButtonProps) {
  return (
    <button
      {...{ style }}
      className={["coolbutton", className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export { CoolButton };
