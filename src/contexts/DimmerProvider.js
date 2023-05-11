import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const DimmerContext = createContext();
const DimmerProvider = ({ children }) => {
  const [showDimmer, setShowDimmer] = useState(false);
  return (
    <DimmerContext.Provider value={{ showDimmer, setShowDimmer }}>
      {children}
    </DimmerContext.Provider>
  );
};

export default DimmerProvider;
