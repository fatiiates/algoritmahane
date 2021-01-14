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
import { Button, Card, CardContent, FormControlLabel, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DatasetForm from './form/dataset';

class Index extends React.Component<TIndexProps>{

    constructor(props: TIndexProps) {
        super(props);
    }

    handleSelectedAlgorithm = async (algorithm: any) => {

        this.props.actions.changeSelectedAlgorithm(algorithm);
        this.props.actions.changeStepperActiveStep(this.props.activeStep + 1);

    }

    handleOut = async () => {

        const self = this;
        let data = null;

        switch (this.props.switchDataset) {
            case true: console.log(this.props.specialDataset);
                if (this.props.specialDataset == null || this.props.specialDataset.length == 0)
                    return 0;

                if (this.props.selectedAlgorithm.endPoint.split('/')[0] == 'search')
                    if (this.props.searched.length == null || this.props.searched.length == 0)
                        return 0;
                    else {
                        data = {
                            array: this.props.specialDataset,
                            searched: this.props.searched
                        }
                        break;
                    }

                data = {
                    array: this.props.specialDataset,
                }

                break;
            case false: console.log(2);
                if (this.props.randomDataset.MIN == null || this.props.randomDataset.MIN == 0)
                    return 0;

                if (this.props.randomDataset.MAX == null || this.props.randomDataset.MAX == 0)
                    return 0;

                if (this.props.randomDataset.PIECE == null || this.props.randomDataset.PIECE == 0)
                    return 0;

                const { MIN, MAX, PIECE } = this.props.randomDataset;

                let numbers: Array<number> = Array.from(Array(PIECE).keys()).map(() => Math.floor(Math.random() * (MAX - MIN) + MIN));

                if (this.props.selectedAlgorithm.endPoint.split('/')[0] == 'search')
                    if (this.props.searched.length == null || this.props.searched.length == 0)
                        return 0;
                    else {

                        data = {
                            array: numbers,
                            searched: this.props.searched
                        }
                        break;
                    }
                data = {
                    array: numbers
                }

                break;
            default:
                data = null;
                break;
        }

        if (data == null)
            return 0;

        await axios({
            method: 'post',
            url: 'http://localhost:3000/api/' + this.props.selectedAlgorithm.endPoint,
            data: data
        })
            .then(async function (res) {
                self.props.actions.changeOut(res.data.result);
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
        this.props.actions.changeSwitchDataset(!this.props.switchDataset);
    }

    render() {
        const { classes, algorithms, selectedAlgorithm, out } = this.props;

        const steps = [
            'Algoritmanızı seçiniz.',
            'Veri seti giriniz/oluşturunuz.',
            'Değerler'
        ];

        const getStepContent = (step: any) => {

            switch (step) {
                case 0:
                    return (
                        <Main>
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
                                                                        onClick={e => this.handleSelectedAlgorithm(algorithm)}
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
                                                                        onClick={e => this.handleSelectedAlgorithm(algorithm)}
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
                        </Main>
                    );
                case 1:
                    return (
                        <div>
                            <Main>
                                {
                                    selectedAlgorithm ?
                                        <div>
                                            <Typography variant="h5" align="center">
                                                Hmm. Bu bir {selectedAlgorithm.endPoint.split('/')[0] == 'search' ? 'arama' : 'sıralama'} algoritması. Güzel seçim!
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

                                                            </CardContent>
                                                        </Card>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography variant="h6">
                                                                    # Kısaca {selectedAlgorithm.name}
                                                                </Typography>
                                                                <Typography>
                                                                    &emsp;{selectedAlgorithm.explain}
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography variant="h6">
                                                                    # Veri seti kısıtlamaları
                                                            </Typography>
                                                                {
                                                                    selectedAlgorithm.constraints.concat([
                                                                        "Her veri ','(virgül) ile ayrılmalıdır.",
                                                                        "Ondalıklı veriler için '.'(nokta) ayracı kullanılmalıdır."
                                                                    ]).map((item, i) => (
                                                                        <Typography key={`constraint-${i}`}>
                                                                            &emsp;{i + 1} - {item}
                                                                        </Typography>
                                                                    ))
                                                                }
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
                                                                                name="checked"
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
                                                                <DatasetForm />
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
                                                                        name="button"
                                                                        onClick={this.handleOut}
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
                                        </div>
                                        :
                                        <Grid justify="center" container>
                                            Seçili bir algoritma bulunamadı. Lütfen geri gidin ve bir algoritma seçin.
                                        </Grid>
                                }
                            </Main>
                        </div>
                    );
                case 2:
                    const { dataset,
                        index,
                        numberOfTransactions,
                        performance,
                        sortedDataset
                    } = out;

                    return (
                        <Main>
                            <Grid justify="center" container>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <Grid className={classes.resultGrid} justify="center" container>
                                            <Typography className={classes.resultTitle} variant="h3" align="center">
                                                Başarılı! Değerler elimize ulaştı.
                                            </Typography>
                                            <TableContainer component={Paper}>
                                                <Table aria-label="caption table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><strong>Öznitelik</strong></TableCell>
                                                            <TableCell align="center"><strong>Değerler</strong></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>                                         
                                                        {performance && <TableRow >
                                                            <TableCell><UpdateRoundedIcon /> Performans</TableCell>
                                                            <TableCell align="center">{`${(performance * 1000).toFixed(3)} milisaniye içerisinde gerçekleştirildi.`}</TableCell>
                                                        </TableRow>}
                                                        {numberOfTransactions && <TableRow >
                                                            <TableCell><SettingsEthernetIcon /> İşlem Sayısı</TableCell>
                                                            <TableCell align="center">Tam olarak {numberOfTransactions} işlem gerçekleştirildi.</TableCell>
                                                        </TableRow>}
                                                        {index && <TableRow >
                                                            <TableCell><UpdateRoundedIcon /> Arama Sonucu</TableCell>
                                                            <TableCell align="center">Aradığınız eleman {index}. indekste bulunuyor</TableCell>
                                                        </TableRow>}
                                                        {sortedDataset && <TableRow >
                                                            <TableCell><UpdateRoundedIcon /> Sıralanmış Veri Seti</TableCell>
                                                            <TableCell align="center">{sortedDataset}</TableCell>
                                                        </TableRow>}
                                                        {dataset && <TableRow >
                                                            <TableCell><UpdateRoundedIcon /> Girilen veri seti</TableCell>
                                                            <TableCell align="center">{dataset}</TableCell>
                                                        </TableRow>}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Main>
                    );
                default:
                    return 'Adım bulunamadı.';
            }
        }

        return (
            <Template>
                {
                    algorithms &&
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
                }

            </Template>
        );
    }
}

export default connector(withStyles(styles)(Index));
