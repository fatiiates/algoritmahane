import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
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
    borderColor: '#eaeaf0',
    margin: theme.spacing(0, 0, 0, 3),
    borderWidth: 3,
  },
  stepContentWithoutIcon: {
    borderColor: '#eaeaf0',
    margin: theme.spacing(1, 0, 0, .375),
    borderWidth: 3,
  },
  title: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  linearProgress: {
    backgroundColor: theme.palette.background.default,
  },
  stepLabel: {
    justifyContent: 'center',
  },
  labelContainer: {
    width: 'auto',
  },
});

