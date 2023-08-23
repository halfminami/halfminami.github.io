import "./codeBox.scss";
import { JSXProps } from "./type";

interface CodeBoxProps extends JSXProps {
  title?: string;
}

function CodeBox({ children, title, style, props, className }: CodeBoxProps) {
  return (
    <div className={["codebox", className].join(" ")} {...{ style }} {...props}>
      <samp>
        <kbd>{children}</kbd>
      </samp>
    </div>
  );
}

export { CodeBox };
