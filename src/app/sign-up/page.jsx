import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Signup() {
    return (
        <Stack
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3

            }}
            noValidate={false}
            autoComplete="off"
        >
            <TextField sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '50px', // Custom border radius
                },
            }} id="outlined-basic" label="username" variant="outlined" required />
            <TextField sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '50px', // Custom border radius
                },
            }} id="outlined-basic" label="email" variant="outlined" required />
            <TextField sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '50px', // Custom border radius
                }
            }} id="outlined-basic" label="password" variant="outlined" required />
            <Button style={{
                width: '450px',
                height: '50px',
                borderRadius: "50px"
            }} variant='contained'>Sign up</Button>


        </Stack>
    );
}
