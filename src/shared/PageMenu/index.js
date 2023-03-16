import React, { useEffect, useState } from 'react';
import EmojiNatureRoundedIcon from '@mui/icons-material/EmojiNatureRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { makeStyles } from '@mui/styles';
import { Drawer, SwipeableDrawer, Typography } from '@mui/material';
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem, TreeView } from '@mui/lab';
import { apiPost } from 'services/apiServices';
import { API_ENDPOINT_PRODUCT_FETCH_CATEGORY } from 'scenes/Products/products.constants';
import { history } from 'Store';
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
        },
        width: '100%'
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',

    },

});
const colors = ["#eb4d4b", "#686de0", "#22a6b3", "#130f40", "#6ab04c"]

export default function PageMenu(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState([])
    const [selctedCategory, setSelectedCategory] = useState("")
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = React.useState(false)


    const handleClick = (menuItem, open) => {
        if (menuItem.leaf === 0) {
            fetchSubCategories(menuItem)
            setSelectedCategory(menuItem.category_name)
        } else {
            setOpen(false)
            history.push("/product/detail/" + menuItem.id)
        }
        setMenuOpen(open)
    };
    const payload = {
        type: "main",
        parentid: "1"
    }




    const handleMenuChange = (index) => {
        setOpen(false)
        props.onChange(index);

    }



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
                    onClick={() => handleClick(treeItemData, true)}
                />
            );
        });
    };

    return (
        <div className="px-4 flex justify-between" >
            <div className='w-full flex justify-between' onClick={() => setOpen(!open)}>
                <div className={classes.listItem} >
                    <div className={classes.iconBox}>
                        <div className={classes.iconHighlight} />
                        <EmojiNatureRoundedIcon style={{ fontSize: 20, color: 'white' }} />
                    </div>
                    <label className='text-lg font-semibold text-gray-800'>{selctedCategory || "Select Category"}</label>
                </div>
                <ExpandMoreRoundedIcon style={{ color: "3D424D" }} />
            </div>
            <SwipeableDrawer
                anchor={"left"} open={open} onClose={() => null} >
                <div className='w-full text-right p-2'>
                    <h4 className='font-semibold' onClick={() => setOpen(false)}>Close</h4>
                </div>

                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: '100%', flexGrow: 1, overflowY: 'auto' }}
                >
                    {getTreeItemsFromData(category)}

                </TreeView>
            </SwipeableDrawer>
        </div >
    );
}
