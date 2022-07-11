import { Typography,Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    }
  },
});
export default function NotFound() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography sx={{textAlign:'center',margin:'auto'}}>Page not found!!😒😒😒</Typography>
    </ThemeProvider>
    </>
  )
}
