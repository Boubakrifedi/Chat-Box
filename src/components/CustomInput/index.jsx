import "./index.css";

const CustomInput = ({ value, onChange, placeholder }) => {
  return (
    <textarea value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default CustomInput;
