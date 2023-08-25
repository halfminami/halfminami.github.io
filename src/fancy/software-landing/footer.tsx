import "./footer.scss";
import { Logo } from "./logo";
import { RadiusButton } from "./radiusButton";

function Footer({ companyName = "Logorem Ipsum" }) {
  return (
    <footer>
      <div>
        <Logo></Logo>

        <div>
          <nav>
            <ul>
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
            <h1>Subscribe to our newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint in
              cupiditate nesciunt aspernatur facere placeat dolor rerum
              provident porro odit!
            </p>
            <input
              type={"email"}
              name={"subscribe"}
              placeholder={"you@example.com"}
              aria-label={"your email address to subscribe"}
              required
            />
            <label>
              <input type="checkbox" required /> I agree with {companyName}'s{" "}
              <a href="#">Privacy Policy</a>
            </label>
            <RadiusButton
              {...{
                type: "submit",
              }}
            >
              Subscribe now
            </RadiusButton>
          </form>
        </div>

        <div>
          <nav>
            <ul>
              <li>
                <p>
                  <small>© 2023 {companyName}</small>
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
