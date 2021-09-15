import React from 'react';
import {
  Grid,
  Paper,
  IconButton,
  Typography,
  makeStyles,
  Container,
  TextField,
  withStyles,
  createStyles,
} from '@material-ui/core';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import LikeIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/SubdirectoryArrowRightOutlined';
import Avatar from '@material-ui/core/Avatar';
import { useHomeStyles } from '../../pages/Home';

interface TweetProps {
  text: string
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  }
}

export const TweetComponent: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {

  return (
    <Paper
      variant="outlined"
      className={classes.tweetItem}
    // className={classNames(classes.tweetItem, classes.twittsWrapper)}
    >
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Avatar alt="Remy Sharp" src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullName}</b> @{user.userName}
          </Typography>
          <Typography>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="primary" aria-label="">
                <ChatBubbleOutlineRoundedIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="">
                <RepeatRoundedIcon />
              </IconButton>
              <span>1</span>
            </div>

            <div>
              <IconButton aria-label="">
                <LikeIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="">
                <ShareIcon />
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
