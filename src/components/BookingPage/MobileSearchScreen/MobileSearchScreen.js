import styles from './MobileSearchScreen.module.scss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function MobileSearchScreen ({ toggleShow, toggleHide, checkIn, checkOut }) {
    return (
        <section className={toggleShow ? styles.section : styles.hide}>
            <Button className={styles.close} onClick={toggleHide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </Button>
            <form>
                <label className={styles.label}>Where To?</label>
                <input 
                    className={styles.Location__input} 
                    placeholder='Search Destinations' 
                    type="text" 
                />
                <div>
                    <label className={styles.label}>Arrival
                        <input 
                            className={styles.input} 
                            type="date" 
                        />
                    </label>
                    <label className={styles.label}>Departure
                        <input 
                            className={styles.input} 
                            type="date" 
                        />
                    </label>
                </div>
                <Button className={styles.search} onClick={toggleHide}>Search</Button>
            </form>
        </section>
    )
}