import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import MobileStepper from '@material-ui/core/MobileStepper';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import { TStepperProps } from './Types';
import { styles } from './Styles';
import { withStyles } from '@material-ui/core';
import { connector } from './Redux';

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
                    <Button size="small" onClick={this.handleNext}>
                        {activeStep === steps.length - 1 ? 'Çalıştır' : 'İleri'}
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
                                    >
                                        {steps[activeStep]}
                                    </StepLabel>
                                </Step>
                                {getStepContent(stepQueue[activeStep])}
                            </div>
                            <MobileStepper
                                variant="progress"
                                steps={steps.length + 1}
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