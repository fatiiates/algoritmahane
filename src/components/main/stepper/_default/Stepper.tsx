import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import MobileStepper from '@material-ui/core/MobileStepper';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import { TStepperProps, IStepperState } from './Types';
import { connector } from './Redux';

class DefaultStepper extends React.Component<TStepperProps, IStepperState>{
    constructor(props: TStepperProps) {
        super(props);
        this.state = {
            activeStep: 0,
        };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onChangeNext != undefined)
            this.props.onChangeNext(event);
        this.setState({ activeStep: this.state.activeStep + 1 });
    };

    handleStep = (step: number) => () => {
        this.setState({ activeStep: step });
    };

    handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onChangeBack != undefined)
            this.props.onChangeBack(event);
        this.setState({ activeStep: this.state.activeStep - 1 });
    };

    handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onChangeReset != undefined)
            this.props.onChangeReset(event);
        this.setState({ activeStep: 0 });
    };
    componentDidMount(){
        console.log(2);
    }
    render() {
        const {
            classes,
            finishStep,
            finishWord,
            lastSentence,
            steps,
            getStepContent,
            nonLinear,
            orientation,
            stepQueue,
            StepIcon,
            Connector,
            icons
        } = this.props;

        const { activeStep } = this.state;

        const { stepperLang } = require(`../../../../constants/lang/${this.props.lang}.ts`);
        

        const nextButton = (
            <React.Fragment>
                <Hidden xsDown>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={this.handleNext}
                    >
                        {activeStep === steps.length - 1 ? (finishWord ? finishWord : stepperLang.doneButton) : stepperLang.nextButton}
                    </Button>
                </Hidden>
                <Hidden smUp>
                    <Button size="small" onClick={this.handleNext}>
                        {activeStep === steps.length - 1 ? (finishWord ? finishWord : stepperLang.doneButton) : stepperLang.nextButton}
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
                {stepperLang.backButton}
            </Button>
        );

        const resetButton = (
            <Paper>
                {lastSentence}
                <Button onClick={this.handleReset} >
                    {stepperLang.clearButton}
                </Button>
            </Paper>
        );

        const navButton = (
            <div>
                <div>
                    {backButton}
                    {finishStep != activeStep ? nextButton : undefined}
                </div>
            </div>
        );

        const connectorClass = (): string => {
            if (icons)
                if (orientation == "horizontal")
                    return classes.rootConnectorHorizontal;
                else
                    return classes.rootConnectorVertical;
            else
                if (orientation == "horizontal")
                    return classes.rootConnectorWithoutIconHorizontal;
                else
                    return classes.rootConnectorWithoutIconVertical;
        };

        return (
            <div className={classes.root}>
                <Hidden smUp>
                    {activeStep != steps.length ? (
                        <React.Fragment>
                            <div>
                                <Step className={classes.mobileStep} active>
                                    <StepLabel
                                        classes={{ root: classes.stepLabel, labelContainer: classes.labelContainer }}
                                        StepIconComponent={props => icons ?
                                            <StepIcon {...props} activeStep={activeStep} icons={icons} />
                                            : <StepIcon {...props} activeStep={activeStep} />
                                        }
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
                                alternativeLabel={orientation == "horizontal"}
                                activeStep={activeStep}
                                orientation={orientation}
                                connector={Connector ? <Connector className={connectorClass()} /> : undefined}
                                nonLinear={nonLinear}
                            >
                                {steps.map((label, index) => (
                                    <Step key={label}  >
                                        <StepLabel
                                            StepIconComponent={props => icons ?
                                                <StepIcon {...props} activeStep={activeStep} icons={icons} />
                                                : <StepIcon {...props} activeStep={index} />
                                            }
                                        >
                                            {label}
                                        </StepLabel>
                                        {orientation == "vertical" ?
                                            (<StepContent className={icons ? classes.stepContent : classes.stepContentWithoutIcon} >
                                                {getStepContent(stepQueue[index])}
                                                {navButton}
                                            </StepContent>) : undefined
                                        }
                                    </Step>
                                ))}
                            </Stepper>
                            {orientation == "horizontal" ? (
                                <React.Fragment>
                                    {getStepContent(stepQueue[activeStep])}
                                    {navButton}
                                </React.Fragment>
                            ) : undefined}
                        </React.Fragment>
                    }
                </Hidden>
            </div >
        );
    };
}

export default connector(DefaultStepper);