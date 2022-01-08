import { boolColor } from "../../utils/chat-utils";
import "./index.css";
const MessageItem = ({ from, date, name, message }) => (
  <li class={from}>
    <div class="entete">
      <h3>{date}</h3>
      <h2>{name}</h2>
      <span class={`status ${boolColor(from)}`}></span>
    </div>
    <div class="triangle"></div>
    <div class="message">{message}</div>
  </li>
);
MessageItem.defaultProps = {
  from: "you",
};

export default MessageItem;
