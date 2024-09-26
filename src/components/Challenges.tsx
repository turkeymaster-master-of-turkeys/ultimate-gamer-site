import React from 'react';
import * as styles from "../styles";

type ChallengesProps = {
  challenges: string[]
}

const Challenges = ({ challenges }: ChallengesProps) => {
  return (
    <div style={styles.challengeList}>
      {challenges.map(challenge => <div>
        {challenge}
      </div>)}
    </div>
  );
};

export default Challenges;