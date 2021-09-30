import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { ListItemText, ListItemAvatar, List, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'


import { useHomeStyles } from '../../../pages/Home/theme'

interface UsersProps{
    classes: ReturnType<typeof useHomeStyles>
}

export const Users: React.FC<UsersProps> = ({classes}: UsersProps): React.ReactElement => {
    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
            </Paper>
            <List>
                <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                        <Avatar
                            alt="Reny Sharp"
                            src=""
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Dock of Shame"
                        secondary={
                            <Typography component='span' variant="body2">
                                @FavDockofShame
                            </Typography>
                        }
                    />
                    <Button color="primary">
                        <PersonAddIcon />
                    </Button>
                </ListItem>
                <Divider component="li" />
            </List>
        </Paper>
    )
}
