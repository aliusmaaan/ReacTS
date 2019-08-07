import React from "react";

interface inputProps{ 
  label:string,
   text: string, 
   type: string, 
   id:string, 
   value: string, 
   handleChange: any} 
const Input: React.SFC<inputProps> = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    {
      text ? <label htmlFor={label}>{text}</label> :''
    }
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      placeholder ='Type in ES6 view in Ts'
      required
    />
  </div>
);

export default Input;