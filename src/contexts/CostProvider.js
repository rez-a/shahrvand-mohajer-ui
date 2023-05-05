import React from 'react';
import { createContext } from 'react';
import { COST } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';

export const CostContext = createContext();
const CostProvider = ({ children }) => {
  const { data } = useSWR(COST, fetcher);

  return (
    <CostContext.Provider value={{ ...data }}>
      {children}
    </CostContext.Provider>
  );
};

export default CostProvider;
