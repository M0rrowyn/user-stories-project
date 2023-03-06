import React from "react";
import "./style.css";

const LoginFormInput = (props) => {
  let className = "login-form-input";
  if (props.class) {
    className += ` ${props.class}`;
  }

  const Input = (
    <input
      type={props.type || "text"}
      className={className}
      placeholder={props.placeholder || "default"}
    />
  );

  return Input;
};

export default LoginFormInput;
