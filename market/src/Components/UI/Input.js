import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${props.className} ${classes.label}`}>
      <label>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
    </div>
  );
};

export default Input;
