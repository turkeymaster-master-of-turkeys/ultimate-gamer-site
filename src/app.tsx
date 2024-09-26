import React, {useEffect, useState} from 'react';
import * as styles from './styles';
import Challenges from "./components/Challenges";
import axios from 'axios';
import SuggestionsBox from "./components/SuggestionsBox";

const App = () => {

  const [challenges, setChallenges] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/challenges')
      .then(response => {
        setChallenges(response.data);
      });
  }, []);

  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/suggestions')
      .then(response => {
        setSuggestions(response.data);
      });
  }, []);

  return (
    <div style={styles.bg}>
      <div style={styles.flexRow}>
        <SuggestionsBox suggestions={suggestions}/>
        <Challenges challenges={challenges} />
      </div>
    </div>
  );
};

export default App;