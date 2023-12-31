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
  const [_, setPrevY] = useState(window.scrollY);
  const [isScrollDown, setIsScrollDown] = useState(true);

  const TH = window.innerHeight / 3;

  // header transition property
  useEffect(() => {
    top.style.transitionProperty = "top";
    top.style.transitionDuration = "var(--dur)";
    return () => {
      top.style.transitionProperty = "";
      top.style.transitionDuration = "";
    };
  }, []);

  // scrollY for header
  useEffect(() => {
    const listener = () => {
      setPrevY((prev) => {
        const scY = window.scrollY;

        if (prev - scY < 0) {
          setIsScrollDown(true);
          return scY;
        } else if (prev - scY > TH) {
          setIsScrollDown(false);
          return scY;
        }
        return prev;
      });
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  // sticky header position
  useEffect(() => {
    if (isScrollDown) {
      // box shadow margin
      top.style.top = `-${top.clientHeight + 5}px`;
    } else {
      top.style.top = "0px";
    }
    return () => {
      top.style.top = "";
    };
  }, [isScrollDown]);

  // hold dropdown
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
