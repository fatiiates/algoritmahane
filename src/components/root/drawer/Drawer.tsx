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
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Collapse from '@material-ui/core/Collapse';
import ButtonBase from '@material-ui/core/ButtonBase';

import { connector } from './Redux';
import { TDrawerProps, IDrawerState } from './Types';
import { styles } from './Styles';
import Link from 'next/link';

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
        const { classes, window, openDrawer, algorithms } = this.props;

        const container = window !== undefined ? () => window().document.body : undefined;

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
                            ALGORİTMAHANE
                        </ButtonBase>
                    </Link>
                </div>
                <Divider />
                <List>
                    <ListItem button data-drop="1" onClick={this.handleDrawerDropDown}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Arama Algoritmaları" />
                        {openDrawerDropDown == 1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDrawerDropDown == 1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {algorithms.search.map((algorithm) => (
                                <Link key={`${algorithm.name}-search-drawer-column`} href={`/info/${algorithm.endPoint}`}>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary={algorithm.name} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                    <ListItem button data-drop="2" onClick={this.handleDrawerDropDown}>
                        <ListItemIcon>
                            <SortIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sıralama Algoritmaları" />
                        {openDrawerDropDown == 2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDrawerDropDown == 2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {algorithms.sort.map((algorithm) => (
                                <Link key={`${algorithm.name}-sort-drawer-column`} href={`/info/${algorithm.endPoint}`}>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary={algorithm.name} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </div >
        );

        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
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
