import React from "react";
import "./style.css";

const LoginFormInput = ({ classes, type, placeholder}) => {
  let className = "login-form-input";
  if (classes) {
    className += ` ${classes}`;
  }

  const Input = (
    <input
      type={type || "text"}
      className={className}
      placeholder={placeholder || "default"}
    />
  );

  return Input;
};

export default LoginFormInput;
