import React from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";

const Leaderboard = () => {
  const { userScores } = useData()
  const ranking = Object.keys(userScores).sort((a, b) => userScores[b] - userScores[a])
  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12}}>
        Leaderboard
      </div>
      <div style={{...styles.challengeList, padding: 20}}>
        <div style={{...styles.flexRow, marginBottom: 12, justifyContent: "space-between"}}>
          <div>Contestant</div>
          <div>Score</div>
        </div>
        <div style={styles.divider}/>
        <ol>
          {ranking.map(user => <li>
            <div style={{...styles.flexRow, marginBottom: 12, justifyContent: "space-between"}}>
              <div>{user}</div>
              <div>{userScores[user]}</div>
            </div>
          </li>)}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;