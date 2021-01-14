import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    root: {
        textAlign: 'center',       
    },
    textField: {
        margin: theme.spacing(2,2,2,0)
    },
});
