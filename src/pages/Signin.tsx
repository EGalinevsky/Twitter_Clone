import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


import Button from '@material-ui/core/Button';
import { ModalBlock } from '../components/Dialog';



export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
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
    },
    loginSideField: {
        marginBottom: 20,
    }
}))

function Signin() {
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }
    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }
    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
    }
    const classes = useStylesSignIn()

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleIcon className={classes.blueSideListInfoIcon} />
                            Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon} />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWarpper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleClickOpenSignUp} style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} title='Войти в аккаунт'>
                        <FormControl component='fieldset' fullWidth>
                            <FormGroup row aria-label="position">
                                <TextField className={classes.loginSideField} autoFocus id="email" label="E-Mail" InputLabelProps={{ shrink: true }} variant="filled" type="email" fullWidth />
                                <TextField className={classes.loginSideField} autoFocus id="password" label="Пароль" InputLabelProps={{ shrink: true }} variant="filled" type="password" fullWidth />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Sign in
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} title='Создайте учетную запись'>
                        <FormControl component='fieldset' fullWidth>
                            <FormGroup row aria-label="position">
                                <TextField className={classes.loginSideField} autoFocus id="name" label="Имя" InputLabelProps={{ shrink: true }} variant="filled" type="name" fullWidth />
                                <TextField className={classes.loginSideField} autoFocus id="email" label="E-mail" InputLabelProps={{ shrink: true }} variant="filled" type="email" fullWidth />
                                <TextField className={classes.loginSideField} autoFocus id="password" label="Пароль" InputLabelProps={{ shrink: true }} variant="filled" type="password" fullWidth />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </div>
        </div>
    )
}

export default Signin
