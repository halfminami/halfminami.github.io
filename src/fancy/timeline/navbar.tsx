import { ColorAnchor } from "./colorButton";
import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <input type="text" name="search" placeholder={"search"} />
        </li>

        <li>
          <a className={["login", "nav"].join(" ")} href={"#"}>
            log in
          </a>
        </li>

        <li>
          <ColorAnchor
            props={{
              className: ["signup", "nav"].join(" "),
              href: "#",
            }}
          >
            sign up
          </ColorAnchor>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
