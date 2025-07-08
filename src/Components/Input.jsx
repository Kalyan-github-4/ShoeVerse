import React from "react";

const Input = ({ handleChange, color, name, value, title, type = "radio", id }) => {
  const inputId = id || `${name}-${value}`;

  return (
    <label htmlFor={inputId} className="sidebar-label-container">
      <input
        type={type}
        id={inputId}
        onChange={handleChange}
        value={value}
        name={name}
      />
      <span className="checkmark" style={color ? { backgroundColor: color } : {}}></span>
      <span className="ml">{title}</span>
    </label>
  );
};

export default Input;
