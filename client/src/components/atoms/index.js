import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CustomButton from './Button/CustomButton'
import InputField from './InputBox/InputField'
import PasswordField from './InputBox/passwordField'
import SimpleButton from './Button/SimpleButton'
import { useTheme } from '@emotion/react'
// import DateField from './InputBox/DateField'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import GlassInput from './InputBox/GlassInput'

const getComponent = (type, props) => {
  const component = {
    button: <CustomButton {...props} />,
    input: <GlassInput {...props} />,
    password: <GlassInput {...props} />,
    simplebutton: <SimpleButton {...props} />,
    date:<>date</>
    // date:<DatePicker  label="Basic date picker"  {...props}/>
  }
  return component[type]
}

export const Renderer = ({ elements, gridprops = { size: 12 }, version }) => {
  const {
    cusomStyle: { font, center },
  } = useTheme()
  return (
    <Grid size={12}>
      <Grid container spacing={1}>
        {elements.map((o, index) => (
          <Grid {...gridprops} key={index}>
            {version == 'flat' ? (
              <Grid container>
                <Grid size={3} sx={{ ...center }}>
                  <Typography sx={{ fontSize: font.f2 }}>
                    {o.props.labelflat}
                  </Typography>
                </Grid>
                <Grid size={0.5} sx={{ ...center }}>
                  <Typography sx={{ fontSize: font.f2 }}>
                   :
                  </Typography>
                </Grid>
                <Grid size={8.5}>{getComponent(o.type, o.props)}</Grid>
              </Grid>
            ) : (
              getComponent(o.type, o.props)
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export const Element = ({ type, props, sx }) => (
  <Box sx={sx}>{getComponent(type, props)}</Box>
)
