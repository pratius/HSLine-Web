import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React from "react"
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Button, Input, message } from "antd";
import UpdateBasic from "./components/UpdateBasic";
import UpdateCompany from "./components/UpdateCompany";
import { connect } from "react-redux";
function Settings(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [messageApi, contextHolder] = message.useMessage();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };




    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                return <UpdateBasic data={props.userInfo} toast={messageApi} />
            case 1:
                return <UpdateCompany data={props.userInfo} toast={messageApi} />
            default:
                return <UpdateBasic data={props.userInfo} toast={messageApi} />

        }
    }
    return (
        <div className="flex w-full flex-col">
            {contextHolder}

            <div className="w-full p-3">
                <h2 className="text-2xl font-semibold text-gray-800" style={{ lineHeight: 1 }}>Settings</h2>
                <p className="text-sm text-gray-700 mt-1" style={{ lineHeight: 1 }}>Changes that may affect your workspace and it's behaviour</p>
            </div>
            <Divider />

            <div className="w-full flex">


                <div className="w-1/4 border-r-2">
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon style={{ minWidth: 38 }}>
                                <PersonRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Basic Profile" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon style={{ minWidth: 38 }}>
                                <CorporateFareRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Company" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon style={{ minWidth: 38 }}>
                                <PeopleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Members" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon style={{ minWidth: 38 }}>
                                <SettingsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </List>

                </div>
                <div className="w-full p-4 flex flex-wrap">
                    {renderContent()}

                </div>
            </div>


        </div>

    )
}

const mapStateToProps = state => {
    return { userInfo: state.userInfo };
};
export default connect(
    mapStateToProps,
)(Settings);

