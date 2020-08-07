import { ModalTypes } from "../modal/types";
export const openModal = () => {
  return {
    type: ModalTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
};
