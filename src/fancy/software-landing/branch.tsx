import { useEffect, useRef, useState } from "preact/hooks";
import "./branch.scss";

function getPos(el: HTMLElement) {
  const r = el.getBoundingClientRect();

  const pageTop = r.top + window.scrollY;
  const pageLeft = r.left + window.scrollX;
  const pageRight = pageLeft + r.width;
  const pageBottom = pageTop + r.height;
  return {
    pageTop,
    pageLeft,
    pageRight,
    pageBottom,
    centerX: (pageRight + pageLeft) / 2,
    centerY: (pageBottom + pageTop) / 2,
  };
}

function getPosStr(p: { x: number; y: number }) {
  return `${p.x},${p.y}`;
}

/** branch circles for `.point` */
function Branch() {
  const svg = useRef<SVGSVGElement>(null);
  const [wid, setWid] = useState(0);
  const [hei, setHei] = useState(0);

  // resize listener
  useEffect(() => {
    const circleWid = document.querySelector(".point")?.clientWidth || 30; // get px after render
    const arr = Array.from(document.querySelectorAll<HTMLDivElement>(".point"));
    const circles: SVGElement[][] = [];
    const path = svg.current?.appendChild(
      document.createElementNS("http://www.w3.org/2000/svg", "path")
    )!;
    path.classList.add("bezier");
    // total of 100 dasharray
    path.setAttribute("pathLength", "100");

    arr.forEach((_) => {
      const circle0 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle0.setAttribute("r", `${circleWid / 1.2}`);
      circle0.classList.add("backvert");
      const circle1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle1.setAttribute("r", `${circleWid / 2}`);
      circle1.classList.add("vert");
      const circle2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle2.setAttribute("r", `${circleWid / 3}`);
      circle2.classList.add("insidevert");

      circles.push([circle0, circle1, circle2]);
      svg.current?.appendChild(circle0);
      svg.current?.appendChild(circle1);
      svg.current?.appendChild(circle2);
    });

    // only listen for body
    const ro = new ResizeObserver((es) => {
      setWid(es[0].contentRect.width);
      setHei(es[0].contentRect.height);

      arr.forEach((item, i) => {
        const pos = getPos(item);

        circles[i].forEach((item) => {
          item.setAttribute("cx", `${pos.centerX}`);
          item.setAttribute("cy", `${pos.centerY}`);
        });
      });

      let d = `M${getPosStr({
        x: getPos(arr[0]).centerX,
        y: getPos(arr[0]).centerY,
      })}`;
      for (let i = 0; i < arr.length - 1; ++i) {
        const p0 = getPos(arr[i]);
        const p1 = getPos(arr[i + 1]);
        d += `C${getPosStr({ x: p0.centerX, y: p1.centerY })} ${getPosStr({
          x: p1.centerX,
          y: p0.centerY,
        })} ${getPosStr({ x: p1.centerX, y: p1.centerY })}`;
      }
      path.setAttribute("d", d);
    });

    ro.observe(document.body);

    return () => {
      circles
        .flat(1)
        .concat([path])
        .forEach((item) => item.remove());
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    svg.current?.setAttribute("viewBox", `0 0 ${wid} ${hei}`);
    // width and height is ok with position absolute
  }, [wid, hei]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="branch"
      ref={svg}
      style={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
      aria-hidden="true"
    ></svg>
  );
}

export { Branch };
