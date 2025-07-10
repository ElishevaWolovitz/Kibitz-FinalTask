import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
    container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center" as const,
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  button: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  registerContainer: {
    marginTop: "1.5rem",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#007BFF",
    cursor: "pointer",
    textDecoration: "underline",
    padding: 0,
    fontSize: "1rem",
  },

})