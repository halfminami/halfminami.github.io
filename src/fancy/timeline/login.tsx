import { ColorAnchor, ColorButton } from "./colorButton";
import { Logo } from "./header";
import "./login.scss";
import { JSX } from "preact/jsx-runtime";

export type needsLogin = { login: () => void };

function Login(): [JSX.Element, () => void] {
  // const ref = useRef<HTMLDialogElement>(null);
  // why i cannot use ref :(
  const ref: { current: null | HTMLDialogElement } = { current: null };

  const onClick = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.textContent);
  };

  return [
    <div className={"loginform-wrapper"} onClick={() => ref.current?.close()}>
      <dialog
        ref={ref}
        className={"loginform"}
        onClick={(e) => e.stopPropagation()}
      >
        <form action="">
          <ul className={"loginform-ul"}>
            <li>
              <Logo></Logo>
              <h1>Log in</h1>
              <ul>
                <li>
                  <label>
                    <span class="material-symbols-outlined">mail</span>
                    <input type="email" placeholder={"e-mail"} />
                  </label>
                </li>
                <li>
                  <label>
                    <span class="material-symbols-outlined">key</span>
                    <input type="password" placeholder={"password"} />
                  </label>
                </li>
                <li>
                  <ColorButton
                    props={{ type: "submit", className: "continue", onClick }}
                  >
                    Log in
                  </ColorButton>
                </li>
              </ul>
            </li>
            <li>
              <ColorButton
                props={{
                  className: "continue",
                  style: {
                    "--lclr": "rgb(243, 52, 147)",
                    "--mclr": "rgb(221, 26, 123)",
                  },
                  onClick,
                }}
              >
                <span class="material-symbols-outlined">pet_supplies</span>
                Continue with Something
              </ColorButton>
            </li>
            <li>
              <ColorButton
                props={{
                  className: "continue",
                  style: {
                    "--lclr": "rgb(50, 50, 50)",
                    "--mclr": "rgb(10, 10, 10)",
                  },
                  onClick,
                }}
              >
                <span class="material-symbols-outlined">set_meal</span>
                Continue with Another thing
              </ColorButton>
            </li>
            <li>
              <p>
                Don't have an account?
                <ColorAnchor
                  props={{
                    href: "",
                    className: "nav",
                  }}
                >
                  Create one
                </ColorAnchor>
              </p>
            </li>
            <li>
              <button formMethod={"dialog"} className={"loginform-close"}>
                <span class="material-symbols-outlined close">close</span>
              </button>
            </li>
          </ul>
        </form>
      </dialog>
    </div>,
    () => {
      ref.current?.show();
    },
  ];
}

export { Login };
