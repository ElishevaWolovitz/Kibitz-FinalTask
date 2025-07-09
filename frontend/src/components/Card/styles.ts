import { createUseStyles } from 'react-jss'

export const Styles = createUseStyles({
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: 18,
    padding: 24,
    background: '#fff',
    boxShadow: '0 4px 16px rgba(9,132,227,0.07)',

    maxWidth: 540,
    width: '100%',
    transition: 'box-shadow 0.18s',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    '&:hover': {
      boxShadow: '0 8px 40px 4px rgba(9,132,227,0.13)',
      border: '1.5px solid #1da1f2',
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem',
    alignItems: 'center',
  },
});