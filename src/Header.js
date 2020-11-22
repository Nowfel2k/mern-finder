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
          src="https://lh3.googleusercontent.com/proxy/xENTK-WrHrtfMxZFWYkMkoaWiD648pOoPL_PMnMA1r2byYatsyvSKC5oCaUdv_C6ZAEyIzSJ4FpBugFOnrzbrxwyaeujKDIdOISGvciOPaZoYSsc9nJoEkkpLyVKTwTtQKXD"
        />
      </IconButton>

      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
