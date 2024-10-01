import React from 'react';
import * as styles from '../styles';
import { Wheel } from 'react-custom-roulette'
import {useData} from "../components/DataProvider";

const WheelPage = () => {
  const { challenges } = useData();
  const data = challenges.map((challenge, i) => (
    {option: challenge, style: {
      fontSize: Math.min(Math.round(350 / challenge.length), 16),
      backgroundColor: ["#a0d468", "#4fc1e9", "#ac92ec", "#ed5565", "#ffce54"][i % 5],
    }}
  ));
  const [spin, setSpin] = React.useState(false);
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [displayPrize, setDisplayPrize] = React.useState(false);

  const handleSpinClick = () => {
    const riggedGames: string[] = ["seven hotties", "sealed with a demon's kiss"];
    const maxAttempts = 5;
    let attempts = 0;

    while (attempts < maxAttempts) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      const challenge = challenges[newPrizeNumber];

      const rigged = riggedGames.some(game => challenge.toLowerCase().includes(game));
      console.log(challenge, rigged);

      if (attempts >= maxAttempts - 1 || rigged) {
        setDisplayPrize(false);
        setPrizeNumber(newPrizeNumber);
        setSpin(true);
        break;
      }

      attempts++;
    }
  }

  const onSpinEnd = () => {
    setSpin(false);
    setDisplayPrize(true);
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", alignSelf: "center"}}>
      <div style={{fontSize: 32, marginBottom: 8, fontWeight: 600}}>
        Spin the Wheel!
      </div>
      {displayPrize && <div
        style={styles.displayPrize}
        onClick={() => setDisplayPrize(false)}
      >
        {challenges[prizeNumber]}
      </div>}
      <div onClick={handleSpinClick} style={{cursor: "pointer"}}>
        {data.length > 0 ?
          <Wheel
            mustStartSpinning={spin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={onSpinEnd}
            fontSize={12}
            textDistance={50}
            radiusLineWidth={1}
          /> :
          <div>No challenges found</div>
        }
      </div>
      <div>
        <a href={"/challenges"} style={{width: 400}}>
          <button style={styles.buttonWide}>
            Go to Challenges {">"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default WheelPage;