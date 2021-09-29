import React from 'react'
import { InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { useHomeStyles } from '../../pages/Home/theme';
import { SearchTextField } from '../SearchTextField';
import { TagsActual } from './Tags';
import { Users } from './Users';



interface RightSideProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const RightSide: React.FC<RightSideProps> = ({ classes }: RightSideProps): React.ReactElement=> {

    return (
        <div className={classes.rightSide}>
            <SearchTextField
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <TagsActual classes={classes}/>
            <Users classes={classes}/>
        </div>
    )
}
