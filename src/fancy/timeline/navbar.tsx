import { ColorAnchor, ColorButton } from "./colorButton";
import { needsLogin } from "./login";
import "./navbar.scss";

type navbarProps = {} & needsLogin;

function Navbar({ login }: navbarProps) {
  return (
    <nav>
      <ul>
        <li>
          <form role={"search"}>
            <div className={"search-wrapper"}>
              <input type="search" name="search" placeholder={"search"} />
              <button className="search" aria-label={"go search"}>
                <span class="material-symbols-outlined">search</span>
              </button>
            </div>
          </form>
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
