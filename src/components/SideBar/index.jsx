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

function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/118732314_2757711467834121_3580985112925782279_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=HED7bpilSd0AX9suTuL&_nc_ht=scontent-sin6-2.xx&oh=5a3104f369650e8b3384b1c1ccbae686&oe=5F800FF4" title="Võ Tân"/>
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
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
