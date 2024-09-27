import React from 'react';
import * as styles from "../styles";

const DefaultPage = () => {
  return (
    <div style={{...styles.bg, flexDirection: "column", alignItems: "center"}}>
      <div style={{position: "absolute", top: 40, zIndex: 1, gap: 8, display: "flex", flexDirection: "row"}}>
        <a href={"/challenges"} style={{width: 400}}>
          <button style={styles.buttonWide}>
            Go to Challenges {">"}
          </button>
        </a>
        <a href={"/wheel"} style={{width: 400}}>
          <button style={styles.buttonWide}>
            Go to Wheel {">"}
          </button>
        </a>
      </div>
      <img
        src={"/ultimate-gamer.png"}
        alt={"Ultimate Gamer"}
        style={{objectFit: "none", position: "absolute", bottom: 0}}
      />
    </div>
  );
};

export default DefaultPage;