import React from "react";

const InputSelect = ({ options, name, msg, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} onChange={onChange}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div>{msg}</div>
    </div>
  );
};

export default InputSelect;
