import { Ball } from "./ball";
import { Block } from "./block";

export type props = { props: { [key: string]: any }; children?: any };

// |------> +x
// |
// v
// +y

type pair<T> = { x: T; y: T };

class Blocks {
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

function Main() {
  return (
    <>
      <Block {...{ x: 10, y: 10, width: 100, height: 50, props: {} }}>
        block
      </Block>
      <Ball {...{ cx: 500, cy: 300, r: 30, props: {} }}>ball</Ball>
    </>
  );
}

export { Main };
