import "./main.scss";
import { useEffect, useState } from "preact/hooks";
import { Ball } from "./ball";
import { Block } from "./block";

export type props = { props: { [key: string]: any }; children?: any };

// |------> +x
// |
// v
// +y

type pair<T> = { x: T; y: T };

class BlocksHandler {
  rects: [(_: pair<number>) => boolean, () => void][] = [];

  checkInside(arr: pair<number>[]) {
    arr.forEach((item) => {
      this.rects.forEach(([chk, func]) => {
        if (chk(item)) {
          func();
        }
      });
    });
  }

  constructor(rects: [(_: pair<number>) => boolean, () => void][]) {
    this.rects = rects;
  }
}

type setter<T> = (_: T) => void;

class BallHandler {
  point: pair<number> = { x: 0, y: 0 };
  setPoint;
  r: number = 0;
  v: pair<number> = { x: 0, y: 0 };
  setV;
  scale: number = 1;

  chk: (() => pair<number>)[] = [
    // top
    () => {
      return { x: this.point.x, y: this.point.y - this.r };
    },
    // bottom
    () => {
      return { x: this.point.x, y: this.point.y + this.r };
    },
    // right
    () => {
      return { x: this.point.x + this.r, y: this.point.y };
    },
    // left
    () => {
      return { x: this.point.x - this.r, y: this.point.y };
    },
  ];

  updatePosition() {
    // this.point.x += this.v.x * this.scale;
    // this.point.y += this.v.y * this.scale;
    this.setPoint.x(this.point.x + this.v.x * this.scale);
    this.setPoint.y(this.point.y + this.v.y * this.scale);
  }

  /** pass state values */
  constructor(
    cx: number,
    setCx: setter<number>,
    cy: number,
    setCy: setter<number>,
    r: number,
    vx: number,
    setVx: setter<number>,
    vy: number,
    setVy: setter<number>,
    scale: number
  ) {
    this.point = { x: cx, y: cy };
    this.setPoint = { x: setCx, y: setCy };

    this.r = r;

    this.v = { x: vx, y: vy };
    this.setV = { x: setVx, y: setVy };

    this.scale = scale;
  }
}

function minmax<T>(min: T, value: T, max: T) {
  function minimal(a: T, b: T) {
    return a > b ? b : a;
  }
  function maximal(a: T, b: T) {
    return a > b ? a : b;
  }

  return maximal(minimal(value, max), min);
}

function Main() {
  const [windowWid, setWindowWid] = useState(window.innerWidth);
  const [windowHei, setWindowHei] = useState(window.innerHeight);

  const [pageX, setPageX] = useState(0);

  function onMouseMove(e: MouseEvent) {
    setPageX(e.pageX);
  }
  function onResize() {
    // setWindowWid(window.innerWidth);
    // setWindowHei(window.innerHeight);
    const app = document.getElementById("app")!;
    setWindowHei(app.clientHeight);
    setWindowWid(app.clientWidth);
  }

  const SLIDE_BLOCK_WIDTH = 300;
  const SLIDE_BLOCK_HEIGHT = 30;
  const SLIDE_BLOCK_Y = windowHei - 2 * SLIDE_BLOCK_HEIGHT;
  const SLIDE_BLOCK_X_MIN = 10;
  const SLIDE_BLOCK_X_MAX = windowWid - SLIDE_BLOCK_X_MIN - SLIDE_BLOCK_WIDTH;

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Block
        {...{
          x: minmax(
            SLIDE_BLOCK_X_MIN,
            pageX - SLIDE_BLOCK_WIDTH / 2, // block left point
            SLIDE_BLOCK_X_MAX
          ),
          y: SLIDE_BLOCK_Y,
          width: SLIDE_BLOCK_WIDTH,
          height: SLIDE_BLOCK_HEIGHT,
          props: {},
        }}
      >
        block
      </Block>
      <Ball {...{ cx: 300, cy: 300, r: 10, props: {} }}>ball</Ball>
    </>
  );
}

export { Main };
