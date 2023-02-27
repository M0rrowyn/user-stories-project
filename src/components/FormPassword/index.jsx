import React from "react";
import "./style.css";
import { FaEye } from "react-icons/fa";
import FormInput from "../FormInput";

const FormPassword = (props) => {
  const FormPassword = <div className="form-password-wrapper">
    <FormInput class="form-password" type="password" placeholder={props.placeholder}/>
    <FaEye className="show-eye"/>
    </div>;

    return FormPassword;
}

export default FormPassword;