import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '../../drawer';
import HeaderAppBar from '../../header/appbar';

import { connector } from './Redux';
import { TTemplateProps } from './Types';
import { styles } from './Styles';

class Template extends React.Component<TTemplateProps> {
    constructor(props: TTemplateProps) {
        super(props);

    }

    render() {

        const { classes, children } = this.props;

        return (
            <Box className={classes.root}>
                <CssBaseline />
                <HeaderAppBar />
                <Drawer />
                {children}
            </Box>
        );
    }
}

export default connector(withStyles(styles)(Template));
