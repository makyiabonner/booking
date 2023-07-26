import styles from '../HotelCard/hotelcard.module.scss'

export default function HotelCard(){
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img src='' />
                    <p>Hotel_name</p>
                    <span>Location</span>
                </div>
                <div className={styles.right}>
                    <p>9.0</p>
                    <span>nights, people</span>
                    <p>$122</p>
                    <button>See availability</button>
                </div>
            </div>
        </div>
    )
}