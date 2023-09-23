import styles from './hotelcard.module.scss'
export default function HotelCard(){
    let arr = [];
    for (let i = 0; i < 3; i++){
        arr.push(i)
    }
    return (
        <div>
           {arr.map(num => {
            return(
            <div className={styles.card}>
                <div className={styles.card_left}>
                    <img 
                        style={{borderRadius: '15px'}}
                        src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/285551218.jpg?k=fc6202a20df2f3a404e618aaca867db78a30067652eec90d164634c24c93ce5e&o='
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