import React, { useCallback, useEffect, useState } from "react"
import { Collapse, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { apiPost } from "services/apiServices";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { makeStyles } from '@mui/styles';

import { API_ENDPOINT_PRODUCT_FETCH_CATEGORY } from "scenes/Products/products.constants";
import { history } from "Store";

const defaultDrawerWidth = 320;
const colors = ["#eb4d4b", "#686de0", "#22a6b3", "#130f40", "#6ab04c"]


const minDrawerWidth = 320;
const maxDrawerWidth = 1000;


const useStyles = makeStyles({
    dragger: {
        width: "5px",
        cursor: "ew-resize",
        padding: "4px 0 0",
        borderTop: "1px solid #ddd",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: "#d0d0d0"
    }

});


export default function SideNav(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState([])
    const [drawerWidth, setDrawerWidth] = React.useState(defaultDrawerWidth);
    const classes = useStyles()
    const payload = {
        type: "main",
        parentid: "1"
    }
    const handleClick = (menuItem) => {
        if (menuItem.leaf === 0) {
            fetchSubCategories(menuItem)
        } else {
            history.push("/product/detail/" + menuItem.id)
        }
        console.log("handle click")
    };


    const handleMouseDown = e => {
        document.addEventListener("mouseup", handleMouseUp, true);
        document.addEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mouseup", handleMouseUp, true);
        document.removeEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseMove = useCallback(e => {
        const newWidth = e.clientX - document.body.offsetLeft;
        if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
            setDrawerWidth(newWidth);
        }
    }, []);




    useEffect(() => {
        fetchCategoryMain()
    }, [])

    const fetchCategoryMain = async () => {
        const response = await apiPost(API_ENDPOINT_PRODUCT_FETCH_CATEGORY, payload)
        setCategory(response.data)
    }
    const fetchSubCategories = async (menuItem) => {
        const payload = {
            type: menuItem.next_node,
            parentid: menuItem.id
        }
        const response = await apiPost(API_ENDPOINT_PRODUCT_FETCH_CATEGORY, payload)
        findAndSave(menuItem.id, response.data)
    }

    const findAndSave = (rootId, data) => {
        let initialData = JSON.parse(JSON.stringify(category))
        initialData
            .forEach(
                function iter(a) {
                    if (a.id === rootId) {
                        a.subMenu = data;
                    }
                    Array.isArray(a.subMenu) && a.subMenu.forEach(iter);
                }
            );
        setCategory(initialData)
    }


    const getTreeItemsFromData = treeItems => {
        return treeItems.map(treeItemData => {
            let children = undefined;
            if (treeItemData.subMenu && treeItemData.subMenu.length > 0) {
                children = getTreeItemsFromData(treeItemData.subMenu);
            }
            return (
                <TreeItem
                    key={treeItemData.id}
                    id={"treeitem" + treeItemData.id}
                    nodeId={treeItemData.id}
                    label={<div className="flex items-center  p-2">
                        {treeItemData.category_icon ? <img className="w-5 object-cover mr-2" src={treeItemData.category_icon} /> : null}
                        <small className={treeItemData.leaf === 1 ? "font-semibold " : ""}>{treeItemData.category_name}
                            {treeItemData.leaf === 1 ?
                                <div className="flex items-center">
                                    {treeItemData.classifications.map((item, key) => {
                                        return (
                                            <div className="rounded text-xxs w-8 text-center" style={{ background: colors[key], color: 'white', marginLeft: 2, padding: 1 }}>{item}</div>
                                        )

                                    })
                                    } </div>
                                : null}</small>

                    </div>}
                    children={children}
                    onClick={() => handleClick(treeItemData)}
                />
            );
        });
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
            <div onMouseDown={e => handleMouseDown(e)} className={classes.dragger} />

            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: '100%', flexGrow: 1, overflowY: 'auto' }}
            >
                {getTreeItemsFromData(category)}

            </TreeView>



        </Drawer >



    )
}
