import { JSX } from "preact/jsx-runtime";
import { blockProps } from "./block";
import "./atariBlocks.scss";
import { useRef } from "preact/hooks";
import { RefObject } from "preact";

type atariBlocksProps = blockProps & {
  cols: number;
  rows: number;
  mgn?: number;
};

function AtariBlocks({
  props,
  x,
  y,
  width,
  height,
  cols,
  rows,
  mgn = 10,
}: atariBlocksProps): [
  JSX.Element,
  [number, number][][],
  RefObject<HTMLDivElement>[][],
  [number, number]
] {
  const MGN = mgn;
  const WID = (width - MGN * (cols + 1)) / cols;
  const HEI = (height - MGN * (rows + 1)) / rows;
  /** left upper point [[[x, y], ]] */
  const LUs: [number, number][][] = Array(rows)
    .fill(0)
    .map((_) => Array(cols).fill(0));
  const refs = Array(rows)
    .fill(0)
    .map((_) => Array(cols).fill(0))
    .map((arr) => arr.map((_) => useRef<HTMLDivElement>(null)));

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      LUs[i][j] = [(j + 1) * MGN + j * WID, (i + 1) * MGN + i * HEI];
    }
  }

  return [
    <div
      {...Object.assign(props, {
        style: Object.assign(
          {
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
          },
          props.style
        ),
        className: ["atari-wrapper"]
          .concat(props.className ? [props.className] : [])
          .join(" "),
      })}
    >
      {LUs.flatMap((item, i) =>
        item.map(([x, y], j) => (
          <div
            style={{
              left: x,
              top: y,
              width: WID,
              height: HEI,
              backgroundColor: `hsl(${i * 20} 100% 50%)`,
            }}
            className={"atari"}
            ref={refs[i][j]}
          ></div>
        ))
      )}
    </div>,
    LUs,
    refs,
    [WID, HEI],
  ];
}

export { AtariBlocks };
