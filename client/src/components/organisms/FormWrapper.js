import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Box, Typography } from '@mui/material'
import { Element, Renderer } from '../atoms'
import { End, Center } from '../atoms/Link/CenterBox'
import { StyledLink } from '../atoms/Link/StyledLink'
import { passwordFieldList } from '../../constents/inputLevels'

const FormWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  title,
  labels,
  buttonLabel,
  linkText,
  linkTo,
  extra,
  onExternalSubmit,
  hideButton = false,
  elementfun,
  version,
  sx
}) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const getElements = (elementfun) => {
    return Object.keys(labels).map((key) => {
      let type = 'input'
      let props = {
        placeholder: labels[key],
        label: labels[key],
        name: key, 
        value: values[key],
        onChange: handleChange,
        required: false,
        error: touched[key] && Boolean(errors[key]),
        helperText: touched[key] && errors[key],
      }
      if (passwordFieldList.includes(key)) {
        type = 'password'
        props.type=type
      }
      if (elementfun) {
        return elementfun(key, type, props)
      } else {
        return { props, type }
      }
    })
  }
  const elements=getElements(elementfun)

  // const elements = Object.keys(labels).map((key) => {
  //   let props = {
  //     label: labels[key],
  //     name: key,
  //     value: values[key],
  //     onChange: handleChange,
  //     required: false,
  //     error: touched[key] && Boolean(errors[key]),
  //     helperText: touched[key] && errors[key],
  //   }
  //   let type = 'input'

  //   if (passwordFieldList.includes(key)) {
  //     type = 'password'
  //   }

  //   return { props, type }
  // })

  useEffect(() => {
    if (onExternalSubmit) {
      onExternalSubmit(handleSubmit)
    }
  }, [onExternalSubmit, handleSubmit])

  return (
    <div style={{maxWidth:"400px"}}>
    <Box
      component="form"
      onSubmit={handleSubmit}
      className='gradient-text'
      sx={{justifyContent:"center",alignItems:"center", mx: 'auto',...sx, }}
    >
      {title && (
        <Typography variant="h4"sx={{pb:5}} textAlign="center" gutterBottom>
          {title}
        </Typography>
      )}
      <Renderer elements={elements} version={version} />
      {extra && <End>{extra}</End>}
      {!hideButton && (
        <Element
          type="button"
          props={{ onClick: handleSubmit, label: buttonLabel, type: 'submit' }}
        />
      )}
      {linkText && (
        <Center>
          <StyledLink to={linkTo}>{linkText}</StyledLink>
        </Center>
      )}
    </Box>
    </div>

  )
}

export default FormWrapper
