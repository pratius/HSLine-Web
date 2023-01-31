import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { menuList } from "./nav.constants";


const drawerWidth = 200;





export default function SideNav(props) {
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
                {menuList[props.type].map((menu, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => props.onChange(index)}>
                            <div className="flex align-center hover:text-gray-900 duration-300">
                                {menu.icon}
                                <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{menu.name}</h5>
                            </div>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>


        </Drawer>



    )
}
