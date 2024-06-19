import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../Forms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      bgcolor='#f5f5f5'
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
