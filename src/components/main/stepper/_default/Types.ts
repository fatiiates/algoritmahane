import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
import { StepIconProps } from '@material-ui/core/StepIcon';

export interface IStepperProps extends WithStyles<typeof styles>, IIconProps {
    steps: Array<string>;
    getStepContent: (step: number) => React.ReactNode;
    stepQueue: Array<number>;
    nonLinear?: boolean;
    Connector?: React.ElementType;
    StepIcon?: React.ElementType;
    orientation: "horizontal" | "vertical";
    finishStep?: number;
    lastSentence: React.ReactNode;
    finishWord?: string;
    onChangeBack?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeNext?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeReset?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IStepperState {
    activeStep: number;
}

export interface IIconProps {
    icons?: { [index: string]: React.ReactElement };
}

export interface IStepIconProps extends IStepperState, IIconProps, StepIconProps {
}


