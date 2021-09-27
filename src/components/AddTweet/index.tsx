import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton'
import Avatar from '@material-ui/core/Avatar';
import { TextareaAutosize } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { Button } from '@material-ui/core';
import classNames from 'classnames'
import { useHomeStyles } from '../../pages/Home/theme';

interface AddTweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number
}

export const AddTweet: React.FC<AddTweetProps> = ({ classes, maxRows }: AddTweetProps): React.ReactElement => {
    const [text, setText] = useState<string>('')
    const textLimitPercent = Math.round((text.length / 280) * 100)

    const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget && textLimitPercent < 100) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickTweet = (): void => {
        setText('')
    }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.avatar}
                    alt={'Аватарка пользователя UserAvatar'}
                    src="https://www.urank.ru/news/topicimage/n1/256120/"
                />
                <TextareaAutosize
                    onChange={handleChangeTextare}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит ?'
                    value={text}
                    maxRows={maxRows}
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
                    {text && (
                        <>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= 280 ? 100 : textLimitPercent}
                                    style={textLimitPercent >= 100 ? { color: 'red' } : undefined}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0,0,0,0.1)' }}
                                    variant="static"
                                    thickness={4}
                                    value={100}
                                    size={20}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickTweet}
                        color="primary"
                        variant="contained">
                        Твитнуть
                    </Button>
                </div>

            </div>
        </div>
    )
}