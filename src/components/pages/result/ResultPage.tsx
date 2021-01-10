import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import { connector } from './Redux';
import Template from '../../root/contents/_template';
import Main from '../../root/contents/_main';

import type { TIndexProps } from './Types';
import { styles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

class Info extends React.Component<TIndexProps>{

    constructor(props: TIndexProps) {
        super(props);
    }

    render() {
        const { classes, children } = this.props;

        return (
            <Template>
                <Main>
                    <Typography className={classes.headLine} variant="h3" align="center"> <MenuBookIcon className={classes.icon} fontSize="large"/>ALGORİTMAHANE</Typography>
                    <Grid justify="center" container>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                {children}
                            </CardContent>
                        </Card>
                    </Grid>
                </Main>
            </Template>
        );
    }
}

export default connector(withStyles(styles)(Info));
