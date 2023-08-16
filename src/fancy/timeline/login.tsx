// import { useRef } from "preact/hooks";
import "./login.scss";
import { JSX } from "preact/jsx-runtime";
// import { Ref, RefObject } from "preact";

export type needsLogin = { login: () => void };

function Login(/* ref: RefObject<HTMLDialogElement> */): [
  JSX.Element,
  () => void
] {
  // const ref = useRef<HTMLDialogElement>(null);
  // why i cannot use ref :(
  const ref: { current: null | HTMLDialogElement } = { current: null };

  return [
    <div className={"loginform-wrapper"}>
      <dialog ref={ref} className={"loginform"}>
        <form action="">
          <p>this is form</p>
          <button type={"submit"}>submit</button>
          <button formMethod={"dialog"}>cancel</button>
        </form>
      </dialog>
    </div>,
    () => {
      ref.current?.show();
    },
  ];
}

export { Login };
