import React from "react";
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB6ie9hmJmm8iVnaoaEx3JL3IZpg2f3ipaoQ&usqp=CAU"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
      <div className="header__center">
          <div className="header__option header__option--active">
              <HomeIcon fontSize="large"/>
          </div>
          <div className="header__option">
              <FlagIcon fontSize="large"/>
          </div>
          <div className="header__option">
              <SubscriptionOutlinedIcon fontSize="large"/>
          </div>
          <div className="header__option">
              <StorefrontOutlinedIcon fontSize="large"/>
          </div>
          <div className="header__option">
              <SupervisedUserCircleIcon fontSize="large"/>
          </div>
      </div>
      <div className="header__right">
          <div className="header__info">
              <Avatar />
              <h4>Võ Tân</h4>
          </div>
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon/>
          </IconButton>
          <IconButton>
              <NotificationActiveIcon/>
          </IconButton>
          <IconButton>
              <ExpandMoreIcon/>
          </IconButton>
      </div>
    </div>
  );
}

export default Header;
