import styles from '../ViewHotel/viewhotel.module.scss'

export default function Viewhotel(){
    return (
        <section className={styles.hotel_model} style={{backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className='d-flex'>
                    <div className={styles.hotel_rating_div}>
                        <p className={styles.hotel_rating}>9.0</p>
                        <ul className={styles.hotel_verdict}>
                            <li className={styles.hotel_pros}>Good akjd ksad jfl; kadf jdflja dhoadjfa</li>
                            <li className={styles.hotel_pros}>Great</li>
                            <li className={styles.hotel_cons}>Bad</li>
                        </ul>
                    </div>
                    <div className={styles.hotel_review_div}>
                        <button className={styles.review_button}>REVIEWS</button>
                    </div>
                    <div className={styles.hotel_love_div}>
                        <button className={styles.love_button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div></div>
                <div></div>
        </section>
    )
}