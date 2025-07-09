import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
    pageContainer: {
        background: '#f5f8fa',
    },
    headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    paddingTop: '2rem',
    gap: '1.5rem',
    flexWrap: 'wrap',
    background: '#f5f8fa',
  },
    title: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#1da1f2',
    letterSpacing: '1px',
    margin: 0,
    },
});