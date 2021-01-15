import React from 'react';

import { withRouter } from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Brightness6SharpIcon from '@material-ui/icons/Brightness6Sharp';
import BrightnessHighSharpIcon from '@material-ui/icons/BrightnessHighSharp';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from 'next/link';
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
    }

    handleTheme = () => {
        this.props.actions.changeTheme(!this.props.theme);
        console.log(this.props.theme);
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
                                <Grid className={classes.hiddenMenu} item xs={2}>
                                    <Button
                                        className={classes.iconLink}
                                        onClick={this.handleDrawerToggle}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </Button>
                                </Grid>
                                <Grid classes={{ root: classes.hiddenMenu, item: pathname[2] == undefined ? classes.activeMenu : undefined, }} xs={2} item>
                                    <Link href="/">
                                        <Button
                                            className={classes.iconLink}
                                            color="inherit"
                                        >
                                            <HomeIcon />
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid className={classes.changeTheme} item xs={2}>
                                    <Button
                                        className={classes.iconLink}
                                        onClick={this.handleTheme}
                                        color="inherit"
                                    >
                                        {this.props.theme ? <BrightnessHighSharpIcon /> : <Brightness6SharpIcon />}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Hidden smDown>
                            <Grid className={classes.changeTheme} item xs={1}>
                                <Button
                                    className={classes.iconLink}
                                    onClick={this.handleTheme}
                                    color="inherit"
                                >
                                    {this.props.theme ? <BrightnessHighSharpIcon /> : <Brightness6SharpIcon />}
                                </Button>
                            </Grid>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}

export default connector(withStyles(styles)(withRouter(HeaderAppBar)));
