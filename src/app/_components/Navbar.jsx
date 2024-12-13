import React from 'react'
import { Logo } from './logo'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className=' flex justify-evenly'>
            <Logo />
            <TextField sx={{
                height: '50px',
                width: '500px'
            }} id="outlined-basic" label="search" variant="outlined" />
            <div className='flex gap-5'>
                <Button sx={{
                    height: '40px',
                    width: '70px'
                }} variant='outlined' href='/sign-in'> Login </Button>
                <Link href="/profile">
                    <Person2Icon sx={{

                        width: '50px',
                        height: '40px'
                    }} />
                </Link>
                <Link href="/cart" >
                    <ShoppingCartIcon sx={{
                        width: '50px',
                        height: '40px'
                    }} />
                </Link>

            </div>
        </div>
    )
}

