import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {completedChallenge} from "../types/completedChallenge";

export type DataProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext({
  reload: async () => {},
  saveSuggestions: async (suggestions: suggestion[]) => {},
  saveChallenges: async (challenges: challenge[]) => {},
  saveHistory: async (history: completedChallenge[]) => {},
  suggestions: [] as suggestion[],
  challenges: [] as suggestion[],
  history: [] as completedChallenge[],
});

const DataProvider = ({children}: DataProviderProps) => {

  const [suggestions, setSuggestions] = useState<suggestion[]>([])
  const [challenges, setChallenges] = useState<challenge[]>([])
  const [history, setHistory] = useState<completedChallenge[]>([])

  useEffect(() => {
    reload()
  }, []);

  const backend = "http://localhost:8000"

  const reload = async () => {
    axios.get(`${backend}/challenges`)
      .then(response => {
        setChallenges(response.data);
      });
    axios.get(`${backend}/suggestions`)
      .then(response => {
        setSuggestions(response.data);
      });
    axios.get(`${backend}/history`)
      .then(response => {
        setHistory(response.data);
      });
  }

  const saveSuggestions = async (suggestions: suggestion[]) => {
    await axios.post(`${backend}/suggestions`, suggestions)
    setSuggestions(suggestions)
  }

  const saveChallenges = async (challenges: challenge[]) => {
    await axios.post(`${backend}/challenges`, challenges)
    setChallenges(challenges)
  }

  const saveHistory = async (history: completedChallenge[]) => {
    await axios.post(`${backend}/history`, history)
    setHistory(history)
  }

  return (
    // The ConfigContext.Provider component will provide the authentication state and functions to all children
    <DataContext.Provider value={
      { reload, suggestions, challenges, history, saveSuggestions, saveChallenges, saveHistory }
    }>
      {children}
    </DataContext.Provider>
  );
};

// The useAuth hook can be used to access the authentication state and functions
export const useData = () => React.useContext(DataContext);

export default DataProvider;