import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/generate-resume');
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
    >
      <Typography
        variant='h4'
        marginBottom={3}
      >
        Welcome to the Home Page
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={handleButtonClick}
      >
        Generate a Resume
      </Button>
    </Box>
  );
};

export default Home;
