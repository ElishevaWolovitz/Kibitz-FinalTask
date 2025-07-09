import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1.5rem',
    background: '#fff',
    color: '#636e72',
    border: '1.5px solid #b2bec3',
    borderRadius: '20px',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(99,110,114,0.08)',
    transition: 'background 0.18s, box-shadow 0.18s, color 0.18s, border 0.18s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
    '&:hover': {
      background: '#f1f2f6',
      color: '#2d3436',
      border: '1.5px solid #636e72',
      boxShadow: '0 4px 16px rgba(99,110,114,0.15)',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      background: '#dfe6e9',
      color: '#636e72',
      border: '1.5px solid #b2bec3',
      boxShadow: '0 2px 4px rgba(99,110,114,0.08)',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #b2bec3',
      outlineOffset: '2px',
    },
  }
})