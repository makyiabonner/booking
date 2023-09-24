import HotelCard from '../HotelCard/hotelcard'
import ResultsCard from '../ResultsCard/resultsCard';
import styles from './sidepanel.module.scss';
import { useState } from 'react';

export default function Sidepanel(){
    const [inputContent, setInputContent] = useState('');
    const [isActive, setIsActive] = useState(false)

    const handleInputChange = (event) => setInputContent(event.target.value);
    function getDropdownOptions (){
        const options = [];

        for (let i = 0; i <= 6; i++){
            options.push(<option value={i}>{i}</option>);
        };
        return options;
    }
    return (
        <div className={styles.SidePanel}>
            <form className={styles.SearchTab}>
                <div className={styles.Location}>
                    <label className={`${styles.label}`}>Locations
                        <input 
                            className={styles.Location__text} 
                            type='text'
                            onChange={handleInputChange}
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setIsActive(false)}
                            required 
                        />
                        <div className={`${styles.Results__container} ${inputContent && isActive? styles.show : styles.hidden}`}>
                            <ResultsCard/>
                            <ResultsCard/>
                            <ResultsCard/>
                            <ResultsCard/>
                        </div>
                    </label>
                    <button className={styles.SubmitButton}>Submit</button>
                </div>
                <div className='d-flex'>
                    <label className={`${styles.label} d-block`}>Check-In Date
                        <input className={styles.Date__input} type='date' />
                    </label>
                    <label className={`${styles.label} d-block`}>Check-Out Date
                        <input className={styles.Date__input} type='date' />
                    </label>
                    <label className={`${styles.label} d-block`}>Total Persons / Rooms
                        <select className={styles.Persons__input} type='select'>
                            {getDropdownOptions()}
                        </select>
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