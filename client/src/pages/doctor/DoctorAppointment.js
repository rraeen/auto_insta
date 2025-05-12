import React, { useEffect, useRef } from 'react'
import GridTable from '../../components/atoms/table/GridTable'
import { Box, Paper, Tabs } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useDispatch, useSelector } from 'react-redux'
import AppDialer from '../../components/atoms/AppDialer/AppDialer'
import FormWrapper from '../../components/organisms/FormWrapper'
import { appoinmentForm2, appoinmentForm1 } from '../../components/molecules/props'
import { setAppointment, setAppointmentFormDetails, setdialer } from '../../redux/reducers/userReducer'
import { scrollbarStyle } from '../../styles/stypeObj'
import { useTheme } from '@emotion/react'
import { centerBox, justcenter } from '../../styles/atomStyle'
import { Element } from '../../components/atoms'
import CustomTabs from '../../components/atoms/Tabs/CustomTabs'
import { appointmentColumn, dummyRows } from '../../constents/inputLevels'

function DoctorAppointment() {
  const { cusomStyle, palette } = useTheme()
  const dis = useDispatch()
  const formSubmitRef1 = useRef(null);
  const formSubmitRef2 = useRef(null);
  const { barOpen, dialer, appointment ,appointmentFormDetails} = useSelector((state) => state.user)

  const handleTabChange = (e, v) => {
    dis(setAppointment({ tab: v }))
  }

  const handleAdd = (e) => {
    dis(setdialer(true))
  }
  const handleSubmitAppoinment = (e) => {
    dis(setAppointmentFormDetails(e))
    // dis(setdialer(false))
  }
  const handleCloseDialer = (e) => {
    dis(setdialer(false))
  }
  const handlefinalSubmit = () => {
    if (formSubmitRef1.current) {
      formSubmitRef1.current(); 
    }
    if (formSubmitRef2.current) {
      formSubmitRef2.current(); 
    }
  }

  useEffect(() => {
    return () => {
      handleCloseDialer()
    }
  }, [])

  useEffect(() => {
    console.log("Updated appointmentFormDetails:", appointmentFormDetails);
  }, [appointmentFormDetails]);

  return (
    <Box
      sx={{
        position: 'fixed',
        width: barOpen ? '87vw' : '96vw',
        p: 2,
        pt: 1,
        transition: 'width 1s ease',
        bgcolor: palette.background.bg,
        height: '100vh',
      }}
    >
      <GridTable
        handleAdd={handleAdd}
        columns={appointmentColumn}
        rows={dummyRows}
      />
      <AppDialer
        open={dialer}
        title="Enter appoinment details"
        handleClose={handleCloseDialer}
        handleSave={handlefinalSubmit}
        titleProps={{
          sx: {
            fontSize: cusomStyle.font.f1,
            padding: 2,
            background: palette.s,
          },
        }}
        dialogProps={{
          sx: {
            '& .MuiDialogContent-root': {
              background: palette.s,
            },
          },
          maxWidth:'lg',
          fullWidth:true
        }}
        actioProps={{
          sx: {
            background: palette.s,
          },
        }}
      >
        <Box sx={{ height: '75vh' }}>
          <Grid container spacing={1}>
            <Grid size={6}>
              <Paper sx={{ fontSize: cusomStyle.font.f2, p: 1, mt: 0.5 }}>
                Personal Details
              </Paper>

              <Paper
                sx={{
                  height: '68vh',
                  overflow: 'auto',
                  mt: 1,
                  p: 2,
                  ...scrollbarStyle(cusomStyle.outline, palette.background.bg),
                }}
              >
                <Box sx={justcenter}>
                  <Box sx={{ width: '30vw' }}>
                    <Element
                      type="simplebutton"
                      props={{
                        label: 'Patient Id: PT2199',
                        var: 's',
                        customStyle: {mt:1, mb: 2, color: '' },
                      }}
                    />

                    <FormWrapper
                      {...appoinmentForm1(handleSubmitAppoinment, formSubmitRef1)}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid size={6}>
              <Paper sx={{ fontSize: cusomStyle.font.f2, p: 1, mt: 0.5 }}>
                Other Details
              </Paper>

              <Paper
                sx={{
                  height: '68vh',
                  overflow: 'auto',
                  mt: 1,
                  p: 2,
                  ...scrollbarStyle(cusomStyle.outline, palette.background.bg),
                }}
              >
                <Box sx={justcenter}>
                  <Box sx={{ width: '30vw' }}>
                    <CustomTabs
                    tablist={["Admission Details","Medical Details","Billing Details"]}
                      value={appointment.tab}
                      handleChange={handleTabChange}
                    />
                   {appointment.tab==0 && <Box sx={{mt:2}}>
                   <FormWrapper
                      {...appoinmentForm2(handleSubmitAppoinment, formSubmitRef2)}
                    />

                   </Box>
                    }
                   {appointment.tab==1 && "dgsdfdsf"}
                   { appointment.tab==2 && "dfsdf"}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </AppDialer>
    </Box>
  )
}

export default DoctorAppointment
