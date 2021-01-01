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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';

import { connector } from './Redux';
import { TDrawerProps, IDrawerState } from './Types';
import { styles } from './Styles';

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
        const { classes, window, openDrawer } = this.props;

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
                    <Typography variant="h6" noWrap>
                        coupleS
                    </Typography>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <ListItem button data-drop="1" onClick={this.handleDrawerDropDown}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {openDrawerDropDown == 1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDrawerDropDown == 1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button data-drop="2" onClick={this.handleDrawerDropDown}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {openDrawerDropDown == 2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDrawerDropDown == 2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
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
