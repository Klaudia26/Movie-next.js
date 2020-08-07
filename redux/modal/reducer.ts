import { ModalTypes } from "./types";

export const modalReducer = (state = false, action) => {
  console.log("action", action);
  switch (action.type) {
    case ModalTypes.OPEN_MODAL:
      return true;
    case ModalTypes.CLOSE_MODAL:
      return false;

    default:
      return state;
  }
};
