import styles from './hotelcard.module.scss';

export default function HotelCard({img, name, location, price}){
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_left}>
                    <img 
                        style={{borderRadius: '15px'}}
                        src={img}
                        width={200}
                        height={150} 
                    />
                    <div className='d-flex flex-column'>
                        <p className={styles.hotel_name}>{name}</p>
                        <span className={styles.hotel_location}>{location}</span>
                    </div>
                </div>
                <div className={styles.card_right}>
                    <p className={styles.hotel_rating}>9.0</p>
                    <div>
                        <span className={styles.hotel_nights}>nights, people</span>
                        <p className={styles.hotel_pricing}>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}