import "./codeBox.scss";
import { JSXProps } from "./type";

interface CodeBoxProps extends JSXProps {
  title?: string;
}

function CodeBox({ children, title, style }: CodeBoxProps) {
  return (
    <div className={"codebox"} {...{ style }}>
      <samp>
        <kbd>{children}</kbd>
      </samp>
    </div>
  );
}

export { CodeBox };
