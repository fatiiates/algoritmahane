import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
import { IStepIconProps, IStepperProps } from '../_default/Types';
import { StepIconProps } from '@material-ui/core/StepIcon';

export interface IStepperPrimaryProps extends WithStyles<typeof styles>, IStepperProps{
}

export interface IStepIconPrimaryProps extends StepIconProps, IStepIconProps {
}
