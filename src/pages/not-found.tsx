import React from 'react';
import * as styles from "../styles";

const NotFound = () => {
  return (
    <div style={{...styles.bg, flexDirection: "column"}}>
      <a href={"/challenges"} style={{position: "absolute", top: 40, width: 500, zIndex: 10, alignSelf: "center"}}>
        <button style={styles.buttonWide}>
          Go to Challenges {">"}
        </button>
      </a>
      <img
        src={"/ultimate-gamer.png"}
        alt={"Ultimate Gamer"}
        style={{objectFit: "none", position: "absolute", bottom: 0, alignSelf: "center"}}
      />
    </div>
  );
};

export default NotFound;