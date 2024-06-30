import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, Box, IconButton } from '@mui/material';
import { toast } from 'react-hot-toast';
import { Delete as DeleteIcon } from '@mui/icons-material';
import useResumeStore from '../stores/resume.store';
import { IExperience } from '../ts/interfaces';

const Experience = () => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const [experienceList, setExperienceList] = useState<IExperience[]>(resumeInfo.experience);
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

  const removeExperience = (indexToRemove: number) => {
    setExperienceList(experienceList.filter((_, index) => index !== indexToRemove));
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
              container
              justifyContent='flex-end'
            >
              <IconButton onClick={() => removeExperience(index)}>
                <DeleteIcon color='error' />
              </IconButton>
            </Grid>
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
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
