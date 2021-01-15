import React from 'react';

import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { connector } from './Redux';
import { TMainPProps } from './Types';
import { styles } from './Styles';
import { darkTheme } from '../../../material/Theme';

class Main extends React.Component<TMainPProps>{
    constructor(props: TMainPProps) {
        super(props);
    }

    render() {

        const { classes, children, mainHeader } = this.props;

        return (
            <ThemeProvider theme={darkTheme}>
                <main className={classes.content} >
                    <div className={classes.drawerHeader} />
                    {mainHeader}
                    <Grid container justify="center" className={classes.grow} spacing={3}>
                        {children}
                    </Grid>
                </main>
            </ThemeProvider>
        );
    }
}

export default connector(withStyles(styles)(Main));
