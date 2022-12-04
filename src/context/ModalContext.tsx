import React, { createContext, useState } from "react";

interface IModalContext {
  modal: string;
  open: (value: string) => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: "",
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState("");
  const open = (value: string) => {
    setModal(value);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setModal("");
    document.body.style.overflow = "visible";
  };

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
