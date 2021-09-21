import React from 'react'
import {
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Hidden from '@material-ui/core/Hidden';
import CreateIcon from '@material-ui/icons/Create';
import { useHomeStyles } from '../../pages/Home';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
    userAvatar: string;
    userFullName: string;
    userName: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes, userFullName, userName, userAvatar }: SideMenuProps): React.ReactElement => {
    return (
        <div className={classes.sideMenu}>
            <ul className={classes.sideMenuLIst}>
                <li>
                    <IconButton className={classes.logo} aria-label="" color="primary" >
                        <TwitterIcon className={classes.logoIcon} color="primary" />
                    </IconButton>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <HomeIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Главная
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Поиск
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Уведомление
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Сообщение
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Закладки
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ViewListOutlinedIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Список
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <GroupOutlinedIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Профиль
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button
                        className={classes.btnTweet}
                        color="primary"
                        variant="contained"
                        fullWidth>
                        <Hidden smDown>
                            Твитнуть
                        </Hidden>
                        <Hidden mdUp>
                            <CreateIcon />
                        </Hidden>
                    </Button>
                </li>
                {/* <li className={classes.sideMenuListItem}>
                    
                </li> */}
            </ul>
            <div className={classes.myItem}>
                <Avatar alt="Remy Sharp" src={userAvatar} />
                <Typography>
                    <span className={classes.myFullname}> <b>{userFullName}</b></span> <br />
                    <span>@{userName}</span>
                </Typography>
                <MoreHorizOutlinedIcon className={classes.settingTweet} />
            </div>
        </div>
    )
}
