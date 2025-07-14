import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
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
    pageContainer: {
        background: '#f5f8fa',
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
    }
});