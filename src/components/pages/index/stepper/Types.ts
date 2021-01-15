import { WithStyles } from '@material-ui/core/styles';
import { TPropsFromRedux } from './Redux';
import { styles } from './Styles';
import { StepIconProps } from '@material-ui/core/StepIcon';

export interface IStepperProps extends WithStyles<typeof styles> {
    steps: Array<string>;
    getStepContent: (step: number) => React.ReactNode;
    stepQueue: Array<number>;
    nonLinear?: boolean;
}

export interface IStepIconPrimaryProps extends StepIconProps {
    activeStep: number;
}

export type TStepperProps = TPropsFromRedux & IStepperProps;

