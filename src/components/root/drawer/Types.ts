import { WithStyles } from '@material-ui/core/styles';
import { TPropsFromRedux } from './Redux';
import { styles } from './Styles';

export interface Props extends WithStyles<typeof styles> {
    openDrawer: boolean;
    window?: Function;
}

export interface IDrawerState {
    openDrawerDropDown: number;
}

export type TDrawerProps = TPropsFromRedux & Props;