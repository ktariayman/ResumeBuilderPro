import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  CircularProgress,
  IconButton
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import toast from 'react-hot-toast';
import useResumeStore, { RESUME_INFO_DEFAULT } from '../stores/resume.store';
import CancelIcon from '@mui/icons-material/Cancel';

const Skills = () => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const [skillsList, setSkillsList] = useState(resumeInfo.skills);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateResumeInfo({ ...resumeInfo, skills: skillsList });
  }, [skillsList]);

  const handleChange = (index: number, name: string, value: string | number) => {
    const newSkillsList = [...skillsList];
    newSkillsList[index] = { ...newSkillsList[index], [name]: value };
    setSkillsList(newSkillsList);
  };

  const addSkill = () => {
    setSkillsList([...skillsList, { name: '', rating: 0 }]);
  };

  const removeSkill = (index: number) => {
    const updatedSkillsList = [...skillsList];
    updatedSkillsList.splice(index, 1);
    setSkillsList(updatedSkillsList);
  };

  const handleResetForm = () => {
    setSkillsList([]);
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
            Skills
          </Typography>
          <IconButton onClick={handleResetForm}>
            <CancelIcon />
          </IconButton>
        </Grid>

        <Typography
          variant='body1'
          gutterBottom
        >
          Add Your top professional key skills
        </Typography>
        {skillsList.map((skill, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}
          >
            <Grid
              item
              xs={12}
              container
              justifyContent='flex-end'
            >
              <IconButton onClick={() => removeSkill(index)}>
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
                label='Skill Name'
                value={skill.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label='Rating'
                type='number'
                value={skill.rating}
                onChange={(e) => handleChange(index, 'rating', e.target.value)}
              />
            </Grid>
          </Grid>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant='outlined'
              onClick={addSkill}
            >
              + Add More Skill
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
