import {createContext} from "react";

export interface Modal_Context {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export const ModalContext = createContext<Modal_Context>({
  showModal: false,
  setShowModal: () => {},
});
