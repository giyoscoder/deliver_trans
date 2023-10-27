import { createContext, useState } from "react";

export const Context = createContext({});

const ModalContextProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  return <Context.Provider value={{modalShow, setModalShow}}>{children}</Context.Provider>;
};

export default ModalContextProvider;
