import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { firebaseService } from "../../services/firebaseService";
import { currentUser } from "../../variables";
import { collections } from "../../utils/constants";
import { createStructuredSelector } from "reselect";
import { makeSelectLastIndex } from "../MessagesContainer/selectors";
import { useSelector } from "react-redux";
const messagesState = createStructuredSelector({
  lastIndex: makeSelectLastIndex(),
});
const SendContainer = () => {
  const { create } = firebaseService(collections.chat);
  const { lastIndex } = useSelector(messagesState);
  const [message, setMessage] = useState("");
  const handleClick = () => {
    if (!message && currentUser && currentUser.name && currentUser.userID)
      return;
    const data = {
      ...currentUser,
      date: new Date().toUTCString(),
      order: lastIndex + 1,
      message,
    };
    create(data).then((res) => {
      setMessage("");
    });
  };
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
