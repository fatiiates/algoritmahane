import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
import { TPropsFromRedux } from './Redux';

export interface Props extends WithStyles<typeof styles> {
    children?: React.ReactNode;
}

export type TRandomProps = TPropsFromRedux & Props
