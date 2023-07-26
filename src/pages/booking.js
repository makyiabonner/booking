import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Booking.module.scss'
import Nav from '@/components/Homepage/Nav/Nav'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Booking(){
    return (
        <>
            <Nav/>
            <main>
                <div className='bg-primary w-75 h-100'></div>
            </main>
        </>
    )
}