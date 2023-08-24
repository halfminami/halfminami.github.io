import { useEffect, useState } from "preact/hooks";
import "./header.scss";
import { Logo } from "./logo";
import { RadiusAnchor } from "./radiusButton";

function Header({
  companyName = "Logorem Ipsum",
  top,
}: {
  companyName?: string;
  top: HTMLElement;
}) {
  // const [scY, setScY] = useState(window.scrollY);

  // useEffect(() => {
  //   const listener = () => setScY(window.scrollY);
  //   window.addEventListener("scroll", listener);
  //   return () => window.removeEventListener("scroll", listener);
  // }, []);

  // top.style.top = `${scY}px`;

  useEffect(() => {
    const listener = (e: Event) => {
      const delay = 100;
      const dur = (() => {
        const dur = parseFloat(
          getComputedStyle(document.body)
            .getPropertyValue("--dur")
            .replace(/[a-z]/g, "")
        );
        return dur < 0 ? dur : dur * 1000;
      })();

      const div = e.currentTarget as HTMLDivElement;
      div.style.visibility = "visible";
      div.style.opacity = "1";

      setTimeout(() => {
        div.style.opacity = "";
      }, delay);

      setTimeout(() => {
        div.style.visibility = "";
      }, delay + dur);
    };

    const arr = Array.from(
      document.querySelectorAll<HTMLDivElement>("header .dropdown")
    );

    for (const item of arr) {
      item.addEventListener("mouseleave", listener);
    }

    return () => {
      for (const item of arr) {
        item.removeEventListener("mouseleave", listener);
      }
    };
  }, []);

  return (
    <header>
      <div>
        <a href={"#"}>
          <Logo></Logo>
        </a>

        <nav>
          <ul>
            <li className={"d0"}>
              <a href={"#"}>Download</a>
            </li>
            <li className={"d0"}>
              <a href={"#"} className={"dropdown-toggle"}>
                Docs
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">Getting started</a>
                  </li>
                  <li>
                    <a href="#">API Docs</a>
                  </li>
                  <li>
                    <a href="#">Library Reference</a>
                  </li>
                  <li>
                    <a href="#">Advanced</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={"d0"}>
              <a href={"#"} className={"dropdown-toggle"}>
                Company
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">About</a>
                    <ul>
                      <li>
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <a href="#">Use case</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                    <ul>
                      <li>
                        <a href="#">Work at {companyName}</a>
                      </li>
                      <li>
                        <a href="#">Open Positions</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className={"d0"}>
              <a href={"#"} className={"dropdown-toggle"}>
                Pricing
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">Free</a>
                  </li>
                  <li>
                    <a href="#">Pro & Plus</a>
                  </li>
                  <li>
                    <a href="#">Enterprise</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <RadiusAnchor href="#">log in</RadiusAnchor>
            </li>
            <li>
              <RadiusAnchor href="#">sign up</RadiusAnchor>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
