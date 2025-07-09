import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: '#dfe6e9',
    objectFit: 'cover',
    marginRight: 10,
  },
  shmoozerName: {
    fontWeight: 700,
    fontSize: 18,
    color: '#2d3436',
  },
  displayName: {
    fontSize: 15,
    color: '#636e72',
    fontWeight: 500,
    marginLeft: 4,
  },
  id: {
    fontSize: 12,
    color: '#b2bec3',
    fontWeight: 400,
    marginTop: 2,
  },
});