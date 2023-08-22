import "./header.scss";
import { Logo } from "./logo";

function Header({ companyName = "Logorem Ipsum" }) {
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
              <a href="#" className={"rad-button"}>
                log in
              </a>
            </li>
            <li>
              <a href="#" className={"rad-button"}>
                sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
