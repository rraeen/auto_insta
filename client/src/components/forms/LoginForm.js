import React from 'react'
import { useFormik } from 'formik'
import { Element, Renderer } from '../atoms'
import { loginState, signUpState } from '../../constents/states'
import { Box, Typography } from '@mui/material'
import { StyledLink } from '../atoms/Link/StyledLink'
import Center from '../atoms/Link/CenterBox'
import { loginLabels } from '../../constents/inputLevels'
import { loginSchema } from '../organisms/schema/loginSchema'

function LoginForm() {
  const { values,errors,touched, handleChange, handleSubmit } = useFormik({
    initialValues: structuredClone(loginState),
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
 

  const elements = Object.keys(loginLabels).map((o) => {
    let type = 'input'
    let props = {
      label: loginLabels[o],
      name: o,
      value: values[o],
      onChange: handleChange,
      // error:Boolean(errors?.[o]),
      error:touched?.[o] && Boolean(errors?.[o]),
      helperText:touched[o] &&errors[o],
      required: false,
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
        Welcome back
      </Typography>

      <Renderer elements={elements} />
      <Element
        type="button"
        props={{ onClick: handleSubmit, label: 'Submit' }}
      />
      <Center>
        <StyledLink to="/sign-up">Sign upp</StyledLink>
      </Center>
    </Box>
  )
}

export default LoginForm
