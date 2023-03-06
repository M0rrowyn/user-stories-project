import React from "react";
import "./style.css";

const FormInput = (props) => {
  return (
    <div>
      <label className="form-input-label" htmlFor="">
        {props.label}
      </label>
      <input className="form-input" type={props.type} value={props.value} />
    </div>
  );
};

export default FormInput;
