import "./bio.scss";
import { ColorButton } from "./colorButton";
import { needsLogin } from "./login";

export type BioProp = {
  imgsrc: string;
  imgalt: string;
  bio: string[];
  name: string;
} & needsLogin;

function Bio({ imgsrc, imgalt, bio, name, login }: BioProp) {
  return (
    <section className={"profile"}>
      <div className={"icon-wrapper"}>
        <img src={imgsrc} alt={imgalt} className={"icon"} />
      </div>
      <div className={"bio-wrapper"}>
        <h1>{name}</h1>
        {bio.map((item) => (
          <p>{item}</p>
        ))}

        <ColorButton
          props={{
            className: "dolor",
            onClick: () => login(),
          }}
        >
          dolor
        </ColorButton>

        <ColorButton
          props={{
            className: "sitamet",
            onClick: () => login(),
          }}
        >
          sit amet
        </ColorButton>
      </div>
    </section>
  );
}

export { Bio };
