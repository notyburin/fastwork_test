import React from 'react';

const InputText = (props) => {
  const {
    name,
    placeholder,
    value,
    onChange
  } = props;

  return (
    <input
      className="form-control"
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
