import React from "react";
import "./style.css";

const FormInput = (props) => {
  const placeholder = props.placeholder || "default";
  const type = props.type || "text";

  let className = "form-input";
  if (props.class) {
    className += ` ${props.class}`;
  }

  const Input = (
    <input type={type} className={className} placeholder={placeholder} />
  );

  return Input;
};

export default FormInput;
