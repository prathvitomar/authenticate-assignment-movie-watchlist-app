// Input.js
import React from 'react';
import './Input.css'; // Import your CSS file

const Input = ({ id, type, label, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input-field"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
