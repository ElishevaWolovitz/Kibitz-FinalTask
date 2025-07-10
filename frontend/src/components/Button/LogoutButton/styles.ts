import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1.2rem',
    backgroundColor: '#f5f6fa',
    border: '1px solidrgb(122, 129, 133)',
    borderRadius: '20px',
    fontSize: '1.0rem',
    color: '#2d3436',
    fontWeight: 700,
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    transition: 'background 0.1s, box-shadow 0.1s, color 0.1s, border 0.1s',
    outline: 'none',
    marginRight: '1rem',
    '&:hover': {
      backgroundColor: '#dfe6e9',
      color: '#0984e3',
      border: '1px solid #0984e3',
      boxShadow: '0 4px 12px rgba(9,132,227,0.08)',
    },
    '&:active': {
      backgroundColor: '#b2bec3',
      color: '#636e72',
      border: '1px solid #636e72',
    },
    '&:focus-visible': {
      outline: '2px solid #0984e3',
      outlineOffset: '2px',
    },
  },
});