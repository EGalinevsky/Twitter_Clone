import React from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container, withStyles, TextField, InputAdornment } from '@material-ui/core'
import FlareIcon from '@material-ui/icons/Flare';

import { grey } from '@material-ui/core/colors'
import { TweetComponent } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweet } from '../../components/AddTweet';
import { RightSide } from '../../components/RightSide';
import { useHomeStyles } from './theme';

// const TextLimitProgress = withStyles(()=> ({}))(CircularProgress)

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SideMenu
                        classes={classes}
                        userAvatar='https://www.urank.ru/news/topicimage/n1/256120/'
                        userFullName='Eugene Galinevksy'
                        userName='Egalinevsky' />
                </Grid>
                <Grid item xs={7}>
                    <Paper
                        className={classes.tweetsWrapper}
                        style={{ height: '100%' }}
                        variant="outlined">
                        <Paper
                            className={classes.tweetsHeader}
                            variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                            <IconButton aria-label="" >
                                <FlareIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweet classes={classes} />
                            </div>
                        </Paper>
                        <TweetComponent
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, libero ipsum nobis sint, quaerat repellendus tempore praesentium fugiat laudantium, eligendi nisi maxime molestias dicta voluptatibus officiis iste totam magnam. Culpa.'
                            user={{
                                fullName: 'Vito Andolini Corleone',
                                userName: 'The_Godfather',
                                avatarUrl: 'https://img.funpinpin.com/grem/uploads/2021/05/f34d9bd7fe4a6e3cac92a51a7a7bc9c4.jpg'
                            }}
                            classes={classes} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <RightSide classes={classes} />
                </Grid>
            </Grid>
        </Container>
    )
}

