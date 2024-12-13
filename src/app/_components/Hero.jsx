import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import img from "@/app/home.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export const Hero = () => {
    return (
        <>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                justifyContent: 'space-evenly',
                height: '100%',
                alignItems: 'center',
                padding: '0 75px 0 75px'
            }}>
                <Typography style={{
                    width: '600px'
                }} variant='h6' fontWeight={800}> Discover a seamless shopping experience with Eclify, your one-stop destination for all your needs. Explore a wide range of products, from trendy fashion and electronics to home essentials, all at unbeatable prices. Enjoy fast, reliable delivery, secure payments, and exclusive deals tailored just for you. Whether you're upgrading your wardrobe, finding the perfect gift, or enhancing your home, we've got you covered. Start shopping now and experience the joy of hassle-free, online convenience. Shop smart. Shop easy. Eclify.</Typography>
                <Image src={img} width={500} height={200} alt='laptop image' />
            </Box>
            <Link href="/products">
                <Button style={{
                    marginLeft: "150px",
                }} variant='contained'>See all products <ArrowForwardIcon sx={{
                    marginLeft: 4,
                }} /></Button>
            </Link>
        </>
    );
}
