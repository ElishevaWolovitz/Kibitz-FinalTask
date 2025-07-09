export const Styles = {
  nav: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #e6ecf0",
    padding: "0.75rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(29,161,242,0.03)",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    color: "#1da1f2",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    transition: "background 0.2s, color 0.2s",
    "&:hover": {
      background: "#e8f5fe",
      color: "#0d8ddb",
    },
  },
  active: {
    color: "#fff",
    background: "#1da1f2",
    textDecoration: "none",
  },
};
