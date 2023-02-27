import React from "react";
import "./style.css";
import LogoIcon from "../../login-icon.svg";
import FormInput from "../FormInput";
import FormPassword from "../FormPassword";

const LoginForm = () => {
  const Logo = (
    <img src={LogoIcon} className="login-form-logo" alt="Logo"></img>
  );
  const Button = <button className="login-form-button">Login</button>;
  
  const Form = (
    <form className="login-form">
      {Logo}
      <FormInput placeholder="User Name" />
      <FormPassword placeholder="Password" />
      {Button}
    </form>
  );

  return <div className="login-form-wrapper">{Form}</div>;
};

export default LoginForm;
