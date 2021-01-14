import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    root: {
        textAlign: 'center',       
    },
    datasetInput: {
        margin: theme.spacing(2,0,2,0)
    },
});
