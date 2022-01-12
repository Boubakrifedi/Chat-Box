import { createSelector } from "reselect";
import React from "react";


const selectFromMessagesStateDomain = (globalState) =>
  globalState.messagesState;

const makeSelectMessagesData = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState) => messagesState.messages
  );

const makeSelectLastIndex = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState) => messagesState.lastIndex
  );

export { makeSelectMessagesData, makeSelectLastIndex };
