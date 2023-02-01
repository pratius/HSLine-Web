import React from 'react';
import EmojiNatureRoundedIcon from '@mui/icons-material/EmojiNatureRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { makeStyles } from '@mui/styles';
import { Drawer, Typography } from '@mui/material';
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    iconBox: {
        width: 32,
        height: 32,
        borderRadius: 6,
        backgroundColor: 'black ',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4
    },
    iconHighlight: {
        background: 'black'
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 12,
        cursor: 'pointer'
    },

    featName: {
        color: '#3d424dbf',
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 10,
        '&:hover': {
            fontWeight: '600 !important',
            transition: 'all 0.4s'
        }
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    paper: {
        height: '100vh',
    }
});

export default function PageMenu(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = React.useState(false)
    const handleClick = () => {
        setMenuOpen(!open);
    };




    const handleMenuChange = (index) => {
        setOpen(false)
        props.onChange(index);

    }
    return (
        <div className="px-4 flex justify-between" onClick={() => setOpen(true)}>

            <div className={classes.listItem}>
                <div className={classes.iconBox}>
                    <div className={classes.iconHighlight} />
                    <EmojiNatureRoundedIcon style={{ fontSize: 20, color: 'white' }} />
                </div>
                <label className='text-lg font-semibold text-gray-800'>Fruits</label>
            </div>
            <ExpandMoreRoundedIcon style={{ color: "3D424D" }} />
            <Drawer anchor={"top"} open={open} onClose={() => setOpen(false)} PaperProps={{

                sx: {
                    height: '100vh'
                }
            }} className="h-screen" classes={{ paper: classes.paper }}>
                <List>
                    {props.menuList.map((menu, index) => (
                        <>
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => menu.subMenu && menu.subMenu.length > 0 ? handleClick() : handleMenuChange(index)}>

                                    <div className="flex w-full align-center justify-between hover:text-gray-900 duration-300">
                                        <div className="flex align-center">
                                            {menu.icon}
                                            <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{menu.name}</h5>
                                        </div>

                                        {menu.subMenu && menu.subMenu.length > 0 ?
                                            menuOpen ? <ExpandLess /> : <ExpandMore /> : null}
                                    </div>


                                </ListItemButton>

                            </ListItem>

                            {
                                menu.subMenu && menu.subMenu.length > 0 ?
                                    <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {menu.subMenu.map((nestedMenu, nestIndex) => {
                                                return (
                                                    <ListItemButton key={nestIndex} sx={{ pl: 4 }}>
                                                        <div className="flex align-center hover:text-gray-900 duration-300">
                                                            {nestedMenu.icon && nestedMenu.icon}
                                                            <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{nestedMenu.name}</h5>
                                                        </div>
                                                    </ListItemButton>
                                                )
                                            })}

                                        </List>
                                    </Collapse> : null
                            }
                        </>

                    ))}
                </List>
            </Drawer>
        </div>
    );
}
