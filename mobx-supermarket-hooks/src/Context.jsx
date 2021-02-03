import React, { createContext } from 'react';
import { counter } from './stores/counter';
import { market } from './stores/market';
import { useLocalStore } from 'mobx-react';

export const storeContext = createContext({});

const StorePrivider = ({ children }) => {
  const value = useLocalStore(() => ({
    counter,
    market,
  }));

  return <storeContext.Provider value={value}>{children}</storeContext.Provider>
};

export default StorePrivider;
