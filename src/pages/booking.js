import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Booking.module.scss'
import Register from '@/components/Register/Register'
import Nav from '@/components/Nav/Nav'
import { useState } from 'react'
import Sidepanel from '@/components/Booking/SidePanel/sidepanel'
import Viewhotel from '@/components/Booking/ViewHotel/viewhotel'

const inter = Inter({ subsets: ['latin'] })

export default function Booking(){
    const [ isActive, setIsActive ] = useState(false);
    const [ activeImg, setActiveImg ] = useState(null);
    const toggleActiveState = () => setIsActive(!isActive);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (id) => {
      setActiveImg(id)
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setActiveImg(null)
      setIsHovered(false);
    };
    return (
        <>
            <Register isActive={isActive} toggleActiveState={toggleActiveState}/>
            <Nav isActive={isActive} toggleActiveState={toggleActiveState} />
            <main className={styles.main}>
                <Sidepanel/>
                <div className={styles.viewhotel_div}>
                  <Viewhotel/>
                </div>
            </main>
        </>
    )
}