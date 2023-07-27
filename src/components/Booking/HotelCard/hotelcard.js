import styles from '../HotelCard/hotelcard.module.scss'
export default function HotelCard(){
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_left}>
                    <img 
                        style={{borderRadius: '15px'}}
                        src='/images/resort.webp'
                        width={200} 
                    />
                    <div className='d-flex flex-column'>
                        <p className={styles.hotel_name}>Hotel_name</p>
                        <span className={styles.hotel_location}>Location</span>
                    </div>
                </div>
                <div className={styles.card_right}>
                    <p className={styles.hotel_rating}>9.0</p>
                    <span className={styles.hotel_nights}>nights, people</span>
                    <p className={styles.hotel_pricing}>$122</p>
                    <button className={styles.hotel_availability}>See availability</button>
                </div>
            </div>
        </div>
    )
}