import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  pageContainer: {
    background: '#f5f8fa',
  },
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
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e6ecf0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    border: '1px solid #e6ecf0',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1da1f2',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '1.25rem',
    color: '#657786',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  kibSection: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  kibHeader: {
    alignSelf: 'flex-start',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#1c1e21',
    margin: '0.5rem 0 1rem',
    paddingLeft: '0.25rem',
    borderLeft: '4px solid #1da1f2',
    paddingBottom: '0.25rem',
  },
  createButton: {
    marginTop: '1rem',
    alignSelf: 'flex-end',
  }
});