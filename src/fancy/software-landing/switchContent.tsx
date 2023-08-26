import React, { useState } from "preact/compat";
import { JSXProps } from "./type";

interface SwitchContentProps extends JSXProps {
  contents: { content: React.JSX.Element; switch: React.JSX.Element }[];
  switchStyle?: React.CSSProperties;
  switchClass?: string;
}

function SwitchContent({
  contents,
  style,
  switchStyle,
  props,
  className,
  switchClass,
}: SwitchContentProps) {
  const [indx, setIndx] = useState(0);

  return (
    <div
      className={["switch-content", className].join(" ")}
      {...{ style }}
      {...props}
    >
      {contents[indx].content}
      <div {...{ style: switchStyle }} className={switchClass}>
        {contents.map((item, i) => (
          <div onClick={() => setIndx(i)}> {item.switch}</div>
        ))}
      </div>
    </div>
  );
}

export { SwitchContent };
