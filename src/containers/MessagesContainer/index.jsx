import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import MessageItem from "../../components/MessageItem";
import { firebaseService } from "../../services/firebaseService";
import { isCUrrentUser } from "../../utils/chat-utils";
import { setMessages } from "./actions";
import { makeSelectMessagesData } from "./selectors";
import { collections } from "../../utils/constants";
const messagesState = createStructuredSelector({
  messages: makeSelectMessagesData(),
});

const MessagesContainer = () => {
  const { messages } = useSelector(messagesState);

  const dispatch = useDispatch();
  const { getAll } = firebaseService(collections.chat);
  const onDataChange = (items) => {
    let messages = [];

    items.docs.forEach((item) => {
      let id = item.id;
      let data = item.data();
      const newItem = { ...data, docId: id };
      messages.push({
        ...newItem,
      });
    });

    dispatch(setMessages(messages));
  };
  useEffect(() => {
    getAll().orderBy("order", "asc").onSnapshot(onDataChange);
  }, []);
  return (
    <ul id="chat">
      {messages &&
        messages.length > 0 &&
        messages.map((item, index) => {
          const messageProps = { ...item, from: isCUrrentUser(item.userID) };
          return <MessageItem key={index} {...messageProps} />;
        })}
    </ul>
  );
};

export default MessagesContainer;
