import { WithStyles } from '@material-ui/core/styles';
import { WithRouterProps } from 'next/dist/client/with-router';
import { TPropsFromRedux } from './Redux';
import { styles } from './Styles';
import { Cookies } from 'react-cookie';
export interface Props extends WithRouterProps, WithStyles<typeof styles>, IHideOnScrollProps {
    cookies: Cookies;
}

export interface IHideOnScrollProps {
    window?: () => Window;
    children?: React.ReactElement;
}

export type THeaderAppBarProps = Props & TPropsFromRedux;