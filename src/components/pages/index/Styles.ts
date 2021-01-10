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
    flexbox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    cardDisplayContents: {
        minWidth: 275,
        display: 'contents',
    },
    cardContent: {
        [theme.breakpoints.up('xs')]: {
            minWidth: 300
        },
    },
    buttonGrid: {
        marginBottom: theme.spacing(1)
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    infoGrid: {
        padding: theme.spacing(4)
    },
    datasetGrid: {
        padding: theme.spacing(4),
    },
    formControlLabel: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    switchBase: {
        color: theme.palette.secondary.main,
    },
    switchTrack: {
        backgroundColor: theme.palette.secondary.light 
    },
    textField: {
        width: 150,
        marginRight: theme.spacing(2)
    },
    resultButton: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        },
        fontSize: theme.spacing(2.5),
        margin: theme.spacing(3)
    },
    randomDatasetTyporgraphy: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    infoButton: {
        backgroundColor: theme.palette.info.main,
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.info.dark
        },
    },
    cardTitle: {
        fontSize: 16,
        display: 'flex',
        alignItems: 'center'
    },
});
