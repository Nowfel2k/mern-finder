import React from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import PersonButton from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonButton className="header__icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <img
          alt="logo "
          className="header__logo"
          src="https://i.ibb.co/G2Y0jpj/logo512.png"
        />
      </IconButton>

      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
