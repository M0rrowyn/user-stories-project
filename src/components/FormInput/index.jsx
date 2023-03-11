import React from "react";
import "./style.css";

const FormInput = ({label, type, value}) => {
  return (
    <div>
      <label className="form-input-label" htmlFor="">
        {label}
      </label>
      <input className="form-input" type={type} value={value} />
    </div>
  );
};

export default FormInput;
