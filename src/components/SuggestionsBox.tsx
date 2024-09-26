import React from 'react';
import * as styles from "../styles";

type SuggestionsBoxProps = {
  suggestions: string[]
}

const SuggestionsBox = ({ suggestions }: SuggestionsBoxProps) => {
  return (
    <div style={styles.suggestionsBox}>
      {suggestions.map(suggestion => <div>
        {suggestion}
      </div>)}
    </div>
  );
};

export default SuggestionsBox;