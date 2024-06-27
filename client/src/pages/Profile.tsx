import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding={2}
    >
      <Avatar
        alt='Profile Picture'
        src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg'
        sx={{ width: 100, height: 100 }}
      />
      <Typography
        variant='h5'
        sx={{ marginTop: 2 }}
      >
        Your Name
      </Typography>
      <Typography
        variant='body1'
        sx={{ marginTop: 1 }}
      >
        Your Email: youremail@example.com
      </Typography>
      <Typography
        variant='body2'
        sx={{ marginTop: 1, textAlign: 'center' }}
      >
        Some other profile details...
      </Typography>
    </Box>
  );
};

export default Profile;
