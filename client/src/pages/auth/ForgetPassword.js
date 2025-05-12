import React from 'react'
import FormWrapper from '../../components/organisms/FormWrapper'
import { forgetProps } from '../../components/molecules/props'
import { resetPassword } from '../../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { centerBox } from '../../styles/atomStyle'
import GlassBorder from './GlassBorder'

function ForgetPassword() {
  const dis = useDispatch()
  const nav=useNavigate()
  const onsubmit = async (v) => {
    await dis(resetPassword(v))
    nav("/")
  }
 
  return( <GlassBorder>
   <FormWrapper {...forgetProps(onsubmit)} />

  </GlassBorder>)
}

export default ForgetPassword
