import React from 'react';

export interface IStepperProps extends IStepperIconProps {
    steps: Array<string>;
    getStepContent: (step: number) => React.ReactNode;
    stepQueue: Array<number>;
    nonLinear?: boolean;
    orientation: "horizontal" | "vertical";
    finishStep?: number;
    lastSentence: React.ReactNode;
    finishWord?: string;
    onChangeBack?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeNext?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeReset?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IStepperIconProps {
    icons?: { [index: string]: React.ReactElement };
    activeStep?: number;
}

export interface IStepperState {
    activeStep: number;
}

