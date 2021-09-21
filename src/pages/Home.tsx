import React from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container, withStyles, createStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import FlareIcon from '@material-ui/icons/Flare';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined'

import { grey } from '@material-ui/core/colors'
import { TweetComponent } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import Avatar from '@material-ui/core/Avatar';
import { ListItemText, ListItemAvatar, List, Button } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuLIst: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230 
    },
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        height: '98vh',
        justifyContent: 'space-between'
    },
    sideMenuListItem: {
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 20px 0 15px',
            borderRadius: 30,
            cursor: 'pointer',
            height: 50,
            transition: 'background-color 0.15s ease-out',
            '&:hover': {
                backgroundColor: 'rgba(15, 20, 25, 0.1)',
                '& h6': {
                    color: theme.palette.primary
                }
            },

        }
    },
    sideMenuListItemLabel: {
        fontWeight: 400,
        fontSize: 16,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 26,
    },
    twittsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: "0",
        borderBottom: "0",
    },
    avatar: {
        marginTop: 5,
        width: 50,
        height: 50
    },
    twittsHeader: {
        borderLeft: '0',
        borderRight: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 0,
        padding: '5px 10px',

        '& h6': {
            fontWeight: 700,
        }
    },
    tweetTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    settingTweet: {
        fontSize: 16
    },
    tweetUserName: {
        color: '#8e99a1',
        marginLeft: '10px',
        fontWeight: 200,
    },
    tweetsUserName: {
        color: grey[500],
    },
    tweetItem: {
        display: 'flex',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        padding: '5px 10px',
        marginTop: 5,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(15, 20, 25, 0.1)',
        },
    },
    tweetFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 450,
    },
    btnTweet: {
        marginTop: 15
    },
    myItem: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2px 10px',
        width: '100%',
        borderRadius: 30,
        cursor: 'pointer',
        marginBottom: 12,
        marginTop: 12,
        '&:hover': {
            backgroundColor: 'rgba(15, 20, 25, 0.1)',
        }
    },
    myFullname: {
        fontSize: 12,
        fontWeight: 100,
    }
}))

const SearchTextField = withStyles(() =>
({
    root: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        padding: 0,
        paddingLeft: 10,
        height: 45,
    }
}),
)(InputBase);

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SideMenu classes={classes}
                        userAvatar='https://www.urank.ru/news/topicimage/n1/256120/'
                        userFullName='Eugene Galinevksy'
                        userName='Egalinevsky' />
                </Grid>
                <Grid item xs={7}>
                    <Paper
                        className={classes.twittsWrapper}
                        style={{ height: '100%' }}
                        variant="outlined">
                        <Paper
                            className={classes.twittsHeader}
                            variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                            <IconButton aria-label="" >
                                <FlareIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                        </Paper>
                        <TweetComponent
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, libero ipsum nobis sint, quaerat repellendus tempore praesentium fugiat laudantium, eligendi nisi maxime molestias dicta voluptatibus officiis iste totam magnam. Culpa.'
                            user={{ fullName: 'Vito Andolini Corleone', userName: 'The_Godfather', avatarUrl: 'https://img.funpinpin.com/grem/uploads/2021/05/f34d9bd7fe4a6e3cac92a51a7a7bc9c4.jpg' }}
                            classes={classes} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по Твиттеру"
                        fullWidth
                    >
                    </SearchTextField>
                </Grid>
            </Grid>
        </Container>
    )
}

