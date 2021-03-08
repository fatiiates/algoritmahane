import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ButtonBase from '@material-ui/core/ButtonBase';

import { connector } from './Redux';
import { TDrawerProps, IDrawerState } from './Types';
import { styles } from './Styles';
import Link from 'next/link';
import { Avatar } from '@material-ui/core';

class MyDrawer extends React.Component<TDrawerProps, IDrawerState>{
    constructor(props: TDrawerProps) {
        super(props);

        this.state = {
            openDrawerDropDown: 0,
        }

        this.handleDrawerDropDown = this.handleDrawerDropDown.bind(this);
    }

    handleDrawerDropDown = (event): void => {
        this.setState({
            openDrawerDropDown: this.state.openDrawerDropDown != event.currentTarget.dataset.drop ? event.currentTarget.dataset.drop : 0
        });
    }

    handleDrawerToggle = (): void => {
        this.props.actions.changeDrawer(!this.props.openDrawer);
    }

    render() {

        const { openDrawerDropDown } = this.state;
        const { classes, window, openDrawer, algorithms, lang } = this.props;

        const container = window !== undefined ? () => window().document.body : undefined;

        const icons = {
            search: <SearchIcon/>,
            sort: <SortIcon/>
        };

        const { drawerLang } = require(`@constants/lang/${lang}.tsx`);
        console.log(lang);

        const renderDrawer = (
            <div>
                {
                    openDrawer &&
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerToggle}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                }
                <div className={classes.toolbar}>
                    <Link href="/">
                        <ButtonBase component={Typography} variant="h6" className={classes.drawerTitle}>
                            <Avatar src="/static/icon.png" />
                            {drawerLang.organizationName}
                        </ButtonBase>
                    </Link>
                </div>
                <Divider />
                <List>
                    {
                        React.Children.toArray(Object.keys(algorithms).map((item, i) => (
                            <React.Fragment>
                                 <ListItem button data-drop={i+1} onClick={this.handleDrawerDropDown}>
                                    <ListItemIcon>
                                        {icons[algorithms[item].icon]}
                                    </ListItemIcon>
                                    <ListItemText primary={algorithms[item].name} />
                                    {openDrawerDropDown == i+1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={openDrawerDropDown == i + 1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {algorithms[item].algorithms.map((algorithm) => (
                                            <Link key={`${algorithm.name}-search-drawer-column`} href={`/info/${algorithm.endPoint}`}>
                                                <ListItem button className={classes.nested}>
                                                    <ListItemText primary={algorithm.name} />
                                                </ListItem>
                                            </Link>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        )))
                    }
                </List>
            </div >
        );

        return (
            <nav className={classes.drawer} >
                <Hidden mdUp >
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor="left"
                        open={openDrawer}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {renderDrawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown >
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {renderDrawer}
                    </Drawer>
                </Hidden>
            </nav>
        );

    }
}

export default connector(withStyles(styles)(MyDrawer));
