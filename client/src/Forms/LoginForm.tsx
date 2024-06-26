import React, { useState } from 'react';
import { Button, Box, Typography, Container, Paper, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';
import { TextField } from '../components';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const user = {
        id: '1',
        name: 'John Doe',
        email: email
      };
      login(user);
      navigate('/');
    }
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <Paper
        elevation={3}
        sx={{ padding: 4 }}
      >
        <Typography
          component='h1'
          variant='h5'
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Login
        </Typography>
        <Box
          component='form'
          onSubmit={handleLogin}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            field='Email'
            variant='outlined'
            placeholder='Enter your Email here'
            type='email'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='off'
            autoFocus
          />
          <TextField
            autoComplete='off'
            field='password'
            variant='outlined'
            placeholder='Enter your Password here'
            type='password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            Login
          </Button>
        </Box>
        <Typography
          variant='body2'
          sx={{ textAlign: 'center', mt: 2 }}
        >
          Don’t have an account?{' '}
          <Link
            component={RouterLink}
            to='/register'
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginForm;
