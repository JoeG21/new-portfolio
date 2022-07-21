import React from 'react'
import { useState } from 'react';

import {
  Link
} from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuContainer = (props) => {
  const page = props.location
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {page === '/' ? 'Home'
          : page === '/projects' ? 'Projects'
            : console.log('menu')
        }
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={e => handleClose(e)}><Link to='/' value='Home' name='Home'> Home </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/projects' value='Projects' name='Projects'> Projects </Link></MenuItem>
      </Menu>
    </>
  )
}

export default MenuContainer