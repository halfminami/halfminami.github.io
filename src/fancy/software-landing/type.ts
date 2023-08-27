import React from "preact/compat";

export type JSXProps = {
  style?: React.CSSProperties;
  children?: string | React.JSX.Element | React.JSX.Element[];
  props?: { [key: string]: string | ((_: any) => any) };
  className?: string;
};
// React.JSX.HTMLAttributes<T>
