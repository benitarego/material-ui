import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={6} style={{border: '1px solid black'}}>
                        <inputBase />
                    </Grid>

                    <Grid item sm={6} style={{border: '1px solid white'}}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color="primary">
                                <ExitToAppIcon />
                            </Badge>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}