import { JSX, render } from "preact";
import { useEffect, useState } from "preact/hooks";

import "./timeline/timeline.scss";

import { ReadMore } from "./timeline/readmore";
import { Article, ArticleProp } from "./timeline/article";
import posts from "./timeline/posts.json"; // json id field is just a serial number, not picture id
import { Bio, BioProp } from "./timeline/bio";
import { Header } from "./timeline/header";
import { Navbar } from "./timeline/navbar";
import { Footer } from "./timeline/footer";
import { Login } from "./timeline/login";

const link = (
  href: string,
  rel = "stylesheet",
  attr: { [key: string]: string } = {}
) => {
  const link = document.head.appendChild(document.createElement("link"));
  link.rel = rel;
  link.href = href;
  for (const item in attr) {
    link.setAttribute(item, attr[item]);
  }
};

// logofont
link("https://fonts.googleapis.com", "preconnect");
link("https://fonts.gstatic.com", "preconnect", { crossorigin: "true" });
link(
  "https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap",
  "stylesheet"
);

const [loginForm, showLoginForm] = Login();
render(loginForm, document.body.appendChild(document.createElement("div")));

type PicsumInfo = { author: string; id: string; url: string };

function getPicsumInfo(id: string): Promise<string> {
  return new Promise((res, rej) => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((data) => data.json())
      .then((item: PicsumInfo) => {
        res(
          `from Lorem Picsum,author:'${item.author}',id:${item.id},unsplash:'${item.url}'`
        );
      })
      .catch((e) => rej(e));
  });
}

/** adds img alt dynamically */
function InfoAlt<T>({
  id,
  prop,
  Elem,
}: {
  id: string;
  prop: T & { imgalt: string };
  Elem: (x: T & { imgalt: string }) => JSX.Element;
}) {
  const [info, setInfo] = useState("");
  prop.imgalt = info;

  useEffect(() => {
    getPicsumInfo(id)
      .then((info) => setInfo(info))
      .catch((e) => console.error(e));
  }, []);

  return <Elem {...prop}></Elem>;
}

render(
  <InfoAlt
    {...(function () {
      const bioProp: BioProp = {
        imgsrc: posts.icon,
        imgalt: "",
        bio: posts.bio,
        name: posts.name,
        login: showLoginForm,
      };

      return {
        id: posts.icon.slice("https://picsum.photos/id/".length).split("/")[0],
        prop: bioProp,
        Elem: Bio,
      };
    })()}
  ></InfoAlt>,
  document.getElementById("profile")!
);

// posts.posts = [];

render(
  <section>
    <h1 className={"post-head"}>posts</h1>
    <div className={"posts"}>
      {posts.posts.length == 0 ? (
        <p style={{ margin: "var(--mgn)" }}>no post yet.</p>
      ) : (
        posts.posts.map((item) => {
          const articleProp: ArticleProp = {
            arturl: "#",
            imgsrc: item.imgsrc,
            h1: item.h1,
            p: item.p,
            imgalt: "",
            datetime: item.datetime,
          };

          return (
            <InfoAlt
              {...{
                id: item.imgsrc
                  .slice("https://picsum.photos/id/".length)
                  .split("/")[0],
                prop: articleProp,
                Elem: Article,
              }}
            ></InfoAlt>
          );
        })
      )}
    </div>
  </section>,
  document.getElementById("timeline")!
);

const MAX_HEIGHT =
  parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--max-height")
      .slice(0, -2)
  ) | 730;

for (const article of Array.from(
  document.querySelectorAll<HTMLElement>("article.post")
)) {
  if (parseInt(getComputedStyle(article).height.slice(0, -2)) > MAX_HEIGHT) {
    article.classList.add("toolong");

    const div = article.appendChild(document.createElement("div"));
    render(<ReadMore {...{ article }}></ReadMore>, div);
    div.classList.add("hider-wrapper");
  }
}

render(<Header></Header>, document.getElementById("header")!);
render(
  <Navbar login={showLoginForm}></Navbar>,
  document.getElementById("navbar")!
);
render(<Footer></Footer>, document.getElementById("footer")!);

import { timelineTitle as title } from ".";
document.title = title;

// showLoginForm();
