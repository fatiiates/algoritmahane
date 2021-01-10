import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SortIcon from '@material-ui/icons/Sort';

import Template from '../../root/contents/_template';
import Main from '../../root/contents/_main';
import Stepper from './stepper';
import Link from 'next/link';

import { connector } from './Redux';
import type { TIndexProps } from './Types';
import { styles } from './Styles';
import { Button, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from '@material-ui/core';
import TabPanel from './tabpanel';
import { Search } from '@material-ui/icons';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

class Index extends React.Component<TIndexProps>{

    constructor(props: TIndexProps) {
        super(props);
    }

    handleNext = async (algorithm: any) => {
        const self = this;
        await axios({
            method: 'post',
            url: 'http://localhost:3000/api/' + algorithm.endPoint,
            data: {
                array: "1,2",
                searched: "1"
            }
        })
            .then(async function (res) {
                "use strict";
                algorithm['info'] = res.data.result.algorithmInfo;
                console.log(res.data.result);
                self.props.actions.changeSelectedAlgorithm(algorithm);
            })
            .catch(function (err) {
                throw new Error(err.message);
            });

        this.props.actions.changeStepperActiveStep(this.props.activeStep + 1);

    }

    handleBack = () => {
        this.props.actions.changeStepperActiveStep(this.props.activeStep - 1);
    }

    changeSwitchDataset = async () => {

        await this.props.actions.changeSwitchDataset(!this.props.switchDataset)
    }

    render() {
        const { classes, switchDataset, algorithms, selectedAlgorithm } = this.props;

        const steps = [
            'Algoritmanızı seçiniz.',
            'Veri seti giriniz/oluşturunuz.'
        ];

        const datasetInput = () => {
            return switchDataset ?
                <Grid xs={8} item>
                    <Typography variant="h5" align="center">
                        Veri setinizi aşağıdaki metin kutusuna giriniz.
                    </Typography>
                    <TextField
                        label="Veri seti"
                        variant="outlined"
                        placeholder="1.5, 2, 3.2, 5.6, 7"
                        rows={6}
                        multiline
                        fullWidth
                    />
                </Grid>
                :
                <Grid>
                    <Typography variant="h5" align="center">
                        Veri setinizin özelliklerini belirleyiniz.
                    </Typography>
                    <TextField
                        label="Üretilecek sayı"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <TextField
                        label="Sayı aralığı - Min"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <TextField
                        label="Sayı aralığı - Max"
                        variant="outlined"
                        className={classes.textField}
                    />
                </Grid>
        }

        const typeOfAlgorithm = selectedAlgorithm.endPoint.split('/')[0] == 'search' ? 'arama' : 'sıralama';

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
                                                                            onClick={e => this.handleNext(algorithm)}
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
                                                                            onClick={e => this.handleNext(algorithm)}
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
                        </Main>
                    );
                case 1:
                    return (
                        <div>
                            {
                                algorithms &&
                                <Main>
                                    <form action={`/sonuc/${selectedAlgorithm.endPoint}`} method="POST">
                                        <Typography variant="h5" align="center">
                                            Hmm. Bu bir {typeOfAlgorithm} algoritması. Güzel seçim!
                                        </Typography>
                                        <Grid justify="center" container>
                                            <Card className={classes.cardRoot}>
                                                <Grid className={classes.infoGrid}>
                                                    <Card className={classes.cardDisplayContents}>
                                                        <CardContent className={classes.cardContent}>
                                                            <Typography variant="h6">
                                                                # Bilgilendirme
                                                            </Typography>
                                                            <Typography>
                                                                &emsp;Seçtiğiniz algoritma: {selectedAlgorithm.name}
                                                            </Typography>
                                                            <Card className={classes.cardDisplayContents}>
                                                                <CardContent className={classes.cardContent}>
                                                                    <Typography variant="subtitle2">
                                                                        ## Kısaca {selectedAlgorithm.name}
                                                                    </Typography>
                                                                    <Typography>
                                                                        {selectedAlgorithm.info + ""}
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </CardContent>
                                                    </Card>
                                                    <Card className={classes.cardDisplayContents}>
                                                        <CardContent className={classes.cardContent}>
                                                            <Typography variant="h6">
                                                                # Veri seti kısıtlamaları
                                                            </Typography>
                                                            <Typography>
                                                                &emsp;1- Verileriniz gerçel sayılardan oluşmalıdır.<br />
                                                                &emsp;2- Her veri ','(virgül) ile ayrılmalıdır. <br />
                                                                &emsp;3- Ondalıklı veriler için '.'(nokta) ayracı kullanılmalıdır.
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                <Grid justify="center" className={classes.datasetGrid} container>
                                                    <Grid xs={12} item>
                                                        <Grid
                                                            justify="center"
                                                            container
                                                        >
                                                            <Typography
                                                                variant="button"
                                                                align="center"
                                                                onClick={this.changeSwitchDataset}
                                                                className={classes.randomDatasetTyporgraphy}
                                                            >
                                                                Rastgele veri seti
                                                            <FormControlLabel
                                                                    classes={{ root: classes.formControlLabel }}
                                                                    control={
                                                                        <Switch
                                                                            classes={{ switchBase: classes.switchBase, track: classes.switchTrack }}
                                                                            checked={this.props.switchDataset}
                                                                            color="primary"
                                                                        />
                                                                    }
                                                                    label=""
                                                                />
                                                                <Typography onClick={this.changeSwitchDataset} variant="button">
                                                                    Özel veri seti
                                                                </Typography>
                                                            </Typography>
                                                        </Grid>
                                                        <Grid justify="center" container>
                                                            {datasetInput()}
                                                            <Grid>
                                                                <Button
                                                                    color="default"
                                                                    startIcon={<KeyboardBackspaceIcon />}
                                                                    onClick={this.handleBack}
                                                                >
                                                                    Geri
                                                            </Button>
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.resultButton}
                                                                    endIcon={<DoneOutlineIcon />}
                                                                    type="submit"
                                                                >
                                                                    Sonuçları gör
                                                                </Button>
                                                                <Link href={`/info/${selectedAlgorithm.endPoint}`}>
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.infoButton}
                                                                        endIcon={<InfoIcon />}
                                                                    >
                                                                        Daha fazla bilgi
                                                                </Button>
                                                                </Link>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Card>
                                        </Grid>
                                    </form>
                                </Main>
                            }
                        </div>
                    );
                default:
                    return 'Adım bulunamadı.';
            }
        }

        return (
            <Template>
                <Main>
                    <Typography variant="h2">
                        Haydi, başlayalım!
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
