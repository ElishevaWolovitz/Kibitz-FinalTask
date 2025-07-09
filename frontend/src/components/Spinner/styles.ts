import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  spinnerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  spinner: {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #0984e3',
    borderRadius: '50%',
    width: 48,
    height: 48,
    animation: '$spin 1s linear infinite',
  },
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
});