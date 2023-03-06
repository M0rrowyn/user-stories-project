import React, { useState } from "react";
import "./style.css";
import { BsEyeSlashFill, BsEye } from "react-icons/bs";
import LoginFormInput from "../LoginFormInput";

const LoginFormPassword = (props) => {
  const [isPasswordOpen, setPasswordOpen] = useState(false);
  const togglePasswordOpen = () => setPasswordOpen(!isPasswordOpen);
  
  const eyeIcon =
    isPasswordOpen
    ? <BsEye onClick={togglePasswordOpen} className="password-eye" />
    : <BsEyeSlashFill onClick={togglePasswordOpen} className="password-eye" />
    

  const FormPassword = (
    <div className="form-password-wrapper">
      <LoginFormInput
        class="form-password"
        type={isPasswordOpen ? "text" : "password"}
        placeholder={props.placeholder}
      />
      {eyeIcon}
    </div>
  );

  return FormPassword;
};

export default LoginFormPassword;
