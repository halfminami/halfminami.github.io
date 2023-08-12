import "./colorButton.scss";

type props = {
  children?: any;
  props?: { [key: string]: any };
};

function ColorButton({ children, props = {} }: props) {
  return (
    <button
      {...props}
      className={
        "color-button" + (props.className ? ` ${props.className}` : "")
      }
    >
      {children}
    </button>
  );
}

function ColorAnchor({ children, props = {} }: props) {
  return (
    <a
      {...props}
      className={
        "color-button" + (props.className ? ` ${props.className}` : "")
      }
    >
      {children}
    </a>
  );
}

export { ColorButton, ColorAnchor };
