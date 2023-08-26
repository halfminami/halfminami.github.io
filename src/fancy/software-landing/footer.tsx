import "./footer.scss";
import { Logo } from "./logo";
import { RadiusButton } from "./radiusButton";

function Footer({ companyName = "Logorem Ipsum" }) {
  return (
    <footer>
      <div className={"bdrtop"}>
        <div aria-hidden="true">
          <Logo></Logo>
        </div>

        <div className={"nav"}>
          <div>
            <nav>
              <ul className={"d0"}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href={"#"}>About</a>
                </li>
                <li>
                  <a href={"#"}>Download</a>
                </li>
                <li>
                  <a href="#">Getting started</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <form action="" method={"post"} className={"subscribe"}>
              <h1>
                <em>Subscribe to our newsletter</em>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                in cupiditate nesciunt aspernatur facere placeat dolor rerum
                provident porro odit!
              </p>
              <div style={{ margin: "var(--pad)" }}>
                <input
                  type={"email"}
                  name={"subscribe"}
                  placeholder={"you@example.com"}
                  aria-label={"your email address to subscribe"}
                  required
                />
                <label>
                  <input type="checkbox" required /> I agree with {companyName}
                  's <a href="#">Privacy Policy</a>
                </label>
              </div>
              <RadiusButton
                {...{
                  type: "submit",
                }}
              >
                Subscribe now
              </RadiusButton>
            </form>
          </div>
        </div>

        <div className={"legal bdrtop"}>
          <nav>
            <ul>
              <li>
                <p>
                  <small style={{ color: "var(--mid0)" }}>
                    <span
                      style={{
                        display: "inline-block",
                        transform: "scaleX(-1)",
                      }}
                    >
                      ©
                    </span>{" "}
                    2023 {companyName}
                  </small>
                </p>
              </li>
              <li>
                <a href="#">
                  <small>Terms of Service</small>
                </a>
              </li>
              <li>
                <a href="#">
                  <small>Privacy Policy</small>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
