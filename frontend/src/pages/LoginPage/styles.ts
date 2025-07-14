import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  pageContainer: {
    background: "#f5f8fa",
    minHeight: "100vh",
    padding: "2rem",
  },
  card: {
    maxWidth: "400px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#1da1f2",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  error: {
    color: "red",
    fontSize: "0.85rem",
    marginTop: "-0.5rem",
    marginBottom: "0.5rem",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#1da1f2",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
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
    fontSize: "1rem",
    padding: 0,
  },
});
