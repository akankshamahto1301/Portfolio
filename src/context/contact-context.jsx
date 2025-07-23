"use client";

import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <ContactContext.Provider value={{ showContact, setShowContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}
