import React from "react";
const InputText = ({ label, name, msg, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type="text" name={name} onChange={onChange}></input>
      <div>{msg}</div>
    </div>
  );
};

export default InputText;
