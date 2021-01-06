import { Button } from '@material-ui/core';
import React from 'react';
import './SideBar.css';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SideBarOption from "./SideBarOption"
import StarIcon from "@material-ui/icons/Star";


function SideBar() {
    return (
        <div className="sidebar">
            <Button 
            startIcon={<AddIcon fontSize="large"/>}
            className="sidebar__compose"
            >
                Compose
            </Button>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SideBarOption Icon={StarIcon} title="Starred" number={54}/>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54}/>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54}/>

        </div>
    );
}

export default SideBar;
