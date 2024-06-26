import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Box, Container, Typography, Paper, Divider, Chip } from '@mui/material';
import useResumeStore from '../stores/resume.store';

const PdfViewer = () => {
  const { resumeInfo } = useResumeStore();
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Resume',
    onAfterPrint: () => alert('PDF generated successfully!')
  });

  return (
    <>
      <Container
        ref={componentRef}
        component={Paper}
        elevation={6}
        sx={{ p: 4, textAlign: 'center', backgroundColor: 'white', color: 'black', mt: 4, mb: 4 }}
      >
        <div
          style={{
            display: 'flex',
            gap: '4px',
            flexDirection: 'column'
          }}
        >
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
          >
            {resumeInfo.firstName} {resumeInfo.lastName}
          </Typography>
          <Typography
            variant='h5'
            color='textSecondary'
          >
            {resumeInfo.jobTitle}
          </Typography>
          <Typography
            variant='body1'
            sx={{ mt: 1 }}
          >
            {resumeInfo.address}
          </Typography>
          <Typography variant='body1'>
            {resumeInfo.phone} | {resumeInfo.email}
          </Typography>
        </div>
        <Divider sx={{ my: 2 }} />
        <Typography variant='h6'>Professional Summary</Typography>
        <Typography variant='body2'>{resumeInfo.summery}</Typography>
        <Typography
          variant='h6'
          sx={{ mt: 2 }}
        >
          Experience
        </Typography>
        {resumeInfo.experience.map((exp: any, index: any) => (
          <Box
            key={index}
            sx={{ mt: 1 }}
          >
            <Typography variant='h6'>
              {exp.title} at {exp.companyName}
            </Typography>
            <Typography variant='body2'>
              {exp.city}, {exp.state}
            </Typography>
            <Typography variant='body2'>
              {exp.startDate} - {exp.endDate}
            </Typography>
            <Typography variant='body2'>{exp.workSummery}</Typography>
          </Box>
        ))}
        <Typography
          variant='h6'
          sx={{ mt: 2 }}
        >
          Skills
        </Typography>
        {resumeInfo.skills.map((skill: any, index: any) => (
          <Chip
            key={index}
            label={`${skill.name}: ${skill.rating}/5`}
            variant='outlined'
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
        <Typography
          variant='h6'
          sx={{ mt: 2 }}
        >
          Education
        </Typography>
        {resumeInfo.education.map((edu: any, index: any) => (
          <Box key={index}>
            <Typography variant='h6'>{edu.institution}</Typography>
            <Typography variant='body2'>{edu.degree}</Typography>
            <Typography variant='body2'>
              {edu.startDate} - {edu.endDate}
            </Typography>
          </Box>
        ))}
      </Container>

      <Button
        variant='contained'
        color='primary'
        onClick={handlePrint}
        sx={{ mt: 2 }}
      >
        Print / Save to PDF
      </Button>
    </>
  );
};

export default PdfViewer;

// cv template :

// <div
// ref={componentRef}
// style={{
//   display: 'grid',
//   gridTemplateColumns: '1fr 2fr',
//   maxWidth: '1000px',
//   minHeight: '1000px',
//   margin: '50px',
//   gap: '1rem',
//   backgroundColor: '#fff'
// }}
// >
// {/* Left Side */}
// <div
//   style={{
//     padding: '40px',
//     backgroundColor: '#003147',
//     color: '#fff'
//   }}
// >
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       paddingBottom: '20px',
//       borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
//     }}
//   >
//     <div
//       style={{
//         width: '200px',
//         height: '200px',
//         borderRadius: '50%',
//         overflow: 'hidden'
//       }}
//     >
//       <img
//         src='https://scontent.ftun20-1.fna.fbcdn.net/v/t1.6435-9/54278828_1068658690008961_7096390552681185280_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7qmDMnnpysQQ7kNvgE1FEId&_nc_ht=scontent.ftun20-1.fna&oh=00_AYCHooamee5wfiB-8SB24oslk42qvd3q8RTMs8FYHbP9Gw&oe=66A0160D'
//         alt=''
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover'
//         }}
//       />
//     </div>
//     <h2
//       style={{
//         marginTop: '20px',
//         textAlign: 'center',
//         textTransform: 'uppercase',
//         fontWeight: '600',
//         lineHeight: '1.4em',
//         fontSize: '1.5em'
//       }}
//     >
//       Ktari Ayman
//       <br />
//       <span style={{ fontSize: '0.6em', fontWeight: '200' }}>Front End Web Developer</span>
//     </h2>
//   </div>
//   {/* Contact Info */}
//   <div
//     style={{
//       paddingTop: '40px',
//       borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
//     }}
//   >
//     <h3
//       style={{
//         textTransform: 'uppercase',
//         fontWeight: '600',
//         marginBottom: '20px',
//         fontSize: '16px'
//       }}
//     >
//       Contact Info
//     </h3>
//     <ul style={{ listStyle: 'none', padding: 0 }}>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         <i
//           className='fa fa-phone'
//           aria-hidden='true'
//           style={{ marginRight: '10px' }}
//         ></i>
//         +216 44444420
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         <i
//           className='fa fa-envelope-o'
//           aria-hidden='true'
//           style={{ marginRight: '10px' }}
//         ></i>
//         aymanktari31@gmail.com
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         <i
//           className='fa fa-globe'
//           aria-hidden='true'
//           style={{ marginRight: '10px' }}
//         ></i>
//         <a
//           href='https://ktariayman.netlify.app/'
//           target='_blank'
//           style={{ color: '#fff' }}
//         >
//           ktariayman.netlify.app/
//         </a>
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         <i
//           className='fa fa-linkedin'
//           aria-hidden='true'
//           style={{ marginRight: '10px' }}
//         ></i>
//         <a
//           href='https://www.linkedin.com/in/ktariayman/'
//           target='_blank'
//           style={{ color: '#fff' }}
//         >
//           linkedin.com/in/ktariayman/
//         </a>
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         <i
//           className='fa fa-map-marker'
//           aria-hidden='true'
//           style={{ marginRight: '10px' }}
//         ></i>
//         Mharza, Sfax, Tunisia
//       </li>
//     </ul>
//   </div>
//   {/* Competences */}
//   <div
//     style={{
//       paddingTop: '40px',
//       borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
//     }}
//   >
//     <h3
//       style={{
//         textTransform: 'uppercase',
//         fontWeight: '600',
//         marginBottom: '20px',
//         fontSize: '16px'
//       }}
//     >
//       Compétences
//     </h3>
//     <ul style={{ listStyle: 'none', padding: 0 }}>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         Communication
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         Creativité
//       </li>
//       <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//         Leadership
//       </li>
//     </ul>
//   </div>
// </div>
// {/* Right Side */}
// <div
//   style={{
//     padding: '40px',
//     backgroundColor: '#fff',
//     color: '#003147'
//   }}
// >
//   <div style={{ marginBottom: '50px' }}>
//     <h2
//       style={{
//         textTransform: 'uppercase',
//         letterSpacing: '1px',
//         marginBottom: '10px',
//         color: '#003147',
//         fontSize: '24px'
//       }}
//     >
//       Profile Personnel
//     </h2>
//     <p>
//       Je suis un étudiant Tunisien, j’ai 21 ans, j’ai obtenu mon diplôme de baccalauréat en
//       mathématique au Lycée 9 Avril 1938 Sfaxien,
//       <br />
//       <br />
//       En 2020, j’ai commencé mes études en licence en sciences de l’informatique à la
//       faculté des sciences de Sfax
//       <br />
//       <br />
//       Je travaille actuellement sur l'amélioration de mes compétences en tant que
//       développeur Web en utilisant frontendmentor
//     </p>
//   </div>
// </div>
// </div>
