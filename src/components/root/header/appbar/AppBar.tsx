import React from 'react';

import { withRouter } from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import { connector } from './Redux';
import { THeaderAppBarProps, IHideOnScrollProps } from './Types';
import { styles } from './Styles';


function HideOnScroll(props: IHideOnScrollProps) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

class HeaderAppBar extends React.Component<THeaderAppBarProps> {

    constructor(props: THeaderAppBarProps) {
        super(props);
    }

    handleDrawerToggle = (): void => {
        this.props.actions.changeDrawer(!this.props.openDrawer);
        console.log(this.props);
    }
    
    render() {

        const { classes, window, router } = this.props;

        var pathname = router.pathname.split('/');

        return (
            <HideOnScroll window={window}>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                >
                    <Toolbar className={classes.toolbar}>
                        <Hidden mdUp>
                            <Grid className={classes.hiddenMenu} container spacing={3}>
                                <Grid className={classes.hiddenMenu} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        onClick={this.handleDrawerToggle}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[2] == undefined ? classes.activeMenu : undefined, }} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        component="a"
                                        href="/"
                                        color="inherit"
                                    >
                                        <HomeIcon />
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[1] == 'ara' ? classes.activeMenu : undefined, }} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        component="a"
                                        href="/ara"
                                        color="inherit"
                                    >
                                        <SearchIcon />
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[1] == 'mesajlar' ? classes.activeMenu : undefined, }} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        component="a"
                                        href="/mesajlar"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={11} color="error">
                                            <QuestionAnswerIcon />
                                        </Badge>
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[1] == 'bildirimler' ? classes.activeMenu : undefined, }} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        component="a"
                                        href="/bildirimler"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={11} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[1] == 'ayarlar' ? classes.activeMenu : undefined, }} item xs>
                                    <Button
                                        className={classes.iconLink}
                                        component="a"
                                        href="/hesap"
                                        color="inherit"
                                    >
                                        <AccountCircleIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Hidden>
                        {/*<Hidden smDown>
                            <Button
                                aria-haspopup="true"
                                component="a"
                                href="/hesap"
                                color="inherit"
                            >
                                <Typography className={classes.avatarTitle} noWrap>
                                    Fatih Ateş
                                </Typography>
                                <Avatar alt="Fatih Ateş" src="/static/img/profile.png" />
                            </Button>
                        </Hidden>*/}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}

export default connector(withStyles(styles)(withRouter(HeaderAppBar)));
