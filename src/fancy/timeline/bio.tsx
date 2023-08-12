import "./bio.scss";
import { ColorButton } from "./colorButton";

export type BioProp = {
  imgsrc: string;
  imgalt: string;
  bio: string[];
  name: string;
};

function Bio({ imgsrc, imgalt, bio, name }: BioProp) {
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
            onClick: () => {
              console.log("dolor!");
            },
          }}
        >
          dolor
        </ColorButton>

        <ColorButton
          props={{
            className: "sit amet",
            onClick: () => {
              console.log("sit amet!");
            },
          }}
        >
          sit amet
        </ColorButton>
      </div>
    </section>
  );
}

export { Bio };
