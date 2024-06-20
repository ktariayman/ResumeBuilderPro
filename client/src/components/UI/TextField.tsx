import React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TextFieldWrapperProps {
  field?: string;
}

const TextField: React.FC<TextFieldWrapperProps & TextFieldProps> = ({ field, ...props }) => {
  return (
    <Box>
      {field && (
        <Typography
          variant='subtitle1'
          gutterBottom
        >
          {field}
        </Typography>
      )}
      <MuiTextField {...props} />
    </Box>
  );
};

export default TextField;
