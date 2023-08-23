import "./radiusButton.scss";
import { JSXProps } from "./type";

interface RadiusButtonProps extends JSXProps {
  type?: string;
}

interface RadiusAnchorProps extends JSXProps {
  href: string;
}

function RadiusButton({
  style,
  children,
  type,
  props,
  className,
}: RadiusButtonProps) {
  return (
    <button
      className={["rad-button", className].join(" ")}
      {...{ style }}
      {...{ type }}
      {...props}
    >
      {children}
    </button>
  );
}

function RadiusAnchor({
  style,
  children,
  href,
  props,
  className,
}: RadiusAnchorProps) {
  return (
    <a
      href={href}
      className={["rad-button", className].join(" ")}
      {...{ style }}
      {...props}
    >
      {children}
    </a>
  );
}

export { RadiusButton, RadiusAnchor };
