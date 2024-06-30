import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CircularProgress,
  IconButton,
  Grid
} from '@mui/material';
import toast from 'react-hot-toast';
import useResumeStore from '../stores/resume.store';
import { useResumeForms } from '../hooks/useResumeForms';
import { Cancel } from '@mui/icons-material';

const Summary = () => {
  const { resumeInfo, updateResumeInfo } = useResumeStore();
  const { setEnableNext: enabledNext } = useResumeForms();
  const [summary, setSummary] = useState(resumeInfo.summery);
  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummaries, setAiGeneratedSummaries] = useState<string[]>([]);

  useEffect(() => {
    updateResumeInfo({ ...resumeInfo, summery: summary });
  }, [summary]);

  const generateSummaryFromAI = async () => {
    setLoading(true);
    setTimeout(() => {
      setAiGeneratedSummaries(aiResponse);
      setLoading(false);
    }, 2000);
  };
  const handleResetForm = () => {
    setSummary('');
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
            Summary
          </Typography>
          <IconButton onClick={handleResetForm}>
            <Cancel />
          </IconButton>
        </Grid>

        <Typography
          variant='body1'
          gutterBottom
        >
          Add Summary for your job title
        </Typography>
        <TextField
          fullWidth
          label='Summary'
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant='contained'
            color='primary'
            onClick={generateSummaryFromAI}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Generating...' : 'Generate Summary from AI'}
          </Button>
        </Box>
        {aiGeneratedSummaries.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant='h6'>Suggestions</Typography>
            {aiGeneratedSummaries.map((item, index) => (
              <Box
                key={index}
                onClick={() => setSummary(item)}
                sx={{
                  p: 2,
                  boxShadow: 1,
                  borderRadius: 1,
                  my: 2,
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 3 }
                }}
              >
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Summary;

const aiResponse = [
  'Experienced professional with a track record...',
  'Dedicated and detail-oriented individual...'
];
