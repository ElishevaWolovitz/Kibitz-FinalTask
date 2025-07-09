import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    border: '1.5px solid #e6ecf0',
    borderRadius: 24,
    padding: '0.25rem 1rem',
    boxShadow: '0 2px 8px rgba(29,161,242,0.06)',
    maxWidth: 400,
    width: '100%',
    margin: '0.5rem auto',
    transition: 'box-shadow 0.18s, border 0.18s',
    '&:focus-within': {
      border: '1.5px solid #1da1f2',
      boxShadow: '0 4px 16px rgba(29,161,242,0.12)',
    },
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '1.1rem',
    color: '#14171a',
    padding: '0.5rem 0',
    fontWeight: 500,
    '&::placeholder': {
      color: '#657786',
      opacity: 1,
    },
  },
  icon: {
    color: '#1da1f2',
    fontSize: '1.3rem',
    marginRight: '0.5rem',
  },
})