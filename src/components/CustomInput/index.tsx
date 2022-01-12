import "./index.css";
import React from "react";

const CustomInput = ({ value, onChange, placeholder }) => {
  return (
    <textarea value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default CustomInput;
