import React, {useState} from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";
import {RxCross2} from "react-icons/rx";
import {IoCheckmarkSharp} from "react-icons/io5";
import DragDropList from "./dragDropList";

const Challenges = () => {
  const {challenges, saveChallenges, history, saveHistory} = useData()
  const [finishChallengeDialogueNum, setFinishChallengeDialogueNum] = useState(-1)
  const initialRanking = ['Turkeymaster', 'llambda', 'Wacko', 'oozer']
    .map((name, i) => ({id: i.toString(), content: name}))
  const [ranking, setRanking] = useState(initialRanking)

  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Challenges
      </div>
      <div style={styles.challengeList}>
        {challenges.map((challenge, i) =>
          <div style={styles.suggestion} key={i}>
            <div>
              {challenge}
            </div>
            <div>
              <IoCheckmarkSharp style={styles.checkBox} onClick={async () => {
                setFinishChallengeDialogueNum(i)
              }}/>
              <RxCross2 style={styles.checkBox} onClick={async () => {
                const newSuggestions = [...challenges]
                newSuggestions.splice(i, 1)
                await saveChallenges(newSuggestions)
              }}/>
            </div>
          </div>
        )}
      </div>
      <div style={{...styles.centerBox, visibility: finishChallengeDialogueNum !== -1 ? 'visible' : 'hidden'}}>
        <div style={{...styles.dialog}}>
          <div>
            Complete: "{challenges[finishChallengeDialogueNum]}"?
          </div>
          <div style={{fontSize: 16}}>
            Set ranking:
          </div>
          <DragDropList items={ranking} setItems={setRanking}/>
          <div style={{...styles.flexRow, justifyContent: "space-between"}}>
            <button style={styles.button} onClick={() => {
              setFinishChallengeDialogueNum(-1)
              saveHistory([...history, {
                name: challenges[finishChallengeDialogueNum],
                date: Math.floor(Date.now() / 1000),
                ranking: ranking.map(({content}) => content)
              }]).then(() => {
                const newChallenges = [...challenges]
                newChallenges.splice(finishChallengeDialogueNum, 1)
                saveChallenges(newChallenges).then(() => setRanking(initialRanking))
              })
            }}>
              Ok
            </button>
            <button style={styles.button} onClick={() => {
              setFinishChallengeDialogueNum(-1)
              setRanking(initialRanking)
            }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;