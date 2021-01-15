import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';

import { connector } from './Redux';
import { TRandomProps } from './Types';
import { styles } from './Styles';
import { parse } from 'ts-node';

class Random extends React.Component<TRandomProps>{
    minRef: any;
    maxRef: any;
    pieceRef: any;
    constructor(props: TRandomProps) {
        super(props);
        this.randomDatasetOnChange = this.randomDatasetOnChange.bind(this);
    }

    //setMaxRefValue = (e) => this.maxRef = e.target.value;
    //setPieceRefValue = (e) => this.pieceRef = e.target.value;

    randomDatasetOnChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => {
        const re = /^-?\d{1,7}?$/;

        if (event.target.value.length < 1)
            this.props.actions.changeRandomDataSet(null, key);
        else if (!re.exec(event.target.value))
            this.props.actions.changeRandomDataSet('', key);
        else
            this.props.actions.changeRandomDataSet( event.target.value, key);
    }

    componentWillUnmount = async () => {
        if (this.props.randomDataset == '')
            this.props.actions.changeRandomDataSet(null);
    }

    render() {
        const { classes } = this.props;
        const { MAX, MIN, PIECE } = this.props.randomDataset;
        
        return (
            <React.Fragment >
                <Typography variant="h5" align="center">
                    Veri setinizin özelliklerini belirleyiniz.
                </Typography>
                <TextField
                    label="Sayı aralığı - Min"
                    variant="outlined"
                    className={classes.textField}
                    helperText=""
                    error={parseInt(MAX) <= parseInt(MIN) || MIN == ''}
                    onChange={e => this.randomDatasetOnChange(e, 'MIN')}
                />
                <TextField
                    label="Sayı aralığı - Max"
                    variant="outlined"
                    className={classes.textField}
                    helperText=""
                    error={parseInt(MAX) <= parseInt(MIN) || MAX == ''}
                    onChange={e => this.randomDatasetOnChange(e, 'MAX')}
                />
                <TextField
                    label="Üretilecek Adet"
                    variant="outlined"
                    className={classes.textField}
                    error={(PIECE != null && PIECE < 2) || PIECE == ''}
                    onChange={e => this.randomDatasetOnChange(e, 'PIECE')}
                />         
            </React.Fragment>
        );
    };
}

export default connector(withStyles(styles)(Random));