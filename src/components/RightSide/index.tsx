import React from 'react'
import { SearchTextField, useHomeStyles } from '../../pages/Home'
import { Paper, Typography, InputAdornment } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/SearchOutlined';
import { ListItemText, ListItemAvatar, List, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'


interface RightSideProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const RightSide: React.FC<RightSideProps> = ({ classes }: RightSideProps): React.ReactElement => {
    return (
        <div className={classes.rightSide}>
            <SearchTextField
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                    <b>Актуальные темы</b>
                </Paper>
                <List>
                    <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                            primary="Санкт-Петербург"
                            secondary={
                                <Typography component="span" variant="body2">
                                    Твитов: 3 331
                                </Typography>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                            primary="#Covid-2020"
                            secondary={
                                <Typography component="span" variant="body2">
                                    Твитов: 163 122
                                </Typography>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                            primary="Беларусь"
                            secondary={
                                <Typography component="span" variant="body2">
                                    Твитов: 13 548
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </Paper>
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
        </div>
    )
}
