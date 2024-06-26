import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  CircularProgress
} from '@mui/material';
import toast from 'react-hot-toast';
import useResumeStore from '../stores/resume.store';
import { log } from 'util';

const PersonalDetail = ({ enabledNext }: { enabledNext: (value: boolean) => void }) => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const [formData, setFormData] = useState(resumeInfo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    enabledNext(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    updateResumeInfo({
      ...resumeInfo,
      [name]: value
    });
  };

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      toast.success('Details updated');
      enabledNext(true);
    }, 1000);
  };

  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          borderTop: 3,
          borderColor: 'primary.main',
          mt: 3
        }}
      >
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          Personal Detail
        </Typography>
        <Typography
          variant='body1'
          gutterBottom
        >
          Get Started with the basic information
        </Typography>
        <form onSubmit={onSave}>
          <Grid
            container
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='First Name'
                name='firstName'
                value={formData.firstName}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Last Name'
                name='lastName'
                value={formData.lastName}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label='Job Title'
                name='jobTitle'
                value={formData.jobTitle}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label='Address'
                name='address'
                value={formData.address}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Phone'
                name='phone'
                value={formData.phone}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Email'
                name='email'
                value={formData.email}
                required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={false}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default PersonalDetail;
