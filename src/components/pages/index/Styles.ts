import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    grow: {
        flexGrow: 1,
        padding: theme.spacing(8, 3),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5, 0),
        },
        margin: 0,
        width: '100%',
    },
    content: {
        flexGrow: 1,
        maxWidth: '100%',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(3, 6),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    cardRoot: {
        width: '100%'
    },
    cardDisplayContents: {
        minWidth: 275,
        display: 'contents'
    },
    cardTitle: {
        fontSize: 14,
    },
});
