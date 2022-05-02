import React from "react";

const InputTextarea = ({
  label,
  name,
  msg,
  maxlength,
  rows,
  cols,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <textarea
        name={name}
        onChange={onChange}
        maxlength={maxlength || 150}
        rows={rows}
        cols={cols}
      ></textarea>
      <div>{msg}</div>
    </div>
  );
};
