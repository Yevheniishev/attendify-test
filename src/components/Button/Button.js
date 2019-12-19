import React from "react";
import cn from "classnames";

import Loader from "../Loader/Loader";

const Button = ({
  color,
  size,
  loading = false,
  className,
  onClick,
  children
}) => {
  let sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "large";
      break;
    case "medium":
      sizeCls = "medium";
      break;
    case "small":
      sizeCls = "small";
      break;
    default:
      break;
  }
  let colorCls = "";
  switch (color) {
    case "primary":
      colorCls = "primary";
      break;
    case "secondary":
      colorCls = "secondary";
      break;
    case "danger":
      colorCls = "danger";
      break;
    case "disabled":
      colorCls = "disabled";
      break;
    default:
      break;
  }
  const classes = cn(`button`, className, {
    [`button--${sizeCls}`]: sizeCls,
    [`button--${colorCls}`]: colorCls
  });

  return (
    <button type="button" onClick={onClick} className={classes}>
      {loading && <Loader />}
      {children}
    </button>
  );
};

export default Button;
