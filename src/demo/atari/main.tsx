import "./main.scss";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { Ball } from "./ball";
import { Block, isMinMax } from "./block";
import { HideBlocks } from "./hideBlocks";

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
        if (chk(item)) {
          func();
        }
      });
    });
  }

  constructor(rects: [blockCheck, blockEvent][]) {
    this.rects = rects;
  }
}

class BallHandler {
  setPoint;

  chk: ((p: pair<number>, r: number) => pair<number>)[] = [
    // // top
    // (p, r) => {
    //   return { x: p.x, y: p.y - r };
    // },
    // // bottom
    // (p, r) => {
    //   return { x: p.x, y: p.y + r };
    // },
    // // right
    // (p, r) => {
    //   return { x: p.x + r, y: p.y };
    // },
    // // left
    // (p, r) => {
    //   return { x: p.x - r, y: p.y };
    // },
    (p, _) => {
      return { x: p.x, y: p.y };
    },
  ];

  updatePosition(v: pair<number>) {
    this.setPoint.x((x: number) => x + v.x);
    this.setPoint.y((y: number) => y + v.y);
  }

  constructor(setCx: StateUpdater<number>, setCy: StateUpdater<number>) {
    this.setPoint = { x: setCx, y: setCy };
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
  return (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 4 + 2);
}

function Main() {
  const app = document.getElementById("app")!;
  const [appWid, setAppWid] = useState(app.clientWidth);
  const [appHei, setAppHei] = useState(app.clientHeight);

  const [pageX, setPageX] = useState(0);
  const [appOffL, setAppOffL] = useState(app.offsetLeft);

  function onMouseMove(e: MouseEvent) {
    setPageX(e.pageX);
  }
  function onResize() {
    setAppHei(app.clientHeight);
    setAppWid(app.clientWidth);
    setAppOffL(app.offsetLeft);
  }

  const fr = 30;
  const BALL_WIDTH_MIN = 10;
  const WALL_BLOCKS_WIDTH = 40; // wall width
  const WALL_MGN = 10;
  const SLIDE_MGN = WALL_MGN + WALL_BLOCKS_WIDTH;

  const SLIDE_BLOCK_WIDTH = Math.max(BALL_WIDTH_MIN * 12, appWid / 6);
  const SLIDE_BLOCK_HEIGHT = 20;

  const BALL_R = Math.max(BALL_WIDTH_MIN, SLIDE_BLOCK_WIDTH / 12);
  const INI_BALL_CX = appWid / 2;
  const INI_BALL_CY = appHei - 3 * SLIDE_BLOCK_HEIGHT - BALL_R;

  const [ballCx, setBallCx] = useState(INI_BALL_CX);
  const [ballCy, setBallCy] = useState(INI_BALL_CY);
  const [ballVx, setBallVx] = useState(0);
  const [ballVy, setBallVy] = useState(0);

  const SLIDE_BLOCK_Y = appHei - 2 * SLIDE_BLOCK_HEIGHT; // top point
  const SLIDE_BLOCK_X_MIN = SLIDE_MGN;
  const SLIDE_BLOCK_X_MAX = appWid - SLIDE_MGN - SLIDE_BLOCK_WIDTH; // left point

  const WALL_BLOCKS_LEFT = WALL_MGN;
  const WALL_BLOCKS_RIGHT = appWid - WALL_MGN - WALL_BLOCKS_WIDTH; // left point
  const WALL_BLOCKS_TOP = WALL_MGN;
  const WALL_BLOCKS_BOTTOM = SLIDE_BLOCK_Y;

  const COLS = 6;
  const ROWS = 4;

  const ballHandler = new BallHandler(setBallCx, setBallCy);

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

  const slideBlockX = minmax(
    SLIDE_BLOCK_X_MIN,
    pageX - appOffL - SLIDE_BLOCK_WIDTH / 2, // block left point
    SLIDE_BLOCK_X_MAX
  );
  const slideBlock = (
    <Block
      {...{
        x: slideBlockX,
        y: SLIDE_BLOCK_Y,
        width: SLIDE_BLOCK_WIDTH,
        height: SLIDE_BLOCK_HEIGHT,
        props: { className: "slide" },
        children: "slide bar",
      }}
    ></Block>
  );

  const slideBlockHandler: [blockCheck, blockEvent] = [
    (p) =>
      isMinMax(
        slideBlockX - BALL_R,
        p.x,
        slideBlockX + SLIDE_BLOCK_WIDTH + BALL_R
      ) &&
      isMinMax(SLIDE_BLOCK_Y, p.y + BALL_R, SLIDE_BLOCK_Y + SLIDE_BLOCK_HEIGHT),
    () => {
      setBallVy((y) => -1 * Math.abs(y));
      setBallVx(randomV());

      setBallCy(SLIDE_BLOCK_Y - BALL_R - 1);
    },
  ];

  const leftWall = (
    <Block
      {...{
        x: WALL_BLOCKS_LEFT,
        y: WALL_BLOCKS_TOP,
        width: WALL_BLOCKS_WIDTH,
        height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
        props: {
          /* style: { backgroundColor: "red" } */
        },
        children: "left wall",
      }}
    ></Block>
  );
  const leftWallHandler: [blockCheck, blockEvent] = [
    (p) => p.x - BALL_R <= WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH,
    () => {
      setBallVx(Math.abs(randomV()));
      setBallVy((y) => (y > 0 ? 1 : -1) * Math.abs(randomV()));

      setBallCx(WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH + BALL_R + 1);
    },
  ];
  const topWall = (
    <Block
      {...{
        x: WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH,
        y: WALL_BLOCKS_TOP,
        width: WALL_BLOCKS_RIGHT - WALL_BLOCKS_LEFT,
        height: WALL_BLOCKS_WIDTH,
        props: {
          /* style: { backgroundColor: "green" } */
        },
        children: "top wall",
      }}
    ></Block>
  );
  const topWallHandler: [blockCheck, blockEvent] = [
    (p) => p.y - BALL_R <= WALL_BLOCKS_TOP + WALL_BLOCKS_WIDTH,
    () => {
      setBallVy(Math.abs(randomV()));
      setBallVx(randomV());

      setBallCy(WALL_BLOCKS_TOP + WALL_BLOCKS_WIDTH + BALL_R + 1);
    },
  ];

  const rightWall = (
    <Block
      {...{
        x: WALL_BLOCKS_RIGHT,
        y: WALL_BLOCKS_TOP,
        width: WALL_BLOCKS_WIDTH,
        height: WALL_BLOCKS_BOTTOM - WALL_BLOCKS_TOP,
        props: {
          /* style: { backgroundColor: "blue" } */
        },
        children: "right wall",
      }}
    ></Block>
  );
  const rightWallHandler: [blockCheck, blockEvent] = [
    (p) => WALL_BLOCKS_RIGHT <= p.x + BALL_R,
    () => {
      setBallVx(-1 * Math.abs(randomV()));
      setBallVy((y) => (y > 0 ? 1 : -1) * Math.abs(randomV()));

      setBallCx(WALL_BLOCKS_RIGHT - BALL_R - 1);

      console.log("right hit!!");
    },
  ];

  const hideBlocksLeft = WALL_BLOCKS_LEFT + WALL_BLOCKS_WIDTH;
  const hideBlocksTop = WALL_BLOCKS_TOP + WALL_BLOCKS_WIDTH;
  const [blocks, blockslus, refs, [blockswid, blockshei]] = HideBlocks({
    props: {},
    x: hideBlocksLeft,
    y: hideBlocksTop,
    width: WALL_BLOCKS_RIGHT - hideBlocksLeft,
    height: (WALL_BLOCKS_BOTTOM - hideBlocksTop) / 2,
    cols: COLS,
    rows: ROWS,
    mgn: appWid / 100,
  });
  const blocksHandler: [blockCheck, blockEvent][] = refs.flatMap((item, i) =>
    item.map<[blockCheck, blockEvent]>((div, j) => {
      console.log(blockslus[i][j], div.current, blockswid, blockshei);
      const isInside = (p: pair<number>) =>
        isMinMax(
          blockslus[i][j][0] + hideBlocksLeft,
          p.x,
          blockslus[i][j][0] + hideBlocksLeft + blockswid
        ) &&
        isMinMax(
          blockslus[i][j][1] + hideBlocksTop,
          p.y,
          blockslus[i][j][1] + hideBlocksTop + blockshei
        );

      const n = 8;
      return [
        (p) =>
          div.current && div.current.classList.contains("hit")
            ? false
            : Array(n)
                .fill(0)
                .map((_, i) => {
                  const th = 0.5;
                  const dx = Math.cos(Math.PI * (i / (n / 2)));
                  const dy = Math.sin(Math.PI * (i / (n / 2)));

                  const inside = isInside({
                    x: p.x + BALL_R * dx,
                    y: p.y + BALL_R * dy,
                  });

                  if (inside) {
                    // ball right side hit
                    if (th <= dx) {
                      setBallVx((x) => -1 * Math.abs(x));
                    }
                    // ball left side hit
                    if (dx <= -1 * th) {
                      setBallVx((x) => Math.abs(x));
                    }
                    // ball bottom hit
                    if (th <= dy) {
                      setBallVy((y) => -1 * Math.abs(y));
                    }
                    // ball top hit
                    if (dy <= -1 * th) {
                      setBallVy((y) => Math.abs(y));
                    }
                  }

                  return inside;
                })
                .some((b) => b),
        // any one of `n` points is inside the atari block
        () => {
          if (div.current) {
            div.current.classList.add("hit");
          }
        },
      ];
    })
  );

  const wallHandler = new BlocksHandler([
    slideBlockHandler,
    leftWallHandler,
    topWallHandler,
    rightWallHandler,
    [
      (p) => p.y >= SLIDE_BLOCK_Y + SLIDE_BLOCK_HEIGHT,
      () => {
        setBallCx(INI_BALL_CX);
        setBallCy(INI_BALL_CY);

        setBallVx(0);
        setBallVy(0);
      },
    ], // ball drop out
    ...blocksHandler,
  ]);

  useEffect(() => {
    const intervalid = setInterval(() => {
      ballHandler.updatePosition({ x: ballVx, y: ballVy });
      console.log("update!");
    }, 1000 / fr);

    return () => {
      clearInterval(intervalid);
    };
  }, [ballVx, ballVy]);

  useEffect(() => {
    wallHandler.checkInside(
      ballHandler.chk.map((item) => item({ x: ballCx, y: ballCy }, BALL_R))
    );
  }, [ballCx, ballCy, BALL_R]);

  useEffect(() => {
    return () => {
      setBallCx((x) => (x * app.clientWidth) / appWid);
      setBallCy((y) => (y * app.clientHeight) / appHei);
    };
  }, [appWid, appHei]);

  useEffect(() => {
    setBallVx((_) => 3);
  }, []);

  return (
    <>
      {slideBlock}
      {leftWall}
      {topWall}
      {rightWall}

      {blocks}

      <Ball {...{ cx: ballCx, cy: ballCy, r: BALL_R, props: {} }}>ball</Ball>
    </>
  );
}

export { Main };
