import HotelCard from '../HotelCard/hotelcard'
import styles from './sidepanel.module.scss'

export default function Sidepanel(){
    const url = 'https://booking-com.p.rapidapi.com/v2/hotels/search?order_by=popularity&adults_number=2&checkin_date=2023-09-27&filter_by_currency=AED&dest_id=-553173&locale=en-gb&checkout_date=2023-09-28&units=metric&room_number=1&dest_type=city&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1';
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '8fd9ac38eemsha20403a81d3bec1p1cccecjsnd3a289871000',
    		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    	}
    };
    async function getHotels (){
    try {
    	const response = await fetch(url, options);
    	const result = await response.text();
    	console.log(result);
    } catch (error) {
    	console.error(error);
    }
}
    return (
        <div className={styles.SidePanel}>
            <form className={styles.SearchTab}>
                        <div className='d-flex'>
                            <label className={`${styles.label}`}>Locations
                                <input className={styles.LocationText} type='text' required />
                            </label>
                            <button className={styles.SubmitButton} onClick={getHotels}>Submit</button>
                        </div>
                        <div className='d-flex'>
                            <label className={`${styles.label} d-block`}> Check-In / Check-Out Date
                                <input className={styles.CheckInText} type='text' />
                            </label>
                            <label className={`${styles.label} d-block`}>Total Persons / Rooms
                                <input className={styles.TotalText} type='text' />
                            </label>
                        </div>
                    <ul className={`${styles.ul} d-flex pb-3`}>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                    </ul>
            </form>
            <section className={styles.HotelScroll}>
                <HotelCard/>
            </section>
        </div>
    )
}