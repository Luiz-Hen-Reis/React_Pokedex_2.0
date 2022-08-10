import React from "react";

const FormRow = ({ name, value, type, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <div>
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className="form-input"
        />
      </div>
    </div>
  );
};

export default FormRow;
