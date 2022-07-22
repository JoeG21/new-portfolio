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
    <div className='navbar-bnt'>
      <Button
        // id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {page === '/' ? 'Home'
          : page === '/projects' ? 'Projects'
          : page === '/blogs' ? 'Blogs'
          : page === '/contact' ? 'Contact'
          : console.log('menu')
        }
      </Button>
      <Menu
        className="menu-container"
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
        <MenuItem className='menu-item-c' onClick={handleClose}><Link className='menu-item' to='/'> Home </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/projects'> Projects </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/blogs'> Blogs </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/contact'> Contact </Link></MenuItem>
      </Menu>
    </div>
  )
}

export default MenuContainer