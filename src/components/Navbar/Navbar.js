import styles from './Navbar.module.scss';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

export default function Nav({ isActive, toggleActiveState }){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <nav className={styles.nav}>
                <section className={styles.section}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img}
                            src='/images/Savvy.jpg' 
                            alt='Savvy'/>
                    </div>
                    <div className={styles.div}>
                        <ul className={`${styles.ul} d-none d-lg-flex`}>
                            <li><a className={styles.nav_links} href='/'><p className='p-0 m-0'>Home</p></a></li>
                            <li><a className={styles.nav_links} href='/booking'><p className='p-0 m-0'>Booking</p></a></li>
                        </ul>
                        <button 
                            className='btn btn-secondary px-3 py-1 rounded d-none d-lg-flex'
                            onClick={toggleActiveState}
                        >Sign In</button>
                    </div>
                    <Button variant="primary" className={`${styles.offcanvas_toggle} d-lg-none d-sm-flex`} onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </Button>
                </section>
            </nav>
            <Offcanvas className='bg-primary w-25' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className={styles.imgContainer2}>
                            <img className={`w-75 ${styles.img}`}
                                src='/images/Savvy.jpg' 
                                alt='Savvy'/>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className={`${styles.ul} flex-column w-100 mx-5 gap-4`}>
                        <li><a className={styles.nav_links} href='/'><p className='p-0 m-0'>Home</p></a></li>
                        <li><a className={styles.nav_links} href='/booking'><p className='p-0 m-0'>Booking</p></a></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}