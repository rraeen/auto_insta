// src/components/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ type = 'button', label, color = 'primary', fullWidth = true, onClick }) => {
  return (
    <Button
    className='gradient-button'
      type={type}
      fullWidth={fullWidth}
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ mt: 3, textTransform: 'none',color:"#fff" , borderRadius:"10px"}}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
