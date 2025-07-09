import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    minHeight: "80vh",
    background: "#f7f9fa",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#1da1f2",
    margin: "2rem 0 1rem 0",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#657786",
    marginBottom: "2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "rem",
  },
  navbarOverride: {
    borderRadius: 24,
    overflow: 'hidden', 
    background: '#f7f9fa', 
    boxShadow: '0 2px 8px rgba(29,161,242,0.08)',
    border: '1px solid #657786',
  },
});