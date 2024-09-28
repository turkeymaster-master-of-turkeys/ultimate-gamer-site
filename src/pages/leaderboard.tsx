import React from 'react';
import * as styles from "../styles";
import ChallengeHistory from "../components/ChallengeHistory";
import Podium from "../components/Podium";

const Leaderboard = () => {
  return (
    <div style={styles.bg}>
      <div style={styles.flexRow}>
        <ChallengeHistory />
        <Podium />
      </div>
    </div>
  );
};

export default Leaderboard;