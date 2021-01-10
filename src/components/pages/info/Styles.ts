import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    cardRoot: {
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    icon: {
        paddingRight: theme.spacing(1),
        fontSize: theme.spacing(6)
    },
    headLine: {
        margin: theme.spacing(6),
        display: 'flex',
        alignItems: 'center'
    },
});
