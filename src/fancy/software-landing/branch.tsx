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

/** branch circles for `.point` */
function Branch() {
  const svg = useRef<SVGSVGElement>(null);
  const circleWid = getComputedStyle(document.body).getPropertyValue(
    "--pointwid"
  );
  const [wid, setWid] = useState(0);
  const [hei, setHei] = useState(0);

  // resize listener
  useEffect(() => {
    const arr = Array.from(document.querySelectorAll<HTMLDivElement>(".point"));
    const circles: SVGCircleElement[][] = [];
    arr.forEach((_) => {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("r", `calc(${circleWid} / 2)`);
      circle.classList.add("vert");
      const circle2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle2.setAttribute("r", `calc(${circleWid} / 3)`);
      circle2.classList.add("insidevert");

      circles.push([circle, circle2]);
      svg.current?.appendChild(circle);
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
    });
    ro.observe(document.body);

    return () => ro.disconnect();
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
    ></svg>
  );
}

export { Branch };
