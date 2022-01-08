import { createSelector } from "reselect";

const selectFromMessagesStateDomain = (globalState) =>
  globalState.messagesState;

const makeSelectMessagesData = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState) => messagesState.messages
  );

export { makeSelectMessagesData };
