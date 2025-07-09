import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
    feed: {
        background: '#f5f8fa',
        minHeight: '100vh',
        padding: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        width: '100%',
        maxWidth: 600,
    },
    listItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});