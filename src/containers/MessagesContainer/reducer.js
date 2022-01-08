import { actionTypes } from "./constants";

// //  initialiser notre state
const initialState = {
  messages: [
    { from: "me", date: "10:12AM", name: "Youness", message: "helo chef" },
    { from: "you", date: "10:12AM", name: "Mustapha", message: "helo chef" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};

export default messagesReducer;
