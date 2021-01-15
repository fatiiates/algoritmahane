import React from 'react';

import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import MobileStepper from '@material-ui/core/MobileStepper';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import { TStepperProps, IStepIconPrimaryProps } from './Types';
import { styles, stepStyles } from './Styles';
import { SvgIcon, withStyles } from '@material-ui/core';
import { connector } from './Redux';

function StepIcon(props: IStepIconPrimaryProps) {

    const { active, completed, activeStep } = props;
    const classes = stepStyles();
    
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            { completed ?
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

class DefaultStepper extends React.Component<TStepperProps>{
    constructor(props: TStepperProps) {
        super(props);
    }

    handleNext = () => {
        this.props.actions.changeStepperActiveStep(this.props.activeStep + 1);

        //this.setState({ activeStep: this.state.activeStep + 1 });
    };

    handleStep = (step: number) => () => {
        this.props.actions.changeStepperActiveStep(step);

        //this.setState({ activeStep: step });
    };

    handleBack = () => {
        this.props.actions.changeStepperActiveStep(this.props.activeStep - 1);

        //this.setState({ activeStep: this.state.activeStep - 1 });
    };

    handleReset = () => {
        this.props.actions.changeStepperActiveStep(0);

        //this.setState({ activeStep: 0 });
    };

    render() {
        const {
            classes,
            steps,
            getStepContent,
            nonLinear,
            stepQueue,
            activeStep
        } = this.props;

        const nextButton = (
            <React.Fragment>
                <Hidden smUp>
                    <Button disabled={activeStep != steps.length - 1} size="small" onClick={this.handleReset}>
                        {activeStep === steps.length - 1 ? 'Sıfırla' : 'İleri'}
                        <KeyboardArrowRight />
                    </Button>
                </Hidden>
            </React.Fragment>
        );

        const backButton = (
            <Button onClick={this.handleBack} disabled={activeStep === 0}>
                <Hidden smUp>
                    <KeyboardArrowLeft />
                </Hidden>
                Geri
            </Button>
        );

        const resetButton = (
            <Paper>
                İşlem tamamlandı.
                <Button onClick={this.handleReset} >
                    Temizle
                </Button>
            </Paper>
        );

        const navButton = (
            <div>
                <div>
                    {backButton}
                    {activeStep != steps.length ? nextButton : undefined}
                </div>
            </div>
        );

        return (
            <div className={classes.root}>
                <Hidden smUp>
                    {activeStep != steps.length ? (
                        <React.Fragment>
                            <div>
                                <Step className={classes.mobileStep} active>
                                    <StepLabel
                                        classes={{ root: classes.stepLabel, labelContainer: classes.labelContainer }}
                                        StepIconComponent={props => <StepIcon {...props} activeStep={activeStep} />
                                        }
                                    >
                                        {steps[activeStep]}
                                    </StepLabel>
                                    {/*<StepLabel
                                        classes={{ root: classes.stepLabel, labelContainer: classes.labelContainer }}
                                    >
                                        {steps[activeStep]}
                                    </StepLabel>*/}
                                </Step>
                                {getStepContent(stepQueue[activeStep])}
                            </div>
                            <MobileStepper
                                variant="progress"
                                steps={steps.length}
                                position="bottom"
                                className={classes.mobileStepper}
                                LinearProgressProps={{ classes: { barColorPrimary: classes.linearProgress } }}
                                activeStep={activeStep}
                                nextButton={nextButton}
                                backButton={backButton}
                            />
                        </React.Fragment>
                    ) : (<div>{resetButton}</div>)
                    }
                </Hidden>
                <Hidden xsDown>
                    {activeStep === steps.length ?
                        resetButton :
                        <React.Fragment>
                            <Stepper
                                alternativeLabel
                                activeStep={activeStep}
                                orientation="horizontal"
                                nonLinear={nonLinear}
                            >
                                {steps.map((label, index) => (
                                    <Step key={label}  >
                                        <StepLabel>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {getStepContent(stepQueue[activeStep])}
                                {navButton}
                            </React.Fragment>
                        </React.Fragment>
                    }
                </Hidden>
            </div >
        );
    };
}

export default connector(withStyles(styles)(DefaultStepper));