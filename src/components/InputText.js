import React from 'react';
import PropTypes from 'prop-types';

const InputText = (props) => {
  const {
    name,
    placeholder,
    value,
    onChange,
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

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  value: '',
  onChange: null,
};

export default InputText;
