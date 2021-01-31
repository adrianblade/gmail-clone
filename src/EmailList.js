import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import './EmailList.css'
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import KeyboardHideRoundedIcon from "@material-ui/icons/KeyboardHideRounded";
import Section from "./Section";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import EmailRow from "./EmailRow";

function MailList() {
    const [emails, setEmails] = useState([]);
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <RedoRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxRoundedIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleRoundedIcon} title="Social" color="#1A73E8" />
                <Section
                    Icon={LocalOfferRoundedIcon}
                    title="Promotions"
                    color="green"
                />
            </div>
            <div className="mailList__list">
                <EmailRow
                        key="Twitch"
                        id="aaa"
                        title="hi"
                        subject="hyrt"
                        description="fdsfsd"
                        time={new Date().toUTCString()}
                    />
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        key={id}
                        id={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default MailList
