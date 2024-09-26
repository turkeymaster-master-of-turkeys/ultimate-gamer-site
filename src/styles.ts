import {CSSProperties} from "react";

const primary = '#f0ebf8'
const highlight = '#6e2ed5'

export const bg: CSSProperties = {
  backgroundColor: primary,
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}

export const suggestions: CSSProperties = {
  margin: 12,
  padding: 12,
  fontSize: 24,
  flex: 1,
}

export const suggestionsBox: CSSProperties = {
  borderRadius: 16,
  fontSize: 20,
  border: `2px dashed ${highlight}`,
  padding: 12,
}

export const flexRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}

export const challengeList: CSSProperties = {
  borderRadius: 16,
  fontSize: 20,
  border: `2px solid ${highlight}`,
  padding: 12,
}
