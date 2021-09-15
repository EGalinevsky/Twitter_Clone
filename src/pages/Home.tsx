import React from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container, TextField, withStyles, createStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import classNames from 'classnames'
import FlareIcon from '@material-ui/icons/Flare';
import SearchIcon from '@material-ui/icons/Search';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';


import { grey } from '@material-ui/core/colors'
import { TweetComponent } from '../components/Tweet';

export const useHomeStyles = makeStyles(() => ({
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
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 5,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    twittsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: "0",
        borderBottom: "0",
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
    tweetsUserName: {
        color: grey[500],
    },
    tweetItem: {
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        padding: '5px 10px',
        marginTop: 5,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 450,
    },
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
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
                    <ul className={classes.sideMenuLIst}>
                        <li>
                            <IconButton className={classes.logo} aria-label="" color="primary" >
                                <TwitterIcon className={classes.logoIcon} color="primary" />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" color="primary" >
                                <HomeIcon className={classes.sideMenuListItemIcon} color="primary" />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Home</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label=""  >
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label=""  >
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомление</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label=""  >
                                <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщение</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label=""  >
                                <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <ViewListOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label=""  >
                                <GroupOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
                        </li>
                    </ul>
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
                            user={{ fullName: 'Eugene Galinevsky', userName: 'Egalinevsky', avatarUrl: 'fefef' }}
                            classes={classes} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по Твиттеру"
                        // InputProps={{
                        //     startAdornment: (
                        //         <InputAdornment position="start">
                        //             <SearchIcon />
                        //         </InputAdornment>
                        //     ),
                        // }}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

