// src/components/Sidebar.tsx
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isExpanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded }) => {
  const navigate = useNavigate();

  const sidebarWidth: number = isExpanded ? 250 : 80;

  return (
    <Box
      sx={{
        width: sidebarWidth,
        transition: 'width 0.3s ease',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        zIndex: 1100,
        paddingTop: '64px'
      }}
    >
      <List>
        <ListItem
          button
          onClick={() => navigate('/')}
        >
          <ListItemIcon>
            <PersonIcon style={{ color: 'white' }} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary='Home' />}
        </ListItem>
        <ListItem
          button
          onClick={() => navigate('/generate-resume')}
        >
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary='Resume Builder' />}
        </ListItem>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
      </List>
    </Box>
  );
};

export default Sidebar;
