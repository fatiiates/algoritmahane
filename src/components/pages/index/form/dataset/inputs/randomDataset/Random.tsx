import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';

import { connector } from './Redux';
import { TRandomProps } from './Types';
import { styles } from './Styles';

class Random extends React.Component<TRandomProps>{
    minRef: any;
    maxRef: any;
    pieceRef: any;
    constructor(props: TRandomProps) {
        super(props);
        this.randomDatasetOnChange = this.randomDatasetOnChange.bind(this);
    }

    randomDatasetOnChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => {
        const re = /^-?\d{1,7}?$/;

        if (event.target.value.length < 1)
            this.props.actions.changeRandomDataSet(null, key);
        else if (!re.exec(event.target.value))
            this.props.actions.changeRandomDataSet('', key);
        else
            this.props.actions.changeRandomDataSet(event.target.value, key);

    }

    componentWillUnmount = async () => {
        if (this.props.randomDataset == '')
            this.props.actions.changeRandomDataSet(null);
    }

    render() {
        const { classes, lang } = this.props;
        const { MAX, MIN, PIECE } = this.props.randomDataset;

        const { forms } = require(`@constants/lang/${lang}.tsx`);

        return (
            <React.Fragment >
                <Typography variant="h5" align="center">
                    {forms.datasetFormRandomDatasetInput}
                </Typography>
                <TextField
                    label={forms.datasetFormRandomDatasetMinInputPlaceHolder}
                    variant="outlined"
                    className={classes.textField}
                    helperText=""
                    error={parseInt(MAX) <= parseInt(MIN) || MIN == ''}
                    onChange={e => this.randomDatasetOnChange(e, 'MIN')}
                />
                <TextField
                    label={forms.datasetFormRandomDatasetMaxInputPlaceHolder}
                    variant="outlined"
                    className={classes.textField}
                    helperText=""
                    error={parseInt(MAX) <= parseInt(MIN) || MAX == ''}
                    onChange={e => this.randomDatasetOnChange(e, 'MAX')}
                />
                <TextField
                    label={forms.datasetFormRandomDatasetPieceInputPlaceHolder}
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