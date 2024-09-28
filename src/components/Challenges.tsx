import React, {useState} from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";
import {RxCross2} from "react-icons/rx";
import {IoCheckmarkSharp} from "react-icons/io5";
import DragDropList from "./dragDropList";

const Challenges = () => {
  const {challenges, saveChallenges, saveHistory} = useData()
  const [finishChallengeDialogueNum, setFinishChallengeDialogueNum] = useState(-1)
  const [ranking, setRanking] = useState([
    {id: '1', content: 'Item 1'},
    {id: '2', content: 'Item 2'},
    {id: '3', content: 'Item 3'},
    {id: '4', content: 'Item 4'},
    {id: '5', content: 'Item 5'},
  ])

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
            <div>
              <IoCheckmarkSharp onClick={async () => {
                setFinishChallengeDialogueNum(i)
              }}/>
              <RxCross2 onClick={async () => {
                const newSuggestions = [...challenges]
                newSuggestions.splice(i, 1)
                await saveChallenges(newSuggestions)
              }}/>
            </div>
          </div>
        )}
      </div>
      {finishChallengeDialogueNum !== -1 &&
        <div style={styles.dialog}>
          <div>
            Complete: "{challenges[finishChallengeDialogueNum]}"?
          </div>
          <div style={{fontSize: 16}}>
            Set ranking:
          </div>
          <DragDropList items={ranking} setItems={setRanking}/>
          <div style={{...styles.flexRow, justifyContent: "space-between"}}>
            <button style={styles.button} onClick={() => {
              setRanking([])
              setFinishChallengeDialogueNum(-1)
            }}>
              Ok
            </button>
            <button style={styles.button} onClick={() => {
              setFinishChallengeDialogueNum(-1)
              setRanking([])
            }}>
              Cancel
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Challenges;