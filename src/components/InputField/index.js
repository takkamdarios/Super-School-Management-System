import React from 'react';
import './styles.css';

const InputField = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`custom-input-field ${className}`}
    />
  );
};

export default InputField;
