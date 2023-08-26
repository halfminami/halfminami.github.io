import React, { useState } from "preact/compat";
import { JSXProps } from "./type";

interface SwitchContentProps extends JSXProps {
  contents: {
    content: React.JSX.Element;
    renderSwitch: (_: { onClick: () => void }) => React.JSX.Element;
  }[];
  renderSwitchContainer: (_: {
    children: React.JSX.Element;
  }) => React.JSX.Element;
}

function SwitchContent({
  contents,
  style,
  props,
  className,
  renderSwitchContainer,
}: SwitchContentProps) {
  const [indx, setIndx] = useState(0);

  return (
    <div
      className={["switch-content", className].join(" ")}
      {...{ style }}
      {...props}
    >
      {contents[indx].content}
      {renderSwitchContainer({
        children: (
          <>
            {contents.map((item, i) =>
              item.renderSwitch({ onClick: () => setIndx(i) })
            )}
          </>
        ),
      })}
    </div>
  );
}

export { SwitchContent };
