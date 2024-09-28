import React from 'react';
import * as styles from "../styles";
import ChallengeHistory from "../components/ChallengeHistory";
import Podium from "../components/Podium";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage = () => {
  return (
    <div style={styles.bg}>
      <div style={styles.flexRow}>
        <ChallengeHistory />
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <Leaderboard />
          <Podium />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;