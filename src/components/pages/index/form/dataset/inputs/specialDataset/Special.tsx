import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';

import { connector } from './Redux';
import { TSpecialProps } from './Types';
import { styles } from './Styles';

class Special extends React.Component<TSpecialProps>{
    constructor(props: TSpecialProps) {
        super(props);
    }

    specialDatasetOnChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const re = /^(-?\d{1,7}(\.\d{1,10})?,)+$/;

        if (event.target.value.length < 1)
            this.props.actions.changeSpecialDataSet(null);
        else if (!re.exec(event.target.value + ','))
            this.props.actions.changeSpecialDataSet('');
        else
            this.props.actions.changeSpecialDataSet(event.target.value);
    }

    componentWillUnmount = async () => {

        if (this.props.specialDataset == '')
            this.props.actions.changeSpecialDataSet(null);
    }

    render() {
        const { classes, specialDataset, selectedAlgorithm, lang } = this.props;

        const { forms } = require(`@constants/lang/${lang}.tsx`);

        return (
            <React.Fragment>
                <Typography variant="h5" align="center">
                    {forms.datasetFormSpecialDatasetInput}             
                </Typography>
                <TextField
                    label={forms.datasetFormSpecialDatasetInputPlaceHolder}
                    variant="outlined"
                    placeholder="1.5, 2, 3.2, 5.6, 7"
                    name="array"
                    className={classes.datasetInput}
                    defaultValue={specialDataset}
                    rows={6}
                    onChange={this.specialDatasetOnChange}
                    multiline
                    helperText={
                        <React.Fragment>
                            {
                                React.Children.toArray(forms.datasetFormSpecialDatasetConstraints.concat([selectedAlgorithm.constraints[1]]).map((item, i) => (
                                    <React.Fragment>
                                        {(i + 1) + '- ' + item }<br />
                                    </React.Fragment>
                                    
                                )))
                            }                             
                        </React.Fragment>
                    }
                    error={specialDataset == ''}
                    fullWidth
                />
            </React.Fragment>
        );
    };
}

export default connector(withStyles(styles)(Special));