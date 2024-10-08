import {CSSProperties} from "react";

export const primary = '#fbdcbf'
export const primaryLight = '#ffe7ce'
export const highlight = '#9c4c43'

export const bg: CSSProperties = {
  backgroundColor: primary,
  display: 'flex',
  minHeight: 'calc(100vh - 70px)',
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
  backgroundColor: primaryLight,
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

export const centerBox: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
}

export const dialog: CSSProperties = {
  position: 'absolute',
  zIndex: 6,
  backgroundColor: primaryLight,
  padding: 16,
  borderRadius: 16,
  fontSize: 24,
  border: "4px solid " + highlight,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  minWidth: 500,
}

export const checkBox: CSSProperties = {
  cursor: "pointer",
  marginLeft: "10px",
}
