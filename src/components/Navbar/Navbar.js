import styles from './Navbar.module.scss';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

export default function Nav({ toggleSearch, toggleActiveState }){
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
                    <div className={styles.Interactions__div}>
                        <ul className={styles.ul}>
                            <li><a className={styles.nav_links} href='/'><p className='p-0 m-0'>Home</p></a></li>
                            <li><a className={styles.nav_links} href='/booking'><p className='p-0 m-0'>Booking</p></a></li>
                        </ul>
                        <button 
                            className='btn btn-secondary px-3 py-1 rounded'
                            onClick={toggleActiveState}
                        >Sign In</button>
                    </div>
                    <div className={styles.MobileInteractions__div}>
                        <Button 
                            variant='primary' 
                            className={styles.search__Button} 
                            onClick={toggleSearch}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                        <Button variant="primary" className={styles.offcanvas_toggle} onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </Button>
                    </div>
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