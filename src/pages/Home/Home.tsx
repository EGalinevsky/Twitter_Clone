import React, { useEffect } from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container, withStyles, TextField, InputAdornment } from '@material-ui/core'
import FlareIcon from '@material-ui/icons/Flare';

import { grey } from '@material-ui/core/colors'
import { TweetComponent } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweet } from '../../components/AddTweet';
import { RightSide } from '../../components/RightSide';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsItems, selectIsTweetsLoading } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress'

export const Home = (): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    const handleTweetsFetch = () => {
        dispatch(fetchTweets());
    }
    useEffect(() => {
        handleTweetsFetch()
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SideMenu
                        handleTweetsFetch={handleTweetsFetch}
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
                        <Paper className={classes.wrapperaddForm} variant="outlined">
                            <div className={classes.addForm}>
                                <AddTweet classes={classes} />
                            </div>
                        </Paper>
                        {isLoading ? (<div className={classes.tweetsCentred}><CircularProgress /></div>) : (tweets.map((tweet) => <TweetComponent key={tweet._id} classes={classes} text={tweet.text} user={tweet.user} />))}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <RightSide classes={classes} />
                </Grid>
            </Grid>
        </Container>
    )
}

