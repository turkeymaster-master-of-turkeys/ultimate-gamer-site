import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DataProvider from "./components/DataProvider";
import ChallengePage from './pages/challenges';
import DefaultPage from "./pages/defaultPage";
import WheelPage from "./pages/wheel";

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index path={'/challenges'} element={<ChallengePage />}/>
          <Route path={'/wheel'} element={<WheelPage />}/>
          <Route path={'*'} element={<DefaultPage />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
