import React from "react";
import "./Input.css";

export const Input = props => (
  <div className="comp-input form-group">
    <label className='text-white'>{props.label}</label><input className="form-control" {...(props.inputProps)} />
  </div>
);
