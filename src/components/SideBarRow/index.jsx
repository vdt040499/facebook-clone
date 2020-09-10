import React from "react";
import "./SideBarRow.css";
import { Avatar } from "@material-ui/core";

function SideBarRow(props) {
  let { src, Icon, title } = props;
	
	return (
    <div className="sidebarrow">
			{src && <Avatar src={src}/>}
			{Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
