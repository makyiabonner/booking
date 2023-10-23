import styles from './MobileSearchScreen.module.scss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function MobileSearchScreen ({ toggleShow, checkIn, checkOut }) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <section className={styles.section}>
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
                <Button className={styles.search}>Search</Button>
            </form>
        </section>
    )
}