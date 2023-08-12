import "./article.scss";

export type ArticleProp = {
  imgsrc: string;
  arturl: string;
  h1: string;
  p: string[];
  imgalt: string;
  datetime: string;
};

function Article({ imgsrc, arturl, h1, p, imgalt, datetime }: ArticleProp) {
  return (
    <article className={"post"}>
      <div className={"img-wrapper"}>
        <a href={arturl}>
          <img src={imgsrc} alt={imgalt} className={"post"} />
        </a>
      </div>

      <div className={"post"}>
        <h1>
          <a href={arturl}>{h1}</a>
        </h1>

        <time dateTime={new Date(datetime).toISOString()}>
          <a href={arturl}>{datetime}</a>
        </time>

        {p.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </article>
  );
}

export { Article };
