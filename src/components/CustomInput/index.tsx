import "./index.css";
import React from "react";
interface InputProps{
  value: string,
  onChange: any,
  placeholder: string,
}
const CustomInput = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <textarea value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default CustomInput;
