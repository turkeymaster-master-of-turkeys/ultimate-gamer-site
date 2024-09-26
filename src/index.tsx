import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import DataProvider from "./components/DataProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
