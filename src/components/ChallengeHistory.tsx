import React from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";

const ChallengeHistory = () => {
  const { history } = useData()
  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Challenge History
      </div>
      <div style={styles.challengeList}>
        {history.map((completedChallenge, i) => <div>
          <div style={{...styles.flexRow, justifyContent: "space-between"}}>
            <div>
              {completedChallenge.name}
            </div>
            <div style={{fontSize: 16, color: "#444"}}>
              {(new Date(completedChallenge.date * 1000)).toLocaleDateString()}
            </div>
          </div>
        </div>)}
      </div>

    </div>
  );
};

export default ChallengeHistory;