import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCtxProvider from './Context/GlobalCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCtxProvider>
      <App />
    </GlobalCtxProvider>
  </React.StrictMode>
);
