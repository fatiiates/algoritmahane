import { Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 240;

export const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    drawer: {
        width: 0,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerTitle: {
        width: '100%',
        height: '100%',
        borderRadius: 0
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '64px',
        ...theme.mixins.toolbar,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
});