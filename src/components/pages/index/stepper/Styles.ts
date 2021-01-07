import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const stepStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ccc',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: theme.palette.primary.main,
    },
    circle: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      fill: 'currentColor',
    },
    text: {
      fill: '#FFF',
      fontSize: '0.75rem',
    },
    completed: {
      color: theme.palette.primary.main,
      zIndex: 1,
      fontSize: theme.spacing(3),
    },
  })
);

export const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  mobileStepper: {
    boxShadow: theme.shadows[24],
  },
  rootConnectorVertical: {
    marginLeft: theme.spacing(3),
    padding: theme.spacing(0),
  },
  rootConnectorHorizontal: {
    marginTop: theme.spacing(1.75),
    padding: theme.spacing(0),
  },
  rootConnectorWithoutIconVertical: {
    content: '',
  },
  rootConnectorWithoutIconHorizontal: {
    marginLeft: theme.spacing(0),
  },
  mobileStep: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  stepContent: {
    borderColor: '#bdbdbd',
    margin: theme.spacing(0, 0, 0, 3),
    borderWidth: 3,
  },
  stepContentWithoutIcon: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
  },
  title: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  linearProgress: {
    backgroundColor: theme.palette.primary.main,
  },
  stepLabel: {
    justifyContent: 'center',
  },
  labelContainer: {
    width: 'auto',
  },
});



