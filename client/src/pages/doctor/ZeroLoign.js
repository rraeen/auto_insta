import { Button } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import { sendZero } from '../../services/userServices/allServices';

function ZeroLoign() {
    const [LoginComp, setLoginComp] = useState();
    const loginZero = async() => {
       const res=await sendZero()
       console.log(res)
    }
  return (
    <div>
      <Button variant='contained' onClick={loginZero}>Login</Button>
    </div>
  )
}

export default ZeroLoign
