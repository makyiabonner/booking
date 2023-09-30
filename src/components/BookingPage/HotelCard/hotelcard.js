import styles from './hotelcard.module.scss';

export default function HotelCard({img, name, location, price ,review, id, selectedHotel}){
    const handleHotelClick = () => selectedHotel = id;
    return (
        <div className={styles.card} onClick={handleHotelClick}>
            <div className={styles.card_left}>
                <img 
                    className={styles.hotel_img}
                    src={img}
                />
                <div className='d-flex flex-column'>
                    <p className={styles.hotel_name}>{name}</p>
                    <span className={styles.hotel_location}>{location}</span>
                </div>
            </div>
            <div className={styles.card_right}>
                <p className={styles.hotel_rating}>{review === Math.floor(review) ? `${review}.0` : review}</p>
                <div>
                    <span className={styles.hotel_nights}>nights, people</span>
                    <p className={styles.hotel_pricing}>${price}</p>
                </div>
            </div>
        </div>
    )
}