import React from 'react'
import { withStyles, TextField } from '@material-ui/core';

export const SearchTextField = withStyles((theme) =>
({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            marginTop: 5,
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary },
                '& svg path': {
                    fill: theme.palette.primary
                }
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent'
                },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidht: 1
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },

    }
}),
)(TextField);