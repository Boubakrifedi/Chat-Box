import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import MessageItem from "../../components/MessageItem";
import { makeSelectMessagesData } from "./selectors";

const messagesState = createStructuredSelector({
  messages: makeSelectMessagesData(),
});

const MessagesContainer = () => {
  const { messages } = useSelector(messagesState);

  return (
    <ul id="chat">
      {messages &&
        messages.length > 0 &&
        messages.map((item, index) => <MessageItem key={index} {...item} />)}
    </ul>
  );
};

export default MessagesContainer;
