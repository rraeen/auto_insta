import React from 'react'
import { useFormik } from 'formik'
import { Element, Renderer } from '../atoms'
import { signUpState } from '../../constents/states'
import { Box, Typography } from '@mui/material'
import { StyledLink } from '../atoms/Link/StyledLink'
import {Center} from '../atoms/Link/CenterBox'
import { signUpLabels } from '../../constents/inputLevels'
import { signUpschema } from '../organisms/schema/signUpSchema'

function SignupForm() {
  const { values,errors,touched, handleChange,handleSubmit } = useFormik({
    initialValues: structuredClone(signUpState),
    validationSchema: signUpschema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
 

  const elements = Object.keys(signUpLabels).map((o) => {
    let type = 'input'
    let props = {
      label: signUpLabels[o],
      name: o,
      value: values[o],
      onChange: handleChange,
      required: false,
      error:touched?.[o] && Boolean(errors?.[o]),
      helperText:touched[o] &&errors[o],
    }
    return { type, props }
  })

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Sign Up
      </Typography>
      <Renderer elements={elements} />
      <Element type='button' props={{onClick:handleSubmit,label:"Submit"}}/>
      <Center>
      <StyledLink to="/login">Login</StyledLink>
      </Center>
    </Box>
  )
}

export default SignupForm
