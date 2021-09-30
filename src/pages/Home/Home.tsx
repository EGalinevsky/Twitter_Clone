import React, { useEffect, useState } from 'react'
import { Grid, Paper, IconButton, Typography, Container } from '@material-ui/core'
import FlareIcon from '@material-ui/icons/Flare';
import { TweetComponent } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweet } from '../../components/AddTweet';
import { RightSide } from '../../components/RightSide';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems, selectIsTweetsLoading } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FullTweet } from './component/FullTweet';
import { fetchTweetData } from '../../store/ducks/tweet/actionCreators';
import { selectTweetData } from '../../store/ducks/tweet/selectors';


export const Home = (): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading)
    const tweet = useSelector(selectTweetData)
    const history = useHistory();
    const handleClickBack = () => {
        history.goBack();
    }

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
                        userAvatar='https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_100_100/0/1626063510328?e=1638403200&v=beta&t=J-K9QCPq5ZOSzQ6Zt9NOV-LrJNEBmeFdUMtmwIrtTyU'
                        userFullName='Eugene Galinevksy'
                        userName='Egalinevsky' />
                </Grid>
                <Grid item xs={7}>
                    <Paper
                        className={classes.tweetsWrapper}
                        style={{ height: '100%' }}
                        variant="outlined">
                        <Paper
                            className={classes.tweetsHeaderRoute}
                            variant="outlined">
                            <div className={classes.wrapperHeader}>
                                <Route path="/home/:any">
                                    <IconButton onClick={handleClickBack} className={classes.arrowBack}>
                                        <ArrowBackIcon className={classes.sideMenuListItemIcon} />
                                    </IconButton>
                                </Route>
                                <Route path={['/home', 'home/search']} exact>
                                    <Typography variant="h6">Главная</Typography>
                                </Route>
                                <Route path="/home/tweet">
                                    <Typography variant="h6">Твит</Typography>
                                </Route>
                                <Route path='/home/search' >
                                    <Typography variant="h6">Актуальные темы</Typography>
                                </Route>
                            </div>
                            <Route path={['/home', 'home/search', 'home/tweet']} exact>
                                <IconButton aria-label="" >
                                    <FlareIcon className={classes.sideMenuListItemIcon} />
                                </IconButton>
                            </Route>
                        </Paper>
                        <Route path={['/home', 'home/search']} exact>
                            <Paper className={classes.wrapperaddForm} variant="outlined">
                                <div className={classes.addForm}>
                                    <AddTweet classes={classes} />
                                </div>
                            </Paper>
                        </Route>

                        <Route path="/home" exact>
                            {isLoading ? (<div className={classes.tweetsCentred}><CircularProgress /></div>) : (tweets.map((tweet) => <TweetComponent key={tweet._id} classes={classes} {...tweet} />))}
                        </Route>
                        <Route path="/home/tweet/:id" component={FullTweet} exact />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <RightSide classes={classes} />
                </Grid>
            </Grid>
        </Container>
    )
}
