import React from 'react';
import { FormControl, FormHelperText, Input, InputLabel, Box, Button} from '@mui/material';


const Login = () => {
    return(
        <Box>
        <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" aria-describedby="email-helper"></Input>
            <FormHelperText id="email-helper">Ingresa tu email personal</FormHelperText>
            </FormControl>  
            <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" aria-describedby="password-helper"></Input>
            <FormHelperText id="password-helper">Entre 8 y 30 caracteres</FormHelperText>
        </FormControl>
        <Button variant="contained" color="secondary">
            Sign in
        </Button>
        </Box>
    )
}

export default Login