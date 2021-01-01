import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Template from '../../root/contents/_template';
import Main from '../../root/contents/_main';
import Stepper from '../../main/stepper';

import { connector } from './Redux';
import type { TIndexProps } from './Types';
import { styles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import TabPanel from './tabpanel';

class Index extends React.Component<TIndexProps>{

    constructor(props: TIndexProps) {
        super(props);
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
                                <Grid container>
                                    <Card className={classes.cardRoot}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid xs item>
                                                    <Grid justify="center" container>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent>
                                                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                                    {`${algorithms.search.length} adet algoritma`}
                                                                </Typography>
                                                                {algorithms.search.map((algorithm) => (
                                                                    <Typography key={`algorithms-search-${algorithm.endPoint}`} variant="h4">
                                                                        {algorithm.name}
                                                                    </Typography>
                                                                ))}
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs item>
                                                    <Grid justify="center" container>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent>
                                                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                                    {`${algorithms.sort.length} adet algoritma`}
                                                                </Typography>
                                                                {algorithms.sort.map((algorithm) => (
                                                                    <Typography key={`algorithms-sort-${algorithm.endPoint}`} variant="h4" >
                                                                        {algorithm.name}
                                                                    </Typography>
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
                        orientation="horizontal"
                        lastSentence="İşlemler başarılı soru oluşturuldu."
                        finishWord="Oluştur"
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
