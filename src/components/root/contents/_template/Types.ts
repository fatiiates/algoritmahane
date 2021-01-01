import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
import { TPropsFromRedux } from './Redux';

export interface Props extends WithStyles<typeof styles>{
    children?: React.ReactNode;
}

export interface ITemplateState {
    openDrawer: boolean;
}

export type TTemplateProps = TPropsFromRedux & Props
