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
  userScores: {} as {[id: userId]: number}  ,
});

const DataProvider = ({children}: DataProviderProps) => {

  const [suggestions, setSuggestions] = useState<suggestion[]>([])
  const [challenges, setChallenges] = useState<challenge[]>([])
  const [history, setHistory] = useState<completedChallenge[]>([])

  useEffect(() => {
    reload()
  }, []);

  const backend = process.env.REACT_APP_BACKEND_URL

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

  const userScores: {[id: userId]: number} = {}
  history.forEach(completedChallenge => {
    completedChallenge.ranking.forEach((userId, i) => {
      if (userScores[userId] === undefined) {
        userScores[userId] = 0
      }
      userScores[userId] += completedChallenge.ranking.length - i
    })
  })

  return (
    <DataContext.Provider value={
      { reload, suggestions, challenges, history, saveSuggestions, saveChallenges, saveHistory, userScores }
    }>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);

export default DataProvider;