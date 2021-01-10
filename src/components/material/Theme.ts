import { createMuiTheme, Theme } from '@material-ui/core/styles';

// Create a theme instance.
const theme: Theme = createMuiTheme({
    overrides: {
        MuiDialog: {
            root: {
                wordBreak: 'break-all',
            },
        },
    },
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        type: 'light',
        primary: {
            light: '#63628B',
            main: '#3C3B6E',
            dark: '#2A294D',
        },
        secondary: {
            light: '#9F3E72',
            main: '#880E4F',
            dark: '#5F0937',
        },
        error: {
            light: '#E64B7B',
            main: '#E01E5A',
            dark: '#9C153E',
        },
        warning: {
            light: '#FFAC33',
            main: '#FF9800',
            dark: '#B26A00',
        },
        info: {
            light: '#4DABF5',
            main: '#2196F3',
            dark: '#1769AA',
        },
        success: {
            light: '#6AE18B',
            main: '#45DA6F',
            dark: '#30984D',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
    },
});

export default theme;
