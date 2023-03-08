import React, { useEffect, useState } from "react"
import { Collapse, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { apiPost } from "services/apiServices";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { API_ENDPOINT_PRODUCT_FETCH_CATEGORY } from "scenes/Products/products.constants";

const drawerWidth = 260;





export default function SideNav(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState([])

    const payload = {
        type: "main",
        parentid: "1"
    }
    const handleClick = (menuItem) => {
        if (menuItem.leaf === 0) {
            fetchSubCategories(menuItem)
        }
        console.log("handle click")
    };


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
        console.log("final data", initialData)
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
                    nodeId={treeItemData.id}
                    label={<div className="flex items-center  p-2">
                        {treeItemData.category_icon ? <img className="w-5 object-cover mr-2" src={treeItemData.category_icon} /> : null}
                        <small className={treeItemData.leaf === 1 ? "font-semibold" : ""}>{treeItemData.category_name}</small>
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

            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {getTreeItemsFromData(category)}

            </TreeView>


        </Drawer >



    )
}
