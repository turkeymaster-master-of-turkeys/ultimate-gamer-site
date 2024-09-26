import React from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";
import {RxCross2} from "react-icons/rx";

const Challenges = () => {
  const {challenges, saveChallenges} = useData()
  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Challenges
      </div>
      <div style={styles.challengeList}>
        {challenges.map((challenge, i) =>
          <div style={styles.suggestion}>
            <div>
              {challenge}
            </div>
              <RxCross2 onClick={() => {
                const newSuggestions = [...challenges]
                newSuggestions.splice(i, 1)
                saveChallenges(newSuggestions)
              }}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;