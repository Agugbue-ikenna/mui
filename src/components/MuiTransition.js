import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, Stack, Typography, Collapse, Fade, Grow, Slide, Zoom } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export const MuiTransition = () => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show)
  }
  return (
    <Box mx={3}>
      <Typography variant='h5' c0lor='secondary' align='center'>
        Mui Transition Example
      </Typography>
      <Box>
        <FormControlLabel
          label='show Transition'
          control={<Switch checked={show} onChange={handleChange} />} />
      </Box>
      <Stack spacing={2} direction='row' mx={3}>
        <Typography variant='h5'>Collapse:  </Typography>
        <Collapse in={show} collapsedSize={50} timeout={1000}>
          <AcUnitIcon sx={{ width: 150, height: 150, }} />
        </Collapse>

        <Typography variant='h5'>Fade:  </Typography>
        <Fade in={show} timeout={3000}>
          <AcUnitIcon sx={{ width: 150, height: 150, }} />
        </Fade>

        <Typography variant='h5'>Grow:  </Typography>
        <Grow in={show} timeout={2000}>
          <AcUnitIcon sx={{ width: 150, height: 150, }} />
        </Grow>
      </Stack>
      <Stack spacing={2} direction='row' mx={3}>
        <Typography variant='h5'>Slide:  </Typography>
        <Slide in={show} direction='right' timeout={3000}>
          <AcUnitIcon sx={{ width: 150, height: 150, }} />
        </Slide>

        <Typography variant='h5'>Slide:  </Typography>
        <Zoom in={show} direction='in' timeout={3000}>
          <AcUnitIcon sx={{ width: 150, height: 150, }} />
        </Zoom>
      </Stack>

    </Box>
  )
}

