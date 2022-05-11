import './NavBar.css';
import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu as NavMenu,
  MenuItem,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';

export const NavBar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar>
      <div className="toolbar-root">
        <IconButton
          className="menu-icon"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <Menu />
        </IconButton>
        <NavMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem>Racers</MenuItem>
          <MenuItem>Races</MenuItem>
        </NavMenu>
        <Button color="inherit">Login</Button>
      </div>
    </AppBar>
  );
};

export default NavBar;
