import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Box, MenuItem, Divider, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      color='inherit'
      elevation={1}
      sx={{ width: '100%', height: '64px', position: 'fixed', top: 0 }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Box
          display='flex'
          justifyContent='end'
          width='100%'
        >
          <Box
            display='flex'
            alignItems='center'
          >
            <Avatar
              alt='Profile Picture'
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg'
              onClick={handleClick}
              sx={{ cursor: 'pointer' }}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 1,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate('/profile');
                }}
              >
                My Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
