import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F2F2F2",

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        fontSize: 12,
        minWidth: 200,
        color: "#7c7575"
    },
}));

export default function SearchBox() {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Search>
                <SearchIconWrapper>
                    <SearchIcon style={{ color: "#A5A1A1" }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search products & countries"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>

        </Box>
    );
}