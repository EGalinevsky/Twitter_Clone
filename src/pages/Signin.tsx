import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    loginSideWarpper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    }
}))

function Signin() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li><Typography>Читайте о том, что вам интересно</Typography></li>
                    <li><Typography>Узнайте, о чем говорят в мире</Typography></li>
                    <li><Typography>Присоединяйтесь к общению</Typography></li>
                </ul>
            </section>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWarpper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>
            </div>
        </div>
    )
}

export default Signin
