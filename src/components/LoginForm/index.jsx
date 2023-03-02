import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/logo/login-icon.svg";
import FormInput from "../FormInput";
import FormPassword from "../FormPassword";

const LoginForm = () => {
  const Form = (
    <form className="login-form">
      <img src={LogoIcon} className="login-form-logo" alt="Logo"></img>
      <FormInput placeholder="User Name" />
      <FormPassword placeholder="Password" />
      <button className="login-form-button">Login</button>
    </form>
  );

  return <div className="login-form-wrapper">{Form}</div>;
};

export default LoginForm;
