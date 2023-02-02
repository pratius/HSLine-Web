import React from "react"
import clsx from "clsx"

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { SITE_STATIC_DATA } from "helpers/constants"
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fullList: {
        width: 272,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

export default function MobileMenu() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [openNested, setOpenNested] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleClick = (path) => {
        window.location.href = path
    }

    const handleNested = () => {
        setOpenNested(!openNested)
    }


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: true,
            })}
            role="presentation"
            onKeyDown={handleDrawerClose}
        >
            <List>
                {/* Start Product Menu */}
                {/* <ListItem button onClick={handleNested}>
          <ListItemText primary="Product" />
          {openNested ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openNested} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {nestedList.map((menu, index) => (
              <ListItem
                className={classes.nested}
                button
                key={index}
                onClick={() => handleClick(menu.path)}
              >
                <ListItemText primary={menu.title} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Divider/> */}

                {/* End Product Menu */}
                {SITE_STATIC_DATA.primaryMenu.map((menu, index) => (
                    <ListItem button key={index} onClick={() => handleClick(menu.path)}>
                        <ListItemText primary={menu.title} className={"stackin-cta"} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
            >
                <MenuRoundedIcon style={{ color: '#3D424D' }} />
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={handleDrawerClose}>
                {list("right")}
            </Drawer>
        </React.Fragment>
    )
}
