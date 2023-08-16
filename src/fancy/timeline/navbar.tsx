import { ColorAnchor, ColorButton } from "./colorButton";
import { needsLogin } from "./login";
import "./navbar.scss";

type navbarProps = {} & needsLogin;

function Navbar({ login }: navbarProps) {
  return (
    <nav>
      <ul>
        <li>
          <input type="text" name="search" placeholder={"search"} />
        </li>

        <li>
          <ColorButton
            props={{
              className: ["login", "nav"].join(" "),
              onClick: () => login(),
            }}
          >
            log in
          </ColorButton>
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
