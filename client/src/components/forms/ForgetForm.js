import React from 'react';
import { useFormik } from 'formik';
import { Element, Renderer } from '../atoms';
import { Box, Typography } from '@mui/material';
import { StyledLink } from '../atoms/Link/StyledLink';
import Center from '../atoms/Link/CenterBox';
import { forgotPasswordLabels } from '../../constents/inputLevels'; // Define these labels
import { forgotPasswordSchema } from '../organisms/schema/forgotPasswordSchema'; // Define validation schema

function ForgetForm() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      alert('Password reset link sent to your email!');
    },
  });

  const elements = Object.keys(forgotPasswordLabels).map((key) => {
    let type = 'input';
    let props = {
      label: forgotPasswordLabels[key],
      name: key,
      value: values[key],
      onChange: handleChange,
      required: true,
      error: touched[key] && Boolean(errors[key]),
      helperText: touched[key] && errors[key],
    };
    return { type, props };
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Forgot Password
      </Typography>
      <Renderer elements={elements} />
      <Element type="button" props={{ onClick: handleSubmit, label: "Send Reset Link" }} />
      <Center>
        <StyledLink to="/login">Back to Login</StyledLink>
      </Center>
    </Box>
  );
}

export default ForgetForm;
