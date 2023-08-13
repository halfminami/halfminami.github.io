import "./main.scss";
import { useEffect, useState } from "preact/hooks";
import { Ball } from "./ball";
import { Block } from "./block";

export type props = { props: any; children?: any };

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
  const app = document.getElementById("app")!;
  const [appWid, setAppWid] = useState(app.clientWidth);
  const [appHei, setAppHei] = useState(app.clientHeight);

  const [pageX, setPageX] = useState(0);

  function onMouseMove(e: MouseEvent) {
    setPageX(e.pageX);
  }
  function onResize() {
    setAppHei(app.clientHeight);
    setAppWid(app.clientWidth);
  }

  const BALL_WIDTH_MIN = 10;
  const WALL_BLOCKS_WIDTH = 20; // wall width
  const WALL_MGN = 10;
  const SLIDE_MGN = WALL_MGN + WALL_BLOCKS_WIDTH;

  const SLIDE_BLOCK_WIDTH = Math.max(BALL_WIDTH_MIN * 12, appWid / 6);
  const SLIDE_BLOCK_HEIGHT = 20;
  const SLIDE_BLOCK_Y = appHei - 2 * SLIDE_BLOCK_HEIGHT; // top point
  const SLIDE_BLOCK_X_MIN = SLIDE_MGN;
  const SLIDE_BLOCK_X_MAX = appWid - SLIDE_MGN - SLIDE_BLOCK_WIDTH; // left point

  const BALL_WIDTH = Math.max(BALL_WIDTH_MIN, SLIDE_BLOCK_WIDTH / 12);

  const WALL_BLOCKS_LEFT = WALL_MGN;
  const WALL_BLOCKS_RIGHT = appWid - WALL_MGN - WALL_BLOCKS_WIDTH; // left point
  const WALL_BLOCKS_TOP = 10;
  const WALL_BLOCKS_BOTTOM = SLIDE_BLOCK_Y;

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
          props: { className: "slide" },
        }}
      >
        slide bar
      </Block>
      <Block
        {...{
          x: WALL_BLOCKS_LEFT,
          y: WALL_BLOCKS_TOP,
          width: WALL_BLOCKS_WIDTH,
          height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
          props: {
            /* style: { backgroundColor: "red" } */
          },
        }}
      >
        left wall
      </Block>
      <Block
        {...{
          x: WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH,
          y: WALL_BLOCKS_TOP,
          width: WALL_BLOCKS_RIGHT - WALL_BLOCKS_LEFT,
          height: WALL_BLOCKS_WIDTH,
          props: {
            /* style: { backgroundColor: "green" } */
          },
        }}
      >
        top wall
      </Block>
      <Block
        {...{
          x: WALL_BLOCKS_RIGHT,
          y: WALL_BLOCKS_TOP,
          width: WALL_BLOCKS_WIDTH,
          height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
          props: {
            /* style: { backgroundColor: "blue" } */
          },
        }}
      >
        right wall
      </Block>
      <Ball {...{ cx: 300, cy: 300, r: BALL_WIDTH, props: {} }}>ball</Ball>
    </>
  );
}

export { Main };
