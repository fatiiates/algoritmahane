import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import StepConnector from '@material-ui/core/StepConnector';
import DefaultStepper from '../_default';

import { stepIconStyles, styles, stepStyles, connectorStyles } from './Styles';
import { IStepperPrimaryProps, IStepIconPrimaryProps } from './Types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

const Connector = withStyles(connectorStyles)(StepConnector);

function StepIcon(props: IStepIconPrimaryProps) {

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
                icons[number] :
                completed ?
                    <SvgIcon className={classes.completed} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />
                    </SvgIcon> :
                    <SvgIcon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="12"></circle>
                        <text className={classes.text} x="12" y="16" textAnchor="middle">{activeStep + 1}</text>
                    </SvgIcon>

            }
        </div>
    );
}

class Stepper extends React.Component<IStepperPrimaryProps>{
    constructor(props: IStepperPrimaryProps) {
        super(props);
    }

    render() {

        const { icons } = this.props;

        return (
            <DefaultStepper
                Connector={icons && Connector}
                StepIcon={StepIcon}
                {...this.props}
            />
        );
    };
}

export default withStyles(styles)(Stepper);