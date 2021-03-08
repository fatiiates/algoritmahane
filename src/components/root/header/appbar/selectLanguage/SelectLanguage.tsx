import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connector } from './Redux';
import { TSelectLanguageProps, IAppBarState } from './Types';
import { styles } from './Styles';
import cookie from 'cookie';
import { List, ListItem, ListItemIcon, ListItemText, Popover, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TranslateIcon from '@material-ui/icons/Translate';
import {
    IconFlagTR,
    IconFlagUS
} from 'material-ui-flags';

class SelectLanguage extends React.Component<TSelectLanguageProps, IAppBarState> {

    constructor(props: TSelectLanguageProps) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handeLanguage = async (lang) => {
        if (this.props.lang != lang){
            document.cookie = cookie.serialize('lang', lang, {
                maxAge: 60 * 60 * 24 * 7 // 1 week,
            });
            window.location.reload();
        }
    }

    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {

        const { classes, responsive, lang } = this.props;

        const { anchorEl } = this.state;

        const langs = {
            'tr-TR': {
                name: "TÜRKÇE",
                icon: <IconFlagTR/>
            },
            'en-US': {
                name: "ENGLISH",
                icon: <IconFlagUS/>
            },
        };

        const open = Boolean(anchorEl);
        const id = open ? 'language-popover' : undefined;
    
        return (
            <React.Fragment>
            <Button
                color="inherit"
                startIcon={<TranslateIcon />}
                onClick={this.handleClick}                   
            >
                {!responsive ? langs[lang].name: undefined}
                <ExpandMoreIcon/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                    vertical: responsive ? 'bottom': 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <List component="nav">
                    {React.Children.toArray(
                        Object.keys(langs).map((key) => (
                            <ListItem onClick={e => this.handeLanguage(key)} button>
                                <ListItemIcon>
                                    {langs[key].icon}
                                </ListItemIcon>
                                <ListItemText primary={<Typography>{langs[key].name}</Typography>} />
                            </ListItem>
                        ))                        
                    )}                    
                </List>
            </Popover>
        </React.Fragment>
        );
    }
}

export default connector(withStyles(styles)(SelectLanguage));
