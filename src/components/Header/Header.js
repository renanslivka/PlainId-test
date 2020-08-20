import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

export default () => (
  <div className="headerContainer">
    <img
      className="PlainID_logo"
      src="https://www.drushim.co.il/Logos/2173166/Header/636336474834762506.png"
      alt="logo"
    />
    <Avatar className="avatar">
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
  </div>
);
