import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/logo/login-icon.svg";
import LoginFormInput from "../LoginFormInput";
import LoginFormPassword from "../LoginFormPassword";

const LoginForm = () => {
  const Form = (
    <form className="login-form">
      <img src={LogoIcon} className="login-form-logo" alt="Logo"></img>
      <LoginFormInput placeholder="User Name" />
      <LoginFormPassword placeholder="Password" />
      <button className="login-form-button">Login</button>
    </form>
  );

  return <div className="login-form-wrapper">{Form}</div>;
};

export default LoginForm;
