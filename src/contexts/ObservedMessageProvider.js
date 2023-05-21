import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ObservedMessageContext = createContext();
const ObservedMessageProvider = ({ children }) => {
  const [observed, setObserved] = useState(false);
  return (
    <ObservedMessageContext.Provider
      value={{ observed, setObserved }}
    >
      {children}
    </ObservedMessageContext.Provider>
  );
};

export default ObservedMessageProvider;
