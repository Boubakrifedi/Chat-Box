import { actionTypes } from "./constants";
import React from "react";


const setMessages = (payload) => {
  return {
    type: actionTypes.SET_MESSAGES,
    payload,
  };
};

export { setMessages };
