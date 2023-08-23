import React, { useState } from "preact/compat";
import { JSXProps } from "./type";

interface SwitchContentProps extends JSXProps {
  contents: { content: React.JSX.Element; switch: React.JSX.Element }[];
  contentStyle?: React.CSSProperties;
  switchStyle?: React.CSSProperties;
}

function SwitchContent({
  contents,
  style,
  contentStyle,
  switchStyle,
  props,
  className,
}: SwitchContentProps) {
  const [indx, setIndx] = useState(0);

  return (
    <div
      className={["switch-content", className].join(" ")}
      {...{ style }}
      {...props}
    >
      <div {...{ style: contentStyle }}>{contents[indx].content}</div>
      <div {...{ style: switchStyle }}>
        {contents.map((item, i) => (
          <div onClick={() => setIndx(i)}> {item.switch}</div>
        ))}
      </div>
    </div>
  );
}

export { SwitchContent };
