import React from 'react';
import * as styles from "../styles";

const DefaultPage = () => {
  return (
    <div style={{...styles.bg, flexDirection: "column", alignItems: "center"}}>
      <img
        src={"/ultimate-gamer.png"}
        alt={"Ultimate Gamer"}
        style={{objectFit: "none", position: "absolute", bottom: 0}}
      />
    </div>
  );
};

export default DefaultPage;