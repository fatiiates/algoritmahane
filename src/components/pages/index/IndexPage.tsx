import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SortIcon from '@material-ui/icons/Sort';

import Template from '@components/root/contents/_template';
import Main from '@components/root/contents/_main';
import Stepper from './stepper';
import Link from 'next/link';

import { connector } from './Redux';
import type { TIndexProps } from './Types';
import { styles } from './Styles';
import { Box, Button, Card, CardContent, FormControlLabel, Grid, Hidden, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import StorageIcon from '@material-ui/icons/Storage';
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
            case true:
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
                    locale: this.props.lang
                }

                break;
            case false:

                if (this.props.randomDataset.MIN == null)
                    return 0;

                if (this.props.randomDataset.MAX == null)
                    return 0;

                if (this.props.randomDataset.PIECE == null || this.props.randomDataset.PIECE == 0)
                    return 0;
                const { MIN, MAX, PIECE } = this.props.randomDataset;

                let numbers = Array.from(Array(parseInt(PIECE)).keys()).map(
                    () => Math.floor(Math.random() * (parseInt(MAX) - parseInt(MIN) + 1) + parseInt(MIN))).toString();

                if (this.props.selectedAlgorithm.endPoint.split('/')[0] == 'search')
                    if (this.props.searched.length == null || this.props.searched.length == 0)
                        return 0;
                    else {
                        data = {
                            array: numbers,
                            searched: this.props.searched,
                            locale: this.props.lang
                        }
                        break;
                    }
                data = {
                    array: numbers,
                    locale: this.props.lang
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
            url: '/api/' + this.props.selectedAlgorithm.endPoint,
            data: data,
            baseURL: process.env.basePath
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

    handleReset = () => {
        this.props.actions.changeStepperActiveStep(0);
    }

    changeSwitchDataset = async () => {
        this.props.actions.changeSwitchDataset(!this.props.switchDataset);
    }

    render() {
        const { classes, algorithms, selectedAlgorithm, out, lang } = this.props;

        const { indexPage } = require(`@constants/lang/${lang}.tsx`);

        const steps = indexPage.stepperSteps;

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
                                                                <Search className={classes.icon} />{`${algorithms.search.algorithms.length} ${indexPage.foundedSearchAlgorithm}`}&emsp;
                                                            </Typography>
                                                            {algorithms.search.algorithms.map((algorithm) => (
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
                                                                <SortIcon className={classes.icon} />{`${algorithms.sort.algorithms.length} ${indexPage.foundedSortAlgorithm}`}
                                                            </Typography>
                                                            {algorithms.sort.algorithms.map((algorithm) => (
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
                                        <Box>
                                            <Typography variant="h5" align="center">
                                                Hmm. {indexPage.thatIs + ' ' + (selectedAlgorithm.endPoint.split('/')[0] == 'search' ? indexPage.search : indexPage.sort) + '' + indexPage.niceChoice} 
                                            </Typography>
                                            <Grid justify="center" container>
                                                <Card className={classes.cardRoot}>
                                                    <Grid className={classes.infoGrid}>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography variant="h6">
                                                                    {indexPage.information}
                                                                </Typography>
                                                                <Typography>
                                                                    &emsp;{indexPage.choosenAlgorithm + ' ' + selectedAlgorithm.name}
                                                                </Typography>

                                                            </CardContent>
                                                        </Card>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography variant="h6">
                                                                    {indexPage.briefly + ' ' + selectedAlgorithm.name}
                                                                </Typography>
                                                                <Typography>
                                                                    &emsp;{selectedAlgorithm.explain}
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                        <Card className={classes.cardDisplayContents}>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography variant="h6">
                                                                {indexPage.datasetConstraints}
                                                            </Typography>
                                                                {
                                                                    selectedAlgorithm.constraints.concat(indexPage.defaultConstraints).map((item, i) => (
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
                                                                    {indexPage.randomDataset}
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
                                                                        {indexPage.specialDataset}
                                                                </Typography>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid justify="center" container>
                                                                <DatasetForm />
                                                                <Hidden smDown>
                                                                    <Grid>
                                                                        <Button
                                                                            color="default"
                                                                            startIcon={<KeyboardBackspaceIcon />}
                                                                            onClick={this.handleBack}
                                                                        >
                                                                            {indexPage.backButton}
                                                                        </Button>
                                                                        <Button
                                                                            variant="contained"
                                                                            className={classes.resultButton}
                                                                            endIcon={<DoneOutlineIcon />}
                                                                            name="button"
                                                                            onClick={this.handleOut}
                                                                        >
                                                                            {indexPage.resultsButton}
                                                                        </Button>
                                                                        <Link href={`/info/${selectedAlgorithm.endPoint}`}>
                                                                            <Button
                                                                                variant="contained"
                                                                                className={classes.infoButton}
                                                                                endIcon={<InfoIcon />}
                                                                            >
                                                                                {indexPage.moreInformation}
                                                                            </Button>
                                                                        </Link>
                                                                    </Grid>
                                                                </Hidden>
                                                                <Hidden mdUp>
                                                                    <Grid justify="center" container>
                                                                        <Button
                                                                            variant="contained"
                                                                            className={classes.resultButton}
                                                                            endIcon={<DoneOutlineIcon />}
                                                                            name="button"
                                                                            onClick={this.handleOut}
                                                                        >
                                                                            {indexPage.resultsButton}
                                                                        </Button>
                                                                    </Grid>
                                                                    <Grid justify="center" container>
                                                                        <Link href={`/info/${selectedAlgorithm.endPoint}`}>
                                                                            <Button
                                                                                variant="contained"
                                                                                className={classes.infoButton}
                                                                                endIcon={<InfoIcon />}
                                                                            >
                                                                                {indexPage.moreInformation}
                                                                            </Button>
                                                                        </Link>
                                                                    </Grid>
                                                                    <Grid justify="center" container>
                                                                        <Button
                                                                            color="default"
                                                                            startIcon={<KeyboardBackspaceIcon />}
                                                                            onClick={this.handleBack}
                                                                            className={classes.backButton}
                                                                        >
                                                                            {indexPage.backButton}
                                                                        </Button>
                                                                    </Grid>
                                                                </Hidden>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </Grid>
                                        </Box>
                                        :
                                        <Grid justify="center" container>
                                            {indexPage.selectedAlgorithmIsNone}
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
                                            <Typography className={classes.resultTitle} variant="h4" align="center">
                                                {indexPage.success}
                                            </Typography>
                                            <TableContainer component={Paper}>
                                                <Table aria-label="caption table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><strong>{indexPage.attribute}</strong></TableCell>
                                                            <TableCell align="center"><strong>{indexPage.results}</strong></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {performance && <TableRow >
                                                            <TableCell><UpdateRoundedIcon /> {indexPage.performance}</TableCell>
                                                            <TableCell align="center">{indexPage.elapsedTime((performance * 1000).toFixed(3))}</TableCell>
                                                        </TableRow>}
                                                        {numberOfTransactions && <TableRow >
                                                            <TableCell><SettingsEthernetIcon /> {indexPage.transactionCount}</TableCell>
                                                            <TableCell align="center">{indexPage.performedProcess(numberOfTransactions)}</TableCell>
                                                        </TableRow>}
                                                        {index && <TableRow >
                                                            <TableCell><FindInPageIcon /> {indexPage.searchResult}</TableCell>
                                                            <TableCell align="center">
                                                                {index != -1 ?
                                                                    indexPage.searchedElementIsExist(index)
                                                                    :
                                                                    indexPage.searchedElementIsNone
                                                                }
                                                            </TableCell>
                                                        </TableRow>}
                                                        {sortedDataset && <TableRow >
                                                            <TableCell><SortIcon /> {indexPage.sortedDataset}</TableCell>
                                                            <TableCell align="center">{sortedDataset}</TableCell>
                                                        </TableRow>}
                                                        {dataset && <TableRow >
                                                            <TableCell><StorageIcon /> {indexPage.usedDataset}</TableCell>
                                                            <TableCell align="center">{dataset}</TableCell>
                                                        </TableRow>}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                        <Hidden smDown>
                                            <Grid>
                                                <Button
                                                    color="default"
                                                    startIcon={<KeyboardBackspaceIcon />}
                                                    onClick={this.handleBack}
                                                >
                                                    {indexPage.backButton}
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    name="button"
                                                    onClick={this.handleReset}
                                                >
                                                    {indexPage.clearButton}
                                                </Button>
                                            </Grid>
                                        </Hidden>
                                        <Hidden mdUp>

                                            <Grid justify="center" container>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    name="button"
                                                    onClick={this.handleReset}
                                                >
                                                    {indexPage.clearButton}
                                                </Button>
                                            </Grid>
                                            <Grid justify="center" container>
                                                <Button
                                                    color="default"
                                                    startIcon={<KeyboardBackspaceIcon />}
                                                    className={classes.backButton}
                                                    onClick={this.handleBack}
                                                >
                                                    {indexPage.backButton}
                                                </Button>
                                            </Grid>
                                        </Hidden>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Main >
                    );
                default:
                    return indexPage.defaultStepInfo;
            }
        }

        return (
            <Template>
                {
                    algorithms &&
                    <Main>
                        <Typography align="center" variant="h2">
                            {indexPage.start}
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
