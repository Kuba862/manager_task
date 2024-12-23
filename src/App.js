import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCtxProvider } from './Context/GlobalCtx';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
