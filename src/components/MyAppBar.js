import { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Button, Stack, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




export const MyAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='fixed' >
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontFamily: 'Lato' }}>My App</Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resource
          </Button>
          <Button color='inherit' endIcon={<LoginIcon />}>Login</Button>
        </Stack>
        <Menu id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'arialabelledby': 'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>News</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
          <MenuItem onClick={handleClose}>Market</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

