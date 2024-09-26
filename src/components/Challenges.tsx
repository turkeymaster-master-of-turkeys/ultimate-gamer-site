import React from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";

const Challenges = () => {
  const {challenges} = useData()
  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Challenges
      </div>
      <div style={styles.challengeList}>
        {challenges.map(challenge => <div>
          {challenge}
        </div>)}
      </div>
    </div>
  );
};

export default Challenges;