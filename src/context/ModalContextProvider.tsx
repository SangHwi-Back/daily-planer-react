import {FC, ReactNode, useState} from "react";
import {Modal_Context, ModalContext} from "./ModalContext.ts";

interface Props {
  children: ReactNode;
}

const ModalContextProvider: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  
  const context: Modal_Context = {
    showModal, setShowModal,
  }
  
  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}

export default ModalContextProvider;
