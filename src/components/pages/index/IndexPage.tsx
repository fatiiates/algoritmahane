import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SortIcon from '@material-ui/icons/Sort';

import Template from '../../root/contents/_template';
import Main from '../../root/contents/_main';
import Stepper from './stepper';

import { connector } from './Redux';
import type { TIndexProps } from './Types';
import { styles } from './Styles';
import { Button, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import TabPanel from './tabpanel';
import { Search } from '@material-ui/icons';


class Index extends React.Component<TIndexProps>{

    constructor(props: TIndexProps) {
        super(props);
    }

    handleNext = () => {
        this.props.actions.changeStepperActiveStep(this.props.activeStep + 1);
    }

    render() {
        const { classes, children, algorithms } = this.props;

        const steps = [
            'Algoritmanızı seçiniz.',
            'Veri seti giriniz/oluşturunuz.'
        ];
        
        const getStepContent = (step: any) => {
            switch (step) {
                case 0:
                    return (
                        <Main>
                            {
                                algorithms &&
                                <Grid justify="center" container>
                                    <Card className={classes.cardRoot}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid xs={12} md={6} item>
                                                    <Grid justify="center" container>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                                    <Search className={classes.icon} />{`${algorithms.search.length} adet arama algoritması bulundu.`}
                                                                </Typography>
                                                                {algorithms.search.map((algorithm) => (
                                                                    <Grid
                                                                        key={`algorithms-search-${algorithm.endPoint}`}
                                                                        className={classes.buttonGrid}
                                                                    >
                                                                        <Button
                                                                            variant="outlined"
                                                                            color="primary"
                                                                            endIcon={<TrendingFlatIcon />}
                                                                            onClick={this.handleNext}
                                                                        >
                                                                            {algorithm.name}
                                                                        </Button>
                                                                    </Grid>
                                                                ))}
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={12} md={6} item>
                                                    <Grid justify="center" container>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                                    <SortIcon className={classes.icon} />{`${algorithms.sort.length} adet sıralama algoritması bulundu.`}
                                                                </Typography>
                                                                {algorithms.sort.map((algorithm) => (
                                                                    <Grid
                                                                        key={`algorithms-sort-${algorithm.endPoint}`}
                                                                        className={classes.buttonGrid}
                                                                    >
                                                                        <Button
                                                                            variant="outlined"
                                                                            color="secondary"
                                                                            endIcon={<TrendingFlatIcon />}
                                                                            onClick={this.handleNext}
                                                                        >
                                                                            {algorithm.name}
                                                                        </Button>
                                                                    </Grid>
                                                                ))}
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            }
                            {/*<TabPanel></TabPanel>*/}
                        </Main>
                    );
                case 1:
                    return (
                        "2bu bir test yazısı"
                    );
                default:
                    return 'Adım bulunamadı.';
            }
        }


        return (
            <Template>
                <Main>
                    <Typography variant="h3">
                        SIRALA, ARA
                    </Typography>
                    <Stepper
                        steps={steps}
                        stepQueue={Array.from(Array(steps.length + 1).keys())}
                        getStepContent={getStepContent}
                    />
                </Main>
            </Template>
        );
    }
}

export default connector(withStyles(styles)(Index));
