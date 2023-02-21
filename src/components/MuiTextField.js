import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
export const MuiTextField = () => {
  return (
    <Stack spacing={4} sx={{
      padding: 7,
    }}>
      <Stack direction='row' spacing={2}>
        <TextField label='email' variant='outlined' color='success' />
        <TextField label='email' variant='filled' />
        <TextField label='email' variant='standard' />

      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='small secondary' size='small' color='secondary' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='form input' required />
        <TextField label='form input' helperText='Do not share your password' />
        <TextField label='password' type='password'
          helperText='Do not share your password' disabled />
        <TextField label='read only' InputProps={{ readOnly: true }} />
      </Stack>


      <Stack direction='row' spacing={2}>
        <TextField label='Amount'
          InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} />
        <TextField label='weight'
          InputProps={{ endAdornment: <InputAdornment position='start'>kg</InputAdornment> }} />

        <TextField label='password' type='password'
          InputProps={{ endAdornment: <InputAdornment position='start'>{<VisibilityIcon />}</InputAdornment> }}
        />
      </Stack>




    </Stack>
  )
}
