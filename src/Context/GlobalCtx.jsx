import React, { useState, useEffect, createContext } from 'react';
import { PublicRoute } from '../Routes/RouteGuards';

export const GlobalCtx = createContext();

const GlobalCtxProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <GlobalCtx.Provider value={{ loading }}>
      <PublicRoute>
        {children}
      </PublicRoute>
    </GlobalCtx.Provider>
  );
};

export default GlobalCtxProvider;
