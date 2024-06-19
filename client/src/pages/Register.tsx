import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from '../Forms/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      bgcolor='#f5f5f5'
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
