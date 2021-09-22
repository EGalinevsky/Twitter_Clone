import React from 'react';
import { Paper, IconButton } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { TextareaAutosize } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { Button } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home';
import classNames from 'classnames'


interface AddTweetProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const AddTweet: React.FC<AddTweetProps> = ({ classes }: AddTweetProps): React.ReactElement => {
    return (
        <Paper>
            <div className={classes.addForm}>
                <div className={classes.addFormBody}>
                    <Avatar
                        className={classes.avatar}
                        alt={'Аватарка пользователя UserAvatar'}
                        src="https://www.urank.ru/news/topicimage/n1/256120/"
                    />
                    <TextareaAutosize
                        className={classes.addFormTextarea}
                        placeholder='Что происходит ?'
                    />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                        <IconButton size="small" color="primary">
                            <ImageOutlinedIcon style={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <EmojiIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        <span>280</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress
                                variant="static"
                                size={20}
                                thickness={4}
                                value={18}
                            />
                            <CircularProgress
                                style={{ color: 'rgba(0,0,0,0.1)' }}
                                variant="static"
                                thickness={4}
                                value={100}
                                size={20}
                            />
                        </div>
                        <Button color="primary" variant="contained">
                            Твитнуть
                        </Button>
                    </div>

                </div>
            </div>
        </Paper>
    )
}