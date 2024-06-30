import React from 'react';
import { Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonalDetail from './PersonalDetail';
import Summary from './Summary';
import Experience from './Experience';
import Skills from './Skills';
import { useResumeForms } from '../hooks/useResumeForms';

export enum ResumeForm {
  Personal = 1,
  Summary,
  Experience,
  Skills
}

const RESUME_FORM_MAP: Record<ResumeForm, React.ReactNode> = {
  [ResumeForm.Personal]: <PersonalDetail />,
  [ResumeForm.Summary]: <Summary />,
  [ResumeForm.Experience]: <Experience />,
  [ResumeForm.Skills]: <Skills />
};
export const renderResumeForm = (activeFormIndex: ResumeForm) => RESUME_FORM_MAP[activeFormIndex];

const ResumeBuilder = () => {
  const { activeFormIndex, enableNext, handleNext, prev } = useResumeForms();
  const currentResumeForm = renderResumeForm(activeFormIndex);
  return (
    <Box>
      {currentResumeForm}
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 3, maxWidth: '900px', justifyContent: 'end', margin: 'auto', padding: '12px' }}
      >
        <Grid item>
          <Grid
            container
            spacing={2}
          >
            {activeFormIndex > ResumeForm.Personal && (
              <Grid item>
                <Button
                  size='small'
                  onClick={prev}
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
                {activeFormIndex < ResumeForm.Skills ? 'Next' : 'Finish'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeBuilder;
