import React from "react";
import "./style.css";

const FormTextarea = (props) => {
  let className = "form-textarea";
  if (props.resize) {
    className += " form-textarea-resizable";
  }

  return (
    <div>
      <label className="form-textarea-label" htmlFor="">
        {props.label}
      </label>
      <textarea
        className={className}
        value={props.value}
        rows={props.rows || 2}
      />
    </div>
  );
};

export default FormTextarea;
