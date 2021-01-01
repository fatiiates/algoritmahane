import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
import { TPropsFromRedux } from './Redux';

export interface Props extends WithStyles<typeof styles> {
    children?: React.ReactNode;
}

export interface IPanelState {
    value: number;
}

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export type TPanelProps = TPropsFromRedux & Props
