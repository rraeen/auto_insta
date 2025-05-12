import React from 'react';
import { Box } from '@mui/material'; // Ensure you import Box from MUI

function Center({ children }) {
  return (
    <Box
      sx={{
        p:2,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
}
function End({ children }) {
  return (
    <Box
      sx={{
        p:2,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export  {Center,End};
