import { createUseStyles } from 'react-jss';

export const CreateNewItemButtonStyles = createUseStyles({
  button: {
    cursor: 'pointer',
    padding: '0.6rem 1.5rem',
    background: 'linear-gradient(90deg, #0984e3 0%, #74b9ff 100%)',
    border: 'none',
    borderRadius: '24px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(9,132,227,0.10)',
    transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
   '&:hover, &:active': {
    background: '#fff',
    color: '#1da1f2',
    border: '2px solid #1da1f2',
    boxShadow: '0 4px 16px rgba(29,161,242,0.15)',
   },
  },
});