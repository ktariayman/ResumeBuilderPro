import React, { useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
const html2pdf: any = require('html2pdf.js');

const GenerateResume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const generatePdf = () => {
    if (resumeRef.current) {
      const element = resumeRef.current;
      const options = {
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf()
        .from(element)
        .set(options)
        .outputPdf('dataurlstring')
        .then((url: string) => {
          setPdfUrl(url);
        });
    }
  };

  return (
    <Box
      display='grid'
      gridTemplateColumns='1fr 1fr'
      gap={2}
      padding={3}
      minHeight='100vh'
    >
      {/* Column for PDF preview */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        border='1px solid #ccc'
        padding={2}
        overflow='auto'
      >
        <Typography
          variant='h4'
          marginBottom={3}
        >
          PDF Preview
        </Typography>
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title='PDF Preview'
            style={{ width: '100%', height: '80vh', border: 'none' }}
          />
        ) : (
          <Typography variant='body1'>Generate a PDF to preview it here.</Typography>
        )}
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        border='1px solid #ccc'
        padding={2}
      >
        <Typography
          variant='h4'
          marginBottom={3}
        >
          PDF Generation Page
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={generatePdf}
        >
          Generate PDF
        </Button>

        <div
          ref={resumeRef}
          style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '20mm',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant='h5'>John Doe</Typography>
            <Typography variant='subtitle1'>Software Developer</Typography>
            <Typography variant='body2'>
              Email: johndoe@example.com | Phone: (123) 456-7890
            </Typography>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Typography variant='h6'>Summary</Typography>
            <Typography variant='body2'>
              Experienced software developer with a background in full-stack development and a
              passion for creating innovative solutions.
            </Typography>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Typography variant='h6'>Education</Typography>
            <Typography variant='body2'>
              B.Sc. in Computer Science, University of Example (2020)
            </Typography>
            <Typography variant='body2'>
              M.Sc. in Software Engineering, Example Institute of Technology (2022)
            </Typography>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Typography variant='h6'>Experience</Typography>
            <Typography variant='body2'>
              Frontend Developer, Tech Solutions Inc. (2020-2021)
              <br />
              Developed and maintained web applications using React and TypeScript.
            </Typography>
            <Typography variant='body2'>
              Full Stack Developer, Innovatech (2021-2023)
              <br />
              Built and optimized full-stack solutions using Node.js, Express, and MongoDB.
            </Typography>
          </div>

          <div>
            <Typography variant='h6'>Skills</Typography>
            <Typography variant='body2'>
              JavaScript, React, Node.js, TypeScript, HTML, CSS, MongoDB
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default GenerateResume;
