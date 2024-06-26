import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';
import { toast } from 'react-hot-toast';
import useResumeStore from '../stores/resume.store';

const Experience = () => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const [experienceList, setExperienceList] = useState(resumeInfo.experience);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateResumeInfo({ ...resumeInfo, experience: experienceList });
  }, [experienceList]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newExperienceList = [...experienceList];
    const { name, value } = e.target;
    newExperienceList[index] = { ...newExperienceList[index], [name]: value };
    setExperienceList(newExperienceList);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummery: ''
      }
    ]);
  };

  const removeExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    // Placeholder for API call
    setTimeout(() => {
      toast.success('Experience updated');
      setLoading(false);
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
          Professional Experience
        </Typography>
        <Typography
          variant='body1'
          gutterBottom
        >
          Add Your previous Job experience
        </Typography>
        {experienceList.map((exp, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Position Title'
                name='title'
                value={exp.title}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Company Name'
                name='companyName'
                value={exp.companyName}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='City'
                name='city'
                value={exp.city}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='State'
                name='state'
                value={exp.state}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                type='date'
                label='Start Date'
                name='startDate'
                InputLabelProps={{ shrink: true }}
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                type='date'
                label='End Date'
                name='endDate'
                InputLabelProps={{ shrink: true }}
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label='Work Summary'
                name='workSummery'
                value={exp.workSummery}
                onChange={(e) => handleChange(index, e)}
              />
            </Grid>
          </Grid>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant='outlined'
              onClick={addExperience}
            >
              + Add More Experience
            </Button>
            <Button
              variant='outlined'
              onClick={removeExperience}
            >
              - Remove Experience
            </Button>
          </Box>
          <Button
            variant='contained'
            color='primary'
            onClick={onSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
