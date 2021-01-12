import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography } from '@material-ui/core';

import { connector } from './Redux';
import { TFormProps } from './Types';
import { styles } from './Styles';

class DataSet extends React.Component<TFormProps> {
    constructor(props: TFormProps) {
        super(props)
    }

    onChange(event) {
        if (event.target.value.match("phoneRegex")) {
            this.setState({ errorText: '' })
        } else {
            this.setState({ errorText: 'Invalid format: ###-###-####' })
        }
    }
    render() {

        const { SPECIAL_DATASET, RANDOM_DATASET } = this.props.dataset;

        return (
            <Grid xs={8} item>
                <Typography variant="h5" align="center">
                    Veri setinizi aşağıdaki metin kutusuna giriniz.
                    </Typography>
                <TextField
                    label="Veri seti"
                    variant="outlined"
                    placeholder="1.5, 2, 3.2, 5.6, 7"
                    name="dataset"
                    rows={6}
                    multiline
                    helperText={SPECIAL_DATASET.errorText}
                    error={SPECIAL_DATASET.errorText != ""}
                    fullWidth
                />
            </Grid>
        )
    }
}

export default connector(withStyles(styles)(DataSet));

