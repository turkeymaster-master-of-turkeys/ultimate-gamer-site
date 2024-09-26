import React from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";

const SuggestionsBox = () => {

  const {suggestions} = useData();

  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Suggestions
      </div>
      <div style={styles.suggestionsBox}>
        {suggestions.map(suggestion =>
          <div>
            {suggestion}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionsBox;