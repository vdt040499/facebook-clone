import React from 'react';
import './SideBar.css';
import SideBarRow from '../SideBarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../../StateProvider';

function SideBar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SideBarRow src={user.photoURL} title={user.displayName}/>
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Info Center"/>
            <SideBarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow Icon={ChatIcon} title="Messenger"/>
            <SideBarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Videos"/> 
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Videos"/> 
        </div>
    )
}

export default SideBar
