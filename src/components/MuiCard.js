import {useState} from 'react';
import {Box, Card, CardContent, Fade, Typography, Button, CardActions, CardMedia, Stack,FormControlLabel} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import coffee from '../assets/coffee.jpg';



export const MuiCard = () => {
  const[show, setShow]=useState(false);
    const handleChange=()=>{
        setShow(!show)   
    }
   
  return (
   
    <Stack sx={{
       background:'linear-gradient(to right bottom, pink, yellow)',
        boxShadow:12,
        margin:5,
        padding:5,
        borderRadius:'12px',
       
    }}  >
       <Typography 
         sx={{padding:3,textAlign:'center'}}
         variant='h3' 
         color='white'
         size='large'>COURSES!</Typography>
              <Box>
            <FormControlLabel 
            
            control={<Button checked={show} 
            onClick={handleChange} sx={{margin:5}}>Show</Button>}/>
        </Box>
        
        <Stack >
            <Box width='300px' >
              <Fade in={show} direction='right'  timeout={3000}>
            <Card sx={{ 
                background:'linear-gradient(to right bottom, pink, #6B0AC9)',
                borderRadius:'12px',
                 boxShadow:12,}}>
            <CardMedia
            component='image'
            height='140'
            image={coffee}
            alt='tea'
            />
            <CardContent>
                <Typography 
                gutterBottom variant='h3' 
                component='div' 
                color='secondary'>
                    React
                    </Typography>
                     <Typography  
                     variant='body2' 
                     color='white'  
                     fontFamily='Lato'>
                    React is a JavaScript library for building 
                    user interfaces.React can be used as a base
                    in the development of single-page or mobile 
                    applications.
                    </Typography>
                   
            </CardContent>
            <CardActions>
                 <Button size='small'>Share</Button>
                  <Button size='small'>Learn-more</Button>
                  <Button 
                  variant='contained' 
                  size='small' 
                  endIcon={<AddShoppingCartIcon/>}
                  color='error'
                  >
                    BUY
                    </Button>
            </CardActions>
          </Card>
           </Fade>
            </Box>
        </Stack>
        <br/>
        <Stack>
        <Box width='300px' >  
        <Fade in={show}  timeout={3000}>   
          <Card sx={{ 
                  background:'linear-gradient(to right bottom, pink, orange)',
                borderRadius:'12px',
                 boxShadow:12,}}>
            <CardMedia
            component='image'
            height='140'
            image='https://source.unsplash.com/random'
            alt='unsplash image'
            />
            <CardContent>
                <Typography 
                gutterBottom variant='h3' 
                component='div' 
                color='blue'>
                   Css
                    </Typography>
                     <Typography  
                     variant='body2' 
                     color='white' 
                     fontFamily='Lato'>
                    React is a JavaScript library for building 
                    user interfaces.React can be used as a base
                    in the development of single-page or mobile 
                    applications.
                    </Typography>
                   
            </CardContent>
            <CardActions>
                 <Button size='small'color='error'>Share</Button>
                  <Button size='small' color='warning'>Learn-more</Button>
                  <Button 
                  variant='contained' 
                  size='small' 
                  endIcon={<AddShoppingCartIcon/>}
                  color='success'>
                   BUY 
                    </Button>
            </CardActions>
          </Card>
          </Fade>
        </Box>
        </Stack>
    </Stack>
       
  )
}

