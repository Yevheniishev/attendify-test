import React from "react";

import Loader from "../Loader/Loader";

const Button = ({ color, size, loading, children }) => {
  const btnColor = color ? `button--${color}` : null;
  const btnSize = size ? `button--${size}` : null;
  return (
    <button type="button" className={`button ${btnColor} ${btnSize}`}>
      {loading && <Loader />}
      {children}
    </button>
  );
};

export default Button;
