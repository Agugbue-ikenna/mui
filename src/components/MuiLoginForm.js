import {useState} from 'react'
import {
    Checkbox, 
    Grid,
    TextField,
    FormControlLabel,
    Paper, 
    Button} from '@mui/material';




export const MuiLoginForm = () => {
 const[enteredName, setEnteredName]=useState();
 const handleChange=(event)=>{
    setEnteredName(event.target.value)
 }
  return (
    <div style={{padding:30}}>
        <Paper>
            <Grid cointainer 
            spacing={3} 
            direction={'column'} 
            justify={'center'} 
            alignItems={'center'}>
                <Grid item sx={12}>
                    <TextField label='username'></TextField>
                </Grid>
                 <Grid item sx={12}>
                    <TextField label='password' type={'password'}></TextField>
                </Grid>
                 <Grid item sx={12}>
                    <FormControlLabel 
                    control={<Checkbox 
                    checked={enteredName} 
                    onChange={handleChange} 
                    label='stay logged in' 
                    inputProps={{'aria-label':'primary checkbox'}}/>
                    } 
                    label='stay logged in'/>
                </Grid>
                 <Grid item sx={12}>
                    <Button variant='contained' color='secondary'>Login</Button>
                </Grid>
            </Grid>
        </Paper>

    </div>
  )
}

