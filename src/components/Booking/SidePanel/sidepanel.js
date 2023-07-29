import HotelCard from '../HotelCard/hotelcard'
import styles from '../SidePanel/sidepanel.module.scss'

export default function Sidepanel(){
    return (
        <div className={styles.SidePanel}>
            <form className={styles.SearchTab}>
                <section>
                    <div className='d-flex gap-5 mb-3'>
                        <div>
                            <label className={`${styles.label} d-block`}>Locations</label>
                            <input className={styles.LocationText} type='text' required />
                        </div>
                        <button className={styles.SubmitButton}>Submit</button>
                    </div>
                    <div className='d-flex gap-5 mb-3'>
                        <div>
                            <label className={`${styles.label} d-block`}>Check-In / Check-Out Date</label>
                            <input className={styles.CheckInText} type='text' />
                        </div>
                        <div>
                            <label className={`${styles.label} d-block`}>Total Persons / Rooms</label>
                            <input className={styles.TotalText} type='text' />
                        </div>
                    </div>
                    <ul className={`${styles.ul} d-flex pb-3`}>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                        <li><button className={styles.FilterButton}>Filters</button></li>
                    </ul>
                </section>
            </form>
            <section className={styles.HotelScroll}>
                <HotelCard/>
            </section>
        </div>
    )
}