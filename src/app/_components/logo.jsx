"use client"
import Image from 'next/image'
import React from 'react'
import { redirect } from 'next/navigation'
import img from "@/app/favicon.ico"
import Link from 'next/link'

export const Logo = () => {
    return (
        <div>
            <Link href='/'>
                <Image src={img} alt='logo' width={50} height={50} />
            </Link>
        </div>
    )
}

