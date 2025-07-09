import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1.5rem',
    background: '#fff',
    color: '#1da1f2',
    border: '1.5px solid #1da1f2',
    borderRadius: '20px',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(29,161,242,0.08)',
    transition: 'background 0.18s, box-shadow 0.18s, color 0.18s, border 0.18s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
    '&:hover': {
      background: '#e8f5fe',
      color: '#0d8ddb',
      border: '1.5px solid #0d8ddb',
      boxShadow: '0 4px 16px rgba(29,161,242,0.15)',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      background: '#d0e7fa',
      color: '#fff',
      border: '1.5px solid #1da1f2',
      boxShadow: '0 2px 4px rgba(29,161,242,0.08)',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #1da1f2',
      outlineOffset: '2px',
    },
  },
});