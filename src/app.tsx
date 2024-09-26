import React from 'react';
import * as styles from './styles';

const App = () => {
  return (
    <div style={styles.bg}>
      <div style={styles.flexRow}>
        <div style={styles.suggestionsBox}>
          Suggestions box
        </div>
        <div style={styles.challengeList}>
          wheel
        </div>
      </div>
    </div>
  );
};

export default App;