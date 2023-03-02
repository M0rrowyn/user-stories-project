import React from "react";
import "./style.css";

const FormInput = (props) => {
  let className = "form-input";
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

export default FormInput;
