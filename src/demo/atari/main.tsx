import "./main.scss";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { Ball } from "./ball";
import { blockProps, blockWrapper } from "./block";

export type props = { props: any; children?: any };

// |------> +x
// |
// v
// +y

type pair<T> = { x: T; y: T };

export type blockEvent = () => void;
export type blockCheck = (_: pair<number>) => boolean;

class BlocksHandler {
  rects: [blockCheck, blockEvent][] = [];

  checkInside(arr: pair<number>[]) {
    arr.forEach((item) => {
      this.rects.forEach(([chk, func]) => {
        console.log(item);
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

class BallHandler {
  point: pair<number> = { x: 0, y: 0 };
  setPoint;
  v: pair<number> = { x: 0, y: 0 };
  scale: number = 1;

  chk: ((_: pair<number>, r: number) => pair<number>)[] = [
    // top
    (p, r) => {
      return { x: p.x, y: p.y - r };
    },
    // bottom
    (p, r) => {
      return { x: p.x, y: p.y + r };
    },
    // right
    (p, r) => {
      return { x: p.x + r, y: p.y };
    },
    // left
    (p, r) => {
      return { x: p.x - r, y: p.y };
    },
  ];

  updatePosition() {
    this.setPoint.x((x: number) => x + this.v.x * this.scale);
    this.setPoint.y((y: number) => y + this.v.y * this.scale);
  }

  /** pass state values */
  constructor(
    cx: number,
    setCx: StateUpdater<number>,
    cy: number,
    setCy: StateUpdater<number>,
    v: { x: number; y: number }
  ) {
    this.point = { x: cx, y: cy };
    this.setPoint = { x: setCx, y: setCy };

    this.v = v;

    this.scale = 1;
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

function randomV() {
  return (Math.random() > 0.5 ? -1 : 1) * Math.random() * 3;
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

  // const TICK = 1000 / 60;
  const TICK = 1000;
  const BALL_WIDTH_MIN = 10;
  const WALL_BLOCKS_WIDTH = 40; // wall width
  const WALL_MGN = 10;
  const SLIDE_MGN = WALL_MGN + WALL_BLOCKS_WIDTH;

  const SLIDE_BLOCK_WIDTH = Math.max(BALL_WIDTH_MIN * 12, appWid / 6);
  const SLIDE_BLOCK_HEIGHT = 20;

  const BALL_WIDTH = Math.max(BALL_WIDTH_MIN, SLIDE_BLOCK_WIDTH / 12);
  const INI_BALL_CX = appWid / 2;
  const INI_BALL_CY = appHei - 3 * SLIDE_BLOCK_HEIGHT - BALL_WIDTH;

  const [ballCx, setBallCx] = useState(INI_BALL_CX);
  const [ballCy, setBallCy] = useState(INI_BALL_CY);
  // const [ballVx, setBallVx] = useState(0);
  // const [ballVy, setBallVy] = useState(0);

  const SLIDE_BLOCK_Y = appHei - 2 * SLIDE_BLOCK_HEIGHT; // top point
  const SLIDE_BLOCK_X_MIN = SLIDE_MGN;
  const SLIDE_BLOCK_X_MAX = appWid - SLIDE_MGN - SLIDE_BLOCK_WIDTH; // left point

  const WALL_BLOCKS_LEFT = WALL_MGN;
  const WALL_BLOCKS_RIGHT = appWid - WALL_MGN - WALL_BLOCKS_WIDTH; // left point
  const WALL_BLOCKS_TOP = WALL_MGN;
  const WALL_BLOCKS_BOTTOM = SLIDE_BLOCK_Y;

  // const ballV={x:ballVx,y:ballVy};
  /** object reference, do not assign */
  const ballV = { x: 0, y: 0 };

  const ballHandler = new BallHandler(
    ballCx,
    setBallCx,
    ballCy,
    setBallCy,
    ballV
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const slideBlockProp: blockProps = {
    x: minmax(
      SLIDE_BLOCK_X_MIN,
      pageX - SLIDE_BLOCK_WIDTH / 2, // block left point
      SLIDE_BLOCK_X_MAX
    ),
    y: SLIDE_BLOCK_Y,
    width: SLIDE_BLOCK_WIDTH,
    height: SLIDE_BLOCK_HEIGHT,
    props: { className: "slide" },
    children: "slide bar",
  };

  const [slideBlockHandler, slideBlock] = blockWrapper(slideBlockProp, () => {
    // setBallVy(-1 * ballVy);
    // setBallVx(randomV());
    ballV.x = randomV();
    ballV.y = -1 * ballV.y;
  });
  const [leftWallHandler, leftWall] = blockWrapper(
    {
      x: WALL_BLOCKS_LEFT,
      y: WALL_BLOCKS_TOP,
      width: WALL_BLOCKS_WIDTH,
      height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
      props: {
        /* style: { backgroundColor: "red" } */
      },
      children: "left wall",
    },
    () => {
      // setBallVx(-1 * ballVx);
      // setBallVy(randomV());
      ballV.x = -1 * ballV.x;
      ballV.y = randomV();
    }
  );
  const [topWallHandler, topWall] = blockWrapper(
    {
      x: WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH,
      y: WALL_BLOCKS_TOP,
      width: WALL_BLOCKS_RIGHT - WALL_BLOCKS_LEFT,
      height: WALL_BLOCKS_WIDTH,
      props: {
        /* style: { backgroundColor: "green" } */
      },
      children: "top wall",
    },
    () => {
      // setBallVy(-1 * ballVy);
      // setBallVx(randomV());
      ballV.x = randomV();
      ballV.y = -1 * ballV.y;
    }
  );

  const [rightWallHandler, rightWall] = blockWrapper(
    {
      x: WALL_BLOCKS_RIGHT,
      y: WALL_BLOCKS_TOP,
      width: WALL_BLOCKS_WIDTH,
      height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
      props: {
        /* style: { backgroundColor: "blue" } */
      },
      children: "right wall",
    },
    () => {
      // setBallVx(-1 * ballVx);
      // setBallVy(randomV());
      ballV.x = -3;
      ballV.y = randomV();
      console.log("right hit!!");
    }
  );

  const wallHandler = new BlocksHandler([
    slideBlockHandler,
    leftWallHandler,
    topWallHandler,
    rightWallHandler,
    [
      (p) => p.y >= SLIDE_BLOCK_Y + SLIDE_BLOCK_WIDTH,
      () => {
        setBallCx(INI_BALL_CX);
        setBallCy(INI_BALL_CY);
        ballV.x = 0;
        ballV.y = 0;
      },
    ], // ball drop out
  ]);

  useEffect(() => {
    ballV.x = 3;
    const intervalid = setInterval(() => {
      ballHandler.updatePosition();
    }, TICK);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  useEffect(() => {
    wallHandler.checkInside(
      ballHandler.chk.map((item) => item({ x: ballCx, y: ballCy }, BALL_WIDTH))
    );
  }, [ballCx, ballCy, BALL_WIDTH]);

  return (
    <>
      {slideBlock}
      {leftWall}
      {topWall}
      {rightWall}
      <Ball {...{ cx: ballCx, cy: ballCy, r: BALL_WIDTH, props: {} }}>
        ball
      </Ball>
    </>
  );
}

export { Main };
