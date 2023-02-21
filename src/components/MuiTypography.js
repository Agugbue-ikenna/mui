import React from 'react';
import { Typography, Stack } from '@mui/material'


export const MuiTypography = () => {
  return (
    <Stack>
      <Stack sx={{
        boxShadow: 12,
        margin: 2,
        padding: 2,
        borderRadius: '12px',
        height: '17em',

      }}>
        <Typography variant="h1" color='orange'
          sx={{
            textAlign: 'center',
            fontFamily: 'Lato'
          }}>
          Welcome! to <br />my Page
        </Typography>
      </Stack>

      <Typography variant="h2" color='secondary' sx={{ textAlign: 'center' }}>h2 heading</Typography>
      <Typography variant="h3" color='error' sx={{ textAlign: 'center' }}>h3 heading</Typography>
      <Typography variant="h4" color='warning' sx={{ textAlign: 'center' }}>h4 heading</Typography>
      <Typography variant="h5" color='info' sx={{ textAlign: 'center' }}>h5 heading</Typography>
      <Typography variant="h6" color='success' sx={{ textAlign: 'center' }}>h6 heading</Typography>


    </Stack>


  )
}

