import { actionTypes } from "./constants";

// //  initialiser notre state
const initialState = {
  messages: [],
  lastIndex: 0,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        lastIndex:
          action.payload && action.payload.length > 0
            ? action.payload.length
            : 0,
      };

    default:
      return state;
  }
};

export default messagesReducer;
