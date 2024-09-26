import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export type DataProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext({
  reload: () => {},
  suggestions: [] as string[],
  challenges: [] as string[]
});

const DataProvider = ({children}: DataProviderProps) => {

  const [suggestions, setSuggestions] = useState<string[]>([])
  const [challenges, setChallenges] = useState<string[]>([])
  useEffect(() => {
    reload()
  }, []);

  const proxy = "https://localhost:8000"

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

  return (
    // The ConfigContext.Provider component will provide the authentication state and functions to all children
    <DataContext.Provider value={{ reload, suggestions, challenges }}>
      {children}
    </DataContext.Provider>
  );
};

// The useAuth hook can be used to access the authentication state and functions
export const useData = () => React.useContext(DataContext);

export default DataProvider;