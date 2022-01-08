import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
const SendContainer = () => {
  const [message, setMessage] = useState("");
  const handleClick = () => {};
  const handleChange = (value) => {
    setMessage(value);
  };
  return (
    <footer>
      <CustomInput
        value={message}
        placeholder="Type your message"
        onChange={(e) => handleChange(e.target.value)}
      />
      <CustomButton text="Send" onClick={handleClick} />
    </footer>
  );
};

export default SendContainer;
