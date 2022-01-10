import "./index.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <a href="#" onClick={onClick}>
      {text}
    </a>
  );
};

export default CustomButton;
