import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import useAuthStore from '../../stores/auth.store';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const register = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && name) {
      const user = {
        id: new Date().getTime().toString(),
        name: name,
        email: email
      };
      register(user);
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
          Register
        </Typography>
        <Box
          component='form'
          onSubmit={handleRegister}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            variant='outlined'
            placeholder='Name'
            type='text'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            variant='outlined'
            placeholder='Email'
            type='email'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            variant='outlined'
            placeholder='Password'
            type='password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            required
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            Register
          </Button>
        </Box>
        <Typography
          variant='body2'
          sx={{ textAlign: 'center', mt: 2 }}
        >
          Already have an account?{' '}
          <Link
            component={RouterLink}
            to='/'
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
