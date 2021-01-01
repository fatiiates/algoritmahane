import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import StepConnector from '@material-ui/core/StepConnector';
import DefaultStepper from '../_default';

import { stepIconStyles, styles, connectorStyles, stepStyles } from './Styles';
import { IStepperSecondaryProps, IStepIconSecondaryProps } from './Types';
import { Check } from '@material-ui/icons';

const Connector = withStyles(connectorStyles)(StepConnector);

function StepIcon(props: IStepIconSecondaryProps) {

    const { active, completed, icons, activeStep, icon } = props;
    const classes = icons ? stepIconStyles() : stepStyles();
    const number = isNaN(Number(icon)) ? activeStep + 1 : Number(icon);
    
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons ?
                icons[number] : completed ?
                    <Check className={classes.completed} /> : <div className={classes.circle} />
            }
        </div>
    );
}

class Stepper extends React.Component<IStepperSecondaryProps>{
    constructor(props: IStepperSecondaryProps) {
        super(props);
    }

    render() {

        return (
            <DefaultStepper
                Connector={Connector}
                StepIcon={StepIcon}
                {...this.props}
            />
        );
    };
}

export default withStyles(styles)(Stepper);