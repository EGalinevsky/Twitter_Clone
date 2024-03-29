import React from 'react';
import {
  Paper,
  IconButton,
  Typography,
} from '@material-ui/core';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import LikeIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/SubdirectoryArrowRightOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Avatar from '@material-ui/core/Avatar';
import { useHomeStyles } from '../../pages/Home/theme';
import { Link } from 'react-router-dom';

interface TweetProps {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyles>;
  key?: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  }
}

export const TweetComponent: React.FC<TweetProps> = ({ text, user, classes, _id }: TweetProps): React.ReactElement => {

  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper
        variant="outlined"
        className={classes.tweetItem}
      >
        <Avatar
          alt="Remy Sharp"
          src={user.avatarUrl}
          className={classes.avatar}
        />
        <div>
          <div className={classes.tweetTitle}>
            <Typography>
              <b>{user.fullName}</b>
              <span className={classes.tweetUserName}>@{user.userName}</span>-
              <span className={classes.tweetUserName}>1 ч</span>
            </Typography>
            <IconButton color="primary" aria-label="">
              <MoreHorizOutlinedIcon className={classes.settingTweet} />
            </IconButton>
          </div>
          <Typography>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="primary" aria-label="" size="small">
                <ChatBubbleOutlineRoundedIcon fontSize="inherit" />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton size="small" aria-label="">
                <RepeatRoundedIcon fontSize="inherit" />
              </IconButton>
              <span>2</span>
            </div>

            <div>
              <IconButton size="small" aria-label="">
                <LikeIcon fontSize="inherit" />
              </IconButton>
              <span> </span>
            </div>
            <div>
              <IconButton size="small" aria-label="">
                <ShareIcon fontSize="inherit" />
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </div>
      </Paper>
      </Link>
  );
};
