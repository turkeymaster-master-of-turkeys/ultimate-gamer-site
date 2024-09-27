import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DataProvider from "./components/DataProvider";
import ChallengePage from './pages/challenges';
import NotFound from "./pages/not-found";

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index path={'/challenges'} element={<ChallengePage />}/>
          <Route path={'*'} element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
