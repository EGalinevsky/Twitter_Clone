import React from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh'
    },
    logo:{
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
    }
}))

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <ul className={classes.sideMenuLIst}>
                        <li>
                            <IconButton aria-label="" color="primary" >
                                <TwitterIcon className={classes.logo} color="primary" />
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
                    <Paper>xs=7</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs=3</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

