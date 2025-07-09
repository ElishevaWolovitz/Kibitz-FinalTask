import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
card: {
    border: '1px solid #e0e0e0',
    borderRadius: 16,
    padding: 20,
    background: '#fff',
    boxShadow: '0 2px 12px rgba(9,132,227,0.08)',
    maxWidth: 540,
    width: '100%',
    margin: '0 auto 24px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  kibName: {
    fontWeight: 700,
    fontSize: 18,
    color: '#2d3436',
  },
  shmoozerId: {
    fontSize: 14,
    color: '#636e72',
    marginLeft: 6,
  },
  text: {
    fontSize: 16,
    color: '#222',
    margin: '10px 0 6px 0',
    lineHeight: 1.7,
    fontWeight: 400,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 8,
    borderTop: '1px solid #e0e0e0',
    color: '#636e72',
    fontSize: 14,
    gap: 16,
  },
  likes: {
    fontWeight: 600,
    color: '#0984e3',
    fontSize: 15,
  },
  created: {
    fontStyle: 'italic',
    color: '#636e72',
    fontSize: 13,
  },
  id: {
    fontSize: 12,
    color: '#b2bec3',
    fontWeight: 400,
    marginTop: 2,
  },
});