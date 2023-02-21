import React from 'react';
import { Stack, Button, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';


export const MuiButton = () => {
  return (
    <Stack spacing={4} sx={{
      padding: 7,
    }}>
      <Stack display='block' spacing={2} direction="row">
        <Button variant="text" href='https://google.com'> Text</Button>
        <Button variant="outlined" >Click me</Button>
        <Button variant="contained">contained</Button>
      </Stack>


      <Stack display='block' spacing={2} direction="row" sx={{ padding: 5 }}>
        <Button variant="cointained" color='primary' >primary</Button>
        <Button variant="contained" color='secondary'>secondary</Button>
        <Button variant="outlined" color='error'>error</Button>
        <Button variant="text" color='warning'>Warning</Button>
        <Button variant="contained" color='info'>Info</Button>
        <Button variant="contained" color='success'>Success</Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row' sx={{ padding: 5 }}>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row' sx={{ padding: 5 }}>
        <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />}>Send</Button>

      </Stack>
      <Stack display='block' spacing={2} direction='row' sx={{ padding: 5 }}>
        <Button
          variant='contained'
          startIcon={<LoginIcon />}
          onClick={() => alert('login')}>
          sign in
        </Button>

        <Button
          variant='contained'
          endIcon={<LoginIcon />}
          onClick={() => alert('login')}>
          sign in
        </Button>

        <Button
          variant='contained'
          endIcon={<LogoutIcon />}
          onClick={() => alert('login')}>
          sign in
        </Button>

        <Button
          variant='contained'
          endIcon={<WhatsAppIcon />}
          onClick={() => alert('message sent')}>
          Message
        </Button>

        <Button
          variant='contained'
          endIcon={<DeleteIcon />}
          onClick={() => alert('message sent')}>
          Delete
        </Button>
      </Stack>

      <Stack display='block' direction='row' sx={{ padding: 5 }}>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='alignment button group'>
          <Button onClick={() => alert('left clicked')}>Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>

        </ButtonGroup>

      </Stack>


    </Stack>

  )


}