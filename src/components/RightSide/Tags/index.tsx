import React, { useEffect } from 'react'

import { Paper, Typography } from '@material-ui/core'
import { ListItemText, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'

import { useDispatch, useSelector } from 'react-redux';
import { useHomeStyles } from '../../../pages/Home/theme';
import { fetchTags } from '../../../store/tags/actionCreators';
import { selectIsTagsLoaded, selectTagsItems } from '../../../store/tags/selectors';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom';


interface TagsActualProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const TagsActual: React.FC<TagsActualProps> = ({ classes }: TagsActualProps): React.ReactElement | null => {

    const dispatch = useDispatch();
    const tags = useSelector(selectTagsItems)
    const isLoadingTags = useSelector(selectIsTagsLoaded)

    console.log(tags)

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    if (!isLoadingTags) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    tags.map((obj) => (
                        <React.Fragment key={obj._id}>
                            <ListItem
                                className={classes.rightSideBlockItem}>
                                <Link to={`/home/search?q=${obj.name}`}>
                                    <ListItemText
                                        key={obj._id}
                                        primary={obj.name}
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов: {obj.count}
                                            </Typography>
                                        }
                                    />
                                </Link>
                            </ListItem>
                            <Divider component="li" />
                        </React.Fragment>
                    ))
                }
            </List>
        </Paper>
    )
}
