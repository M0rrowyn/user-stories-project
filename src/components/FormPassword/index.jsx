import React from "react";
import "./style.css";
import { BsEyeFill } from "react-icons/bs";
import FormInput from "../FormInput";

const FormPassword = (props) => {
  const FormPassword = (
    <div className="form-password-wrapper">
      <FormInput
        class="form-password"
        type="password"
        placeholder={props.placeholder}
      />
      <BsEyeFill className="show-eye" />
    </div>
  );

  return FormPassword;
};

export default FormPassword;
