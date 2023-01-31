import React from "react"
import { Collapse, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 200;





export default function SideNav(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block', },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 64, borderTop: '1px solid #f1f1f1' },
            }}
            open
        >

            <List>
                {props.menuList.map((menu, index) => (
                    <>
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => menu.subMenu && menu.subMenu.length > 0 ? handleClick() : props.onChange(index)}>

                                <div className="flex w-full align-center justify-between hover:text-gray-900 duration-300">
                                    <div className="flex align-center">
                                        {menu.icon}
                                        <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{menu.name}</h5>
                                    </div>

                                    {menu.subMenu && menu.subMenu.length > 0 ?
                                        open ? <ExpandLess /> : <ExpandMore /> : null}
                                </div>


                            </ListItemButton>

                        </ListItem>

                        {
                            menu.subMenu && menu.subMenu.length > 0 ?
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {menu.subMenu.map((nestedMenu, nestIndex) => {
                                            return (
                                                <ListItemButton key={nestIndex} sx={{ pl: 4 }}>
                                                    <div className="flex align-center hover:text-gray-900 duration-300">
                                                        {nestedMenu.icon && nestedMenu.icon}
                                                        <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{menu.name}</h5>
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


        </Drawer >



    )
}
