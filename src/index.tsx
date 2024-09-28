import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DataProvider from "./components/DataProvider";
import ChallengePage from './pages/challenges';
import DefaultPage from "./pages/defaultPage";
import WheelPage from "./pages/wheel";
import LeaderboardPage from "./pages/leaderboardPage";
import NavBar from "./components/NavBar";
import Callback from "./pages/auth/callback";
import AuthProvider from "./components/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <NavBar>
          <BrowserRouter>
            <Routes>
              <Route index path={'/challenges'} element={<ChallengePage />}/>
              <Route path={'/wheel'} element={<WheelPage />}/>
              <Route path={'/leaderboard'} element={<LeaderboardPage />}/>
              <Route path={'/auth/callback'} element={<Callback />}/>
              <Route path={'*'} element={<DefaultPage />}/>
            </Routes>
          </BrowserRouter>
        </NavBar>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>
);
