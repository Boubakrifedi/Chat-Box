import "./index.css";
import React from "react";

interface Button {
  text: string,
  onClick: any,
}
const CustomButton = ({ text, onClick }: Button) => {
  return (
    <a href="#" onClick={onClick}>
      {text}
    </a>
  );
};

export default CustomButton;
