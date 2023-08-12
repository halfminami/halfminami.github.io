import { render } from "preact";
import colors from "./namedcolor.json";
import "./namedcolor.scss";
import "../../src/style.scss";
import { mnt as mntHeader } from "../assets/header";
import { mnt as mntFooter } from "../assets/footer";
import { useState } from "preact/hooks";

// includes begin and end
function mathrandint(begin: number, end: number) {
  end++;
  if (0 < end - begin && end - begin < 1) return Math.floor(end);
  begin = Math.ceil(begin);
  end = Math.floor(end);
  if (end - begin < 0) return 0;
  return Math.min(Math.floor(Math.random() * (end - begin)) + begin, end - 1);
}

function RandomColor() {
  const [color, setColor] = useState(colors[0]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        width: "fit-content",
        columnGap: "var(--mgn)",
      }}
    >
      <button
        style={{ display: "block" }}
        onClick={() => {
          setColor(colors[mathrandint(0, colors.length - 1)]);
        }}
      >
        random color!
      </button>
      <span style={{ display: "block" }}>{color}</span>
      <div
        className={"colorbox"}
        style={{ backgroundColor: color, margin: "0" }}
      ></div>
    </div>
  );
}

render(
  <>
    <h1>CSS Named Colors</h1>
    <p>A list of css named colors.</p>
    <main>
      <RandomColor></RandomColor>
      <ul>
        {colors.map((item) => (
          <li>
            <span>{item}</span>
            <div className={"colorbox"} style={{ backgroundColor: item }}></div>
          </li>
        ))}
      </ul>
    </main>
  </>,
  document.getElementById("app")!
);

mntHeader();
mntFooter();
