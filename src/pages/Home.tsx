import React from 'react'
import { Grid, Paper, IconButton, Typography, makeStyles, Container, withStyles, TextField, InputAdornment } from '@material-ui/core'
import FlareIcon from '@material-ui/icons/Flare';

import { grey } from '@material-ui/core/colors'
import { TweetComponent } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import { AddTweet } from '../components/AddTweet';
import { RightSide } from '../components/RightSide';

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
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: "0",
        borderBottom: "0",
    },
    avatar: {
        marginTop: 5,
        marginRight: 15,
        width: 50,
        height: 50
    },
    tweetsHeader: {
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
        // borderTop: '0',
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
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#f5f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        }
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        }
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        }
    },
    addForm: {
        padding: 20,
        marginBottom: 5
    },
    addFormBody: {
        display: 'flex',
        width: '100%'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addFormBottomActions: {
        display: 'flex',
        width: 70,
        justifyContent: 'space-between',
        marginTop: 10,
        fontSize: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6Ecf0'
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute'
        }
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    }
}))

export const SearchTextField = withStyles((theme) =>
({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            marginTop: 5,
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary },
                '& svg path': {
                    fill: theme.palette.primary
                }
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent'
                },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidht: 1
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },

    }
}),
)(TextField);

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
                            <AddTweet classes={classes} />
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

