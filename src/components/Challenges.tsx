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
      <a href={"/wheel"}>
        <button style={styles.buttonWide}>
          Go to Wheel {">"}
        </button>
      </a>
      <div style={styles.challengeList}>
        {challenges.map((challenge, i) =>
          <div style={styles.suggestion}>
            <div>
              {challenge}
            </div>
              <RxCross2 onClick={async () => {
                const newSuggestions = [...challenges]
                newSuggestions.splice(i, 1)
                await saveChallenges(newSuggestions)
              }}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;