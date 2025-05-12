import React from 'react'
import FormWrapper from '../../components/organisms/FormWrapper'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/reducers/userReducer'
import { registerProps } from '../../components/molecules/props'
import { useNavigate } from 'react-router-dom'
import { centerBox } from '../../styles/atomStyle'
import { Box } from '@mui/material'
import GlassBorder from './GlassBorder'

function Signup() {
  const dis = useDispatch()
  const nav = useNavigate()

  const onsubmit = async (v) => {
    await dis(registerUser(v))
    nav('/')
  }

  return (
    <GlassBorder>
      <FormWrapper {...registerProps(onsubmit)} />
   </GlassBorder>

   
  )
}

export default Signup
