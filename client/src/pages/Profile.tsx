import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Modal } from '@mui/material';

const Profile = () => {
  const [cvFile, setCvFile] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setCvFile(URL.createObjectURL(file));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding={2}
    >
      <Avatar
        alt='Profile Picture'
        src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg'
        sx={{ width: 100, height: 100 }}
      />
      <Typography
        variant='h5'
        sx={{ marginTop: 2 }}
      >
        Your Name
      </Typography>
      <Typography
        variant='body1'
        sx={{ marginTop: 1 }}
      >
        Your Email: youremail@example.com
      </Typography>
      <Typography
        variant='body2'
        sx={{ marginTop: 1, textAlign: 'center' }}
      >
        Some other profile details...
      </Typography>

      <Button
        variant='contained'
        component='label'
        sx={{ marginTop: 2 }}
      >
        Upload CV
        <input
          type='file'
          hidden
          onChange={handleFileUpload}
          accept='.pdf,.txt'
        />
      </Button>
      {cvFile && (
        <Box
          height={400}
          width='80%'
          maxWidth={500}
          my={4}
          display='flex'
          alignItems='center'
          justifyContent='center'
          p={2}
          sx={{
            border: '2px solid grey',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <iframe
            title='resume-pdf'
            src={cvFile}
            width='100%'
            height='100%'
            style={{ border: 'none' }}
          />
        </Box>
      )}
      {cvFile && (
        <>
          <Button
            variant='outlined'
            onClick={handleOpenModal}
            sx={{ marginTop: 2 }}
          >
            View Uploaded CV
          </Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby='pdf-viewer-modal'
            aria-describedby='pdf-viewer-description'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50px',
                left: '50px',
                right: '50px',
                bottom: '50px',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                overflow: 'auto',
                borderRadius: '8px'
              }}
            >
              <iframe
                title='resume-pdf'
                src={cvFile}
                width='100%'
                height='100%'
                style={{ border: 'none' }}
              />
            </Box>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default Profile;
