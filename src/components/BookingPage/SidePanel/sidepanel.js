import HotelCard from '../HotelCard/hotelcard'
import ResultsCard from '../ResultsCard/resultsCard';
import styles from './sidepanel.module.scss';
import { getLocation, getHotels } from '@/components/api';
import { useState } from 'react';

//hotel_name, main_photo_url review_score
export default function Sidepanel(){
    const [inputContent, setInputContent] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [destID, setDestID] = useState('');

    const getSearchList = () => {
        return (
            <ul className={`${styles.Results__container} ${inputContent && isActive? styles.show : styles.hidden}`}>
                {searchList.map((item) => {
                    const updatedInput = `${item.name}, ${item.region}`;

                    return (
                        <li 
                            className={styles.Search__list}
                            onClick={() => {
                                handleResultClick(updatedInput);
                                setDestID(() => item.dest_id);
                            }}
                            >
                            <ResultsCard key={item.id} city={item.name} region={item.region}/>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }

    const handleInputBlur = () => {
        setTimeout(() => setIsActive(false), 200);
    }

    const handleInputChange = async (event) => {
        setInputContent(event.target.value);
        const searchResults = await getLocation(inputContent);
        setSearchList(searchResults);
    };

    const handleResultClick = (selectedValue) => {
        setInputContent(() => selectedValue);
        setIsActive(false);
    };

    const getDropdownOptions = () => {
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
                            value={inputContent}
                            className={styles.Location__text} 
                            type='text'
                            onChange={handleInputChange}
                            onFocus={() => setIsActive(true)}
                            onBlur={() => handleInputBlur}
                            required 
                        />
                        <div>
                            {searchList.length > 0 ? getSearchList() : null}
                        </div>
                    </label>
                    <button className={styles.SubmitButton} type='button' onClick={getHotels(destID)}>Submit</button>
                </div>
                <div className='d-flex'>
                    <label className={`${styles.label} d-block`}>Check-In Date
                        <input className={styles.Date__input} type='date' />
                    </label>
                    <label className={`${styles.label} d-block`}>Check-Out Date
                        <input className={styles.Date__input} type='date' />
                    </label>
                    <label className={`${styles.label} d-block`}>Rooms
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