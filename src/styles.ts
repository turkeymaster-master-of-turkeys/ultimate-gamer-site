import {CSSProperties} from "react";

const primary = '#fbdcbf'
const primaryLight = '#ffe7ce'
const highlight = '#9c4c43'

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
  backgroundColor: primaryLight,
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
  backgroundColor: primaryLight,
}

export const guidelines: CSSProperties = {
  fontSize: 12,
  marginBottom: 12,
  marginLeft: 8,
}

export const input: CSSProperties = {
  fontSize: 16,
  padding: 8,
  border: `2px solid ${highlight}`,
  borderRadius: 8,
  flex: 1,
  backgroundColor: primaryLight,
  outline: 'none',
}

export const button: CSSProperties = {
  fontSize: 16,
  padding: 8,
  paddingLeft: 16,
  paddingRight: 16,
  border: `0px`,
  backgroundColor: highlight,
  borderRadius: 12,
  color: primary,
  marginLeft: 8,
  cursor: 'pointer',
}

export const buttonWide: CSSProperties = {
  ...button,
  marginBottom: 8,
  width: "100%",
  marginLeft: 0
}

export const suggestion: CSSProperties = {
  fontSize: 16,
  marginBottom: 4,
  justifyContent: 'space-between',
  width: '100%',
  ...flexRow,
}

export const displayPrize: CSSProperties = {
  position: 'absolute',
  top: 200,
  zIndex: 6,
  backgroundColor: "#ffe5e5",
  color: "#451313",
  padding: 16,
  borderRadius: 16,
  fontSize: 24,
  border: "4px solid " + highlight,
  cursor: "pointer",
}

export const divider: CSSProperties = {
  borderBottom: `2px solid ${highlight}`,
  marginBottom: 12,
}
