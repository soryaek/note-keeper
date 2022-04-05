import React from "react";
import NoteAddTwoToneIcon from "@material-ui/icons/NoteAddTwoTone";

function Header() {
  return (
    <header>
      <h1>
        {/* ListAltIcon is an import package */}
        <NoteAddTwoToneIcon />
        Note Keeper
      </h1>
    </header>
  );
}

export default Header;
