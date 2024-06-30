import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Grid, IconButton } from '@mui/material';
import useResumeStore, { RESUME_INFO_DEFAULT } from '../stores/resume.store';
import { useResumeForms } from '../hooks/useResumeForms';
import CancelIcon from '@mui/icons-material/Cancel';

const PersonalDetail = () => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const { setEnableNext: enabledNext } = useResumeForms();
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

  const handleResetForm = () => {
    setFormData({
      ...RESUME_INFO_DEFAULT,
      skills: resumeInfo.skills,
      experience: resumeInfo.experience,
      education: resumeInfo.education
    });
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
        <Grid
          container
          spacing={2}
          sx={{ mt: 2 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Typography
            variant='h5'
            component='h2'
            gutterBottom
          >
            Personal Detail
          </Typography>
          <IconButton onClick={handleResetForm}>
            <CancelIcon />
          </IconButton>
        </Grid>
        <Typography
          variant='body1'
          gutterBottom
        >
          Get Started with the basic information
        </Typography>

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
      </Box>
    </Container>
  );
};

export default PersonalDetail;
