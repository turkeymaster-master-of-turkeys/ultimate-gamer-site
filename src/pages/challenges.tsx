import React from 'react';
import * as styles from '../styles';
import Challenges from "../components/Challenges";
import SuggestionsBox from "../components/SuggestionsBox";

const ChallengePage = () => {
  return (
    <div style={styles.flexRow}>
      <SuggestionsBox />
      <Challenges />
    </div>
  );
};

export default ChallengePage;