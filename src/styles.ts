import {CSSProperties} from "react";

const primary = '#f0ebf8'
const highlight = '#6e2ed5'

export const bg: CSSProperties = {
  backgroundColor: primary,
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}

export const suggestionsBox: CSSProperties = {
  borderRadius: 16,
  margin: 12,
  padding: 12,
  fontSize: 24,
  flex: 1,
  border: `2px dashed ${highlight}`
}

export const flexRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
}

export const challengeList: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}
