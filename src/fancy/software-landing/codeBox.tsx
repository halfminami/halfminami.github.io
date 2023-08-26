import "./codeBox.scss";
import { JSXProps } from "./type";

interface CodeBoxProps extends JSXProps {
  title?: string;
}

function CodeBox({ children, title, style, props, className }: CodeBoxProps) {
  return (
    <div className={["codebox", className].join(" ")} {...{ style }} {...props}>
      <div className={"title"}>{title && <span>{title}</span>}</div>
      <div className={"code"}>
        <samp>
          <kbd>{children}</kbd>
        </samp>
      </div>
    </div>
  );
}

export { CodeBox };
