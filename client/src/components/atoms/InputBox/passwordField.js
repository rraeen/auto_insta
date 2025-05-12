import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = (props) => {

  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      {...props}
      type='password'
    />
  );
};

export default PasswordField;
