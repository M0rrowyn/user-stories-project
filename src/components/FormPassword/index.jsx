import React, { useState } from "react";
import "./style.css";
import { BsEyeSlashFill, BsEye } from "react-icons/bs";
import FormInput from "../FormInput";

const FormPassword = (props) => {
  const [type, setType] = useState("password");
  const eyeIcon =
    type === "password" 
    ? <BsEyeSlashFill onClick={() => setType("text")} className="password-eye" />
    : <BsEye onClick={() => setType("password")} className="password-eye" />

  const FormPassword = (
    <div className="form-password-wrapper">
      <FormInput
        class="form-password"
        type={type}
        placeholder={props.placeholder}
      />
      {eyeIcon}
    </div>
  );

  return FormPassword;
};

export default FormPassword;
