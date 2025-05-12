import { useTheme } from '@emotion/react'
import { Button } from '@mui/material'
import React from 'react'

function SimpleButton(props) {
    const {palette}=useTheme()
  const bg= palette[props.var]

  return (
    <Button
          sx={{
            textTransform: 'none',
            bgcolor:bg,
            color: '#fff',
            fontSize: '0.8rem',
            px: 1,
            py: 0.5,
            ...props.customStyle
          }}
            {...props}
        >
         {props?.label||""}
        </Button>
  )
}

export default SimpleButton
