import { WithStyles } from '@material-ui/core/styles';
import { TPropsFromRedux } from './Redux';
import { styles } from './Styles';

export interface Props extends WithStyles<typeof styles> {
    responsive?: boolean;
}

export interface IAppBarState {
    anchorEl: HTMLButtonElement | null;
}

export interface IHideOnScrollProps {
    window?: () => Window;
    children?: React.ReactElement;
}

export type TSelectLanguageProps = Props & TPropsFromRedux;