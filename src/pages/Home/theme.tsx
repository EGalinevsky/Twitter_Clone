import { makeStyles } from "@material-ui/core";
import { grey } from '@material-ui/core/colors'


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
    sideMenu: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '98vh',
        justifyContent: 'space-between'
    },
    sideMenuLIst: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230
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
    tweetsCentred:{
        marginTop: 100,
        textAlign: 'center'
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
        borderRadius: '0',
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
    wrapperaddForm:{
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0
    },
    addForm: {
        padding: 20,
        marginBottom: 5,
        borderBottom: 1
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