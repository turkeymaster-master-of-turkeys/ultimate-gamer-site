import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export type DataProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext({
  reload: async () => {},
  saveSuggestions: async (suggestions: string[]) => {},
  saveChallenges: async (challenges: string[]) => {},
  suggestions: [] as string[],
  challenges: [] as string[]
});

const DataProvider = ({children}: DataProviderProps) => {

  const [suggestions, setSuggestions] = useState<string[]>([])
  const [challenges, setChallenges] = useState<string[]>([])

  useEffect(() => {
    reload()
  }, []);

  const proxy = "http://34.171.106.35:8000"

  const reload = async () => {
    axios.get(`${proxy}/challenges`)
      .then(response => {
        setChallenges(response.data);
      });
    axios.get(`${proxy}/suggestions`)
      .then(response => {
        setSuggestions(response.data);
      });
  }

  const saveSuggestions = async (suggestions: string[]) => {
    await axios.post(`${proxy}/suggestions`, suggestions)
    setSuggestions(suggestions)
  }

  const saveChallenges = async (challenges: string[]) => {
    await axios.post(`${proxy}/challenges`, challenges)
    setChallenges(challenges)
  }

  return (
    // The ConfigContext.Provider component will provide the authentication state and functions to all children
    <DataContext.Provider value={{ reload, suggestions, challenges, saveSuggestions, saveChallenges }}>
      {children}
    </DataContext.Provider>
  );
};

// The useAuth hook can be used to access the authentication state and functions
export const useData = () => React.useContext(DataContext);

export default DataProvider;