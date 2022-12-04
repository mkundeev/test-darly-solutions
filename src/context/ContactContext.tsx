import React, { createContext, useState } from "react";
import { IContact } from "../types/data.types";

interface IContactContext {
  contact: Partial<IContact>;
  setContact: (value: Partial<IContact>) => void;
}

export const ContactContext = createContext<IContactContext>({
  contact: {},
  setContact: () => {},
});

export const ContactState = ({ children }: { children: React.ReactNode }) => {
  const [contact, setContact] = useState({});

  return (
    <ContactContext.Provider value={{ contact, setContact }}>
      {children}
    </ContactContext.Provider>
  );
};
