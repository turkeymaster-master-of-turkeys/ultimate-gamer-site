import React, {useState} from 'react';
import * as styles from "../styles";
import {useData} from "./DataProvider";
// @ts-ignore
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

const SuggestionsBox = () => {

  const {suggestions, saveSuggestions, challenges, saveChallenges} = useData();
  const [suggestion, setSuggestion] = useState('')

  return (
    <div style={styles.suggestions}>
      <div style={{marginBottom: 12, marginLeft: 8}}>
        Suggestions
      </div>
      <div style={styles.guidelines}>
        Guidelines for suggestions:<br/>
        • Aim to take ~1-2 hours on average<br/>
        • Start from a 'fresh save' or an equivalent 'even playing field'<br/>
        • Represent the game that it is set in or an important aspect of it<br/>
        • Minimal factor of luck (if seeding is involved, everyone should use the same seed)<br/>
        • Glitches or exploits should not be a main part of it, but may be allowed<br/>
        • Avoid challenges that require a lot of grinding<br/>
        • Multiple challenges for a single game should cover different aspects of it (e.g Minecraft creative and
        survival)<br/>
        • Everyone should be able to access the game
      </div>
      <div style={{marginBottom: 8, marginLeft: 8}}>
        Add a suggestion:
      </div>
      <div style={{...styles.flexRow, marginBottom: 12}}>
        <input
          type="text"
          style={styles.input}
          value={suggestion}
          onChange={e => setSuggestion(e.target.value)}
        />
        <button
          style={styles.button}
          onClick={() => {
            saveSuggestions([...suggestions, suggestion])
            setSuggestion('')
          }}
        >
          Add
        </button>
      </div>
      <div style={styles.suggestionsBox}>
        {suggestions.map((suggestion, i) =>
          <div style={styles.suggestion}>
            <div>
              {suggestion}
            </div>
            <div>
              <IoCheckmarkSharp onClick={() => {
                saveChallenges([...challenges, suggestion])
                const newSuggestions = [...suggestions]
                newSuggestions.splice(i, 1)
                saveSuggestions(newSuggestions)
              }} />
              <RxCross2 onClick={() => {
                const newSuggestions = [...suggestions]
                newSuggestions.splice(i, 1)
                saveSuggestions(newSuggestions)
              }}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionsBox;