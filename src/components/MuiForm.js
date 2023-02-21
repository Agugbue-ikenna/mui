import { useEffect, useState } from 'react';
import {
    Stack,
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
    CardMedia,
    TextField
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


export const MuiForm = () => {
    //fetching the entered value
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('Name Input is valid')
        }
    }, [enteredNameIsValid])

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };
    //blur handler
    const nameInputBlurHandler = event => {
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
    }
    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);

    }
    const formSubmissionHandler = event => {
        event.preventDefault();

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);

        console.log(enteredName);
        console.log(enteredEmail);


    };


    return (

        <Stack direction='flex' sx={{ padding: 7, margin: 5, }}>
            <Box width='300px' onSubmit={formSubmissionHandler}>
                <Card sx={{
                    borderRadius: '12px',
                    boxShadow: 12,
                }}  >
                    <CardMedia />
                    <CardContent sx={{ margin: 2 }}>
                        <Typography sx={{ textAlign: 'center', color: 'black', margin: 0, padding: 3 }} variant>
                            Sign-Up
                        </Typography>
                        <Typography sx={{ color: 'black', padding: 0, margin: 0.1 }} size='small'>
                            Name
                        </Typography>
                        <TextField
                       
                            label='Name'
                            variant='filled'
                            color='red'
                            size='small'
                            sx={{ marginBottom: 0.5 }}
                            onChange={nameInputChangeHandler}
                            onBlur={nameInputBlurHandler} />
                        {!enteredNameIsValid && <Typography color='error'>Name must not be empty.</Typography>}

                        <Typography
                            sx={{
                                color: 'black',
                                padding: 0,
                                margin: 0.1
                            }}
                            size='small'>
                            Email
                        </Typography>
                        <TextField
                            label='Email'
                            variant='filled'

                            size='small'
                            sx={{ marginBottom: 0.5 }}
                            onChange={emailChangeHandler} />

                        <Typography color='primary' size='small' sx={{ color: 'black', padding: 0, margin: 0.1 }}>
                            Password
                        </Typography>

                        <TextField
                            type='password'
                            label='password'
                            variant='filled'
                            size='small' sx={{ marginBottom: 0.5, }}
                        />
                        <Typography
                            sx={{ fontSize: 13, }}>
                            <a href='https://www.reset password.com'>
                                Forgot password?
                            </a></Typography>
                    </CardContent>
                    <CardActions sx={{ padding: 2 }} spacing={6}>
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ display: 'flex', margin: 0 }}
                        >
                            Sign-up
                        </Button>
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ display: 'flex', margin: 0 }}
                            startIcon={<HomeIcon />}>

                        </Button>

                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            sx={{ display: 'flex', margin: 0 }}
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Stack>

    )
}