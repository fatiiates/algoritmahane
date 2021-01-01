import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const stepIconStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: theme.palette.background.paper,
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundColor: theme.palette.secondary.main,
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      backgroundColor: theme.palette.secondary.main,
      zIndex: 1,
      fontSize: 18,
    },
  })
);

export const stepStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ccc',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: theme.palette.secondary.main,
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      marginLeft: theme.spacing(-.25),
      color: theme.palette.secondary.main,
      zIndex: 1,
      fontSize: 18,
    },
  })
);

export const connectorStyles = (theme: Theme) => createStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  line: {
    borderColor: '#bdbdbd',
    borderWidth: 3,
    borderRadius: 1,
  },
  active: {
    '& $line': {
      borderColor: theme.palette.secondary.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.secondary.main,
    },
  },
});

export const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
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
    marginLeft: theme.spacing(.375),
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
    margin: theme.spacing(0, 0, 0, .375),
    borderWidth: 3,
  },
  title: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  linearProgress: {
    backgroundColor: theme.palette.secondary.main,
  },
  stepLabel: {
    justifyContent: 'center',
  },
  labelContainer: {
    width: 'auto',
  },
});



