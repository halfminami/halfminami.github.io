import "./coolButton.scss";
import { JSXProps } from "./type";

interface CoolButtonProps extends JSXProps {
  children?: string;
}

function CoolButton({ children, style }: CoolButtonProps) {
  return (
    <button {...{ style }} className={"coolbutton"}>
      {children}
    </button>
  );
}

export { CoolButton };
