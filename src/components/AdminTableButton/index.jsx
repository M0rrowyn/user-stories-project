import React from "react";
import "./style.css";

const AdminTableButton = (props) => (
  <button 
    className="admin-button"
    onClick={props.onClick}
  >
    {props.image}
    {props.text}
  </button>
);

export default AdminTableButton;
