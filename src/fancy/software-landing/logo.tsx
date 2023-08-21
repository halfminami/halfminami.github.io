import "./logo.scss";

function DefLogo() {
  return (
    <div className="hide">
      <svg width={0} height={0}>
        <defs>
          <g id={"logo"} className={"logo"}>
            <image
              x={"3.7em"}
              y={"0em"}
              width={"1.6em"}
              href={
                "/src/fancy/software-landing/flare_FILL0_wght300_GRAD0_opsz48.svg"
              }
              opacity={0.5}
            />
            <text x={".2em"} y={"1em"} fill={"black"}>
              Logorem
            </text>
            <text x={"2.1em"} y={"1.7em"} fill={"black"}>
              Ipsum
            </text>
          </g>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <svg height={"4em"} width={"10.2em"}>
      <use href={"#logo"}></use>
    </svg>
  );
}

export { Logo, DefLogo };
