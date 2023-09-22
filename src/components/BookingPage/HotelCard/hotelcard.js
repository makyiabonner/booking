import styles from './hotelcard.module.scss'
export default function HotelCard(){
    const arr = [1,1,1,1,1,1];
    return (
        <div>
           {arr.map(num => {
            return(
            <div className={styles.card}>
                <div className={styles.card_left}>
                    <img 
                        style={{borderRadius: '15px'}}
                        src='/images/resort.webp'
                        width={200}
                        height={150} 
                    />
                    <div className='d-flex flex-column'>
                        <p className={styles.hotel_name}>Hotel_name</p>
                        <span className={styles.hotel_location}>Location</span>
                    </div>
                </div>
                <div className={styles.card_right}>
                    <p className={styles.hotel_rating}>9.0</p>
                    <div>
                        <span className={styles.hotel_nights}>nights, people</span>
                        <p className={styles.hotel_pricing}>$122</p>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
    )
}