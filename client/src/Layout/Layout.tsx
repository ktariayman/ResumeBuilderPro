// src/Layout/Layout.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Box
      display='flex'
      minHeight='100vh'
    >
      <Sidebar isExpanded={isSidebarExpanded} />
      <Box
        flexGrow={1}
        marginLeft={isSidebarExpanded ? '250px' : '80px'}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <Box
          component='main'
          padding={3}
          sx={{ marginTop: '64px' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
