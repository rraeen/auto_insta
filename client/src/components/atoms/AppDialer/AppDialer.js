import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
} from '@mui/material'
import { Element } from '..'
import { useTheme } from '@emotion/react'
import CloseIcon from '@mui/icons-material/Close';

function AppDialer({
  children,
  open,
  handleClose,
  handleSave,
  title,
  titleProps,
  bottomButton,
  cancelLabel='Cancel',
  saveLabel="Submit",
  contentProps={sx:{p:0,px:2}},
  dialogProps,
  actioProps
  
}) {
  const {palette}=useTheme()
  return (
    <Box>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth {...dialogProps}>
        <DialogTitle {...titleProps}>{title}
        {/* {handleClose && (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: -15,              
                right: -15,  
                zIndex: 1300, 
                borderRadius:"100%",
                background:"#000",
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon sx={{fontSize:"0.8rem"}} />
            </IconButton>
          )} */}
        </DialogTitle>
        <DialogContent {...contentProps}>{children}</DialogContent>
        <DialogActions {...actioProps}>
         {handleClose &&  <Element type="simplebutton" props={{ onClick: handleClose, label: cancelLabel,var:'s',customStyle:{color:palette.o}}}/>}
         {handleSave &&  <Element type="simplebutton" props={{ onClick: handleSave, label: saveLabel,type:"submit",var:"p"}}/>}
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AppDialer
