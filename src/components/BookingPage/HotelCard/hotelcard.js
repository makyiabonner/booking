import { useState } from 'react';
import styles from './hotelcard.module.scss';

export default function HotelCard({ details, onSelect, isSelected}){

    return (
        <div 
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={onSelect}>
            <div className={styles.card_left}>
                <img 
                    src={details.img}
                    width={170}
                    height={140}
                />
                <div className='d-flex flex-column'>
                    <p className={styles.hotel_name}>{details.name}</p>
                    <span className={styles.hotel_location}>{details.location}</span>
                </div>
            </div>
            <div className={styles.card_right}>
                <p className={styles.hotel_rating}>{details.review === Math.floor(details.review) ? `${details.review}.0` : details.review}</p>
                <div>
                    <span className={styles.hotel_nights}>nights, people</span>
                    <p className={styles.hotel_pricing}>${details.price}</p>
                </div>
            </div>
        </div>
    )
}