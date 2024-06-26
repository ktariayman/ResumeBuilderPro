import React, { useState } from 'react';
import { Button, Box, Grid, CircularProgress } from '@mui/material';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import PersonalDetail from './PersonalDetail';
import Summary from './Summary';
import Experience from './Experience';
import Skills from './Skills';

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams<{ resumeId: string }>();
  const navigate = useNavigate();
  const handleNext = () => {
    if (activeFormIndex < 4) {
      setActiveFormIndex(activeFormIndex + 1);
    } else {
      navigate(`/pdf-view`);
    }
  };
  return (
    <Box>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 3 }}
      >
        <Grid item>
          <Grid
            container
            spacing={2}
          >
            {activeFormIndex > 1 && (
              <Grid item>
                <Button
                  size='small'
                  onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                >
                  Previous
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button
                disabled={!enableNext}
                size='small'
                onClick={handleNext}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {activeFormIndex === 1 && <PersonalDetail enabledNext={setEnableNext} />}
      {activeFormIndex === 2 && <Summary enabledNext={setEnableNext} />}
      {activeFormIndex === 3 && <Experience />}
      {activeFormIndex === 4 && <Skills />}
      {activeFormIndex === 5 && <Navigate to={`/my-resume/${resumeId}/view`} />}
    </Box>
  );
};

export default FormSection;
