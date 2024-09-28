import React from 'react';
import * as styles from '../styles';

type NavBarProps = {
  children: React.ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: styles.primary}}>
      <div style={{padding: 8, zIndex: 1}}>
        <div style={{...styles.flexRow, justifyContent: "space-between"}}>
          <a href={"/"}>
            <img src={"/ultimate-gamer-text.png"} alt={"Logo"} height={50} style={{cursor: "pointer"}}/>
          </a>
          <a href={"/challenges"} style={{width: 400}}>
            <button style={styles.buttonWide}>
              Challenges {">"}
            </button>
          </a>
          <a href={"/wheel"} style={{width: 400}}>
            <button style={styles.buttonWide}>
              Wheel {">"}
            </button>
          </a>
          <a href={"/leaderboard"} style={{width: 400}}>
            <button style={styles.buttonWide}>
              Leaderboard {">"}
            </button>
          </a>
        </div>
      </div>
      <div style={styles.bg}>
        {children}
      </div>
    </div>
  );
};

export default NavBar;