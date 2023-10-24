import styles from './MobileSearchScreen.module.scss';
import { TODAY, TOMORROW, debounce } from '@/components/util';
import { getHotels, getLocation } from '@/components/api';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ResultsCard from '../ResultsCard/resultsCard';

export default function MobileSearchScreen ({ toggleShow, toggleHide, checkIn, checkOut }) {
    const [debounceInput, setDebounceInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [selectedID, setSelectedID] = useState(null);
    const [destID, setDestID] = useState('');

    TOMORROW.setDate(TODAY.getDate() + 1);
    const [inDate, setInDate] = useState(TODAY.toISOString().split('T')[0]);
    const [outDate, setOutDate] = useState(TOMORROW.toISOString().split('T')[0]);
    const [hotelInfo, setHotelInfo] = useState(null);

   
    
    const handleClickedHotel = async (hotelID) => {
        try {
            const result = await getHotelData(hotelID, inDate, outDate);
            
            setHotelInfo((prevHotel) => {
                selectedHotel(result)
                return result
            });
        }
        catch (error) {
            console.error(error)
        }
    };
    
    const handleResultClick = (selectedValue) => {
        setInputContent(() => selectedValue);
        setIsActive(false);
    };

    return (
        <section className={toggleShow ? styles.section : styles.hide}>
            <Button className={styles.close} onClick={toggleHide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </Button>
            <form>
                <label className={styles.label}>Where To?</label>
                    <SearchLocationInput />
                <div>
                    <label className={styles.label}>Arrival
                        <SearchArrivalInput />
                    </label>
                    <label className={styles.label}>Departure
                        <SearchDepartureInput />
                    </label>
                </div>
                <Search toggleHide={toggleHide}/>
            </form>
        </section>
    )
}

export function SearchLocationInput () {
    const [searchList, setSearchList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [inputContent, setInputContent] = useState('');
    const [debounceInput, setDebounceInput] = useState('');
    const [destID, setDestID] = useState('');


    const handleResultClick = (selectedValue) => {
        setInputContent(() => selectedValue);
        setIsActive(false);
    };

    const debounceApiCall = debounce(async (inputValue) => {
        const searchResults = await getLocation(inputValue);
        setSearchList(searchResults);
    }, 900);

    const handleInputBlur = () => {
        setTimeout(() => setIsActive(false), 200);
    }

    const handleInputChange = async (event) => {
        const input = event.target.value;
        setInputContent(input);
        setDebounceInput(input);
        debounceApiCall(input)
    };

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
                            <ResultsCard 
                                key={item.id} 
                                city={item.name} 
                                region={item.region}
                            />
                        </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <>
            <input 
                value={inputContent}
                className={styles.Location__input} 
                placeholder='Search Destinations' 
                type="text" 
                onChange={handleInputChange}
                onFocus={() => setIsActive(true)}
                onBlur={() => handleInputBlur}
                required
            />
            <div>
                {searchList && searchList.length > 0 ? getSearchList() : null}
            </div>
        </>
    )
}

export function Search ({ toggleHide }) {
    const [hotelList, setHotelList] = useState([]);

    const handleGetHotels = async () => {
        try {
            const hotelResults = await getHotels(destID, inDate, outDate);
            console.log("Hotel Results:", hotelResults);
            setHotelList(hotelResults.result);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }

    return <Button className={styles.search} type='button' onClick={() => toggleHide && handleGetHotels(destID)}>Search</Button>
}

export function SearchArrivalInput () {
    const [inDate, setInDate] = useState(TODAY.toISOString().split('T')[0]);
    
    const handleCheckInDateChange = (event) => {
        setInDate(event.target.value);
    };

    return (
        <input 
            className={styles.input} 
            type='date'
            value={inDate}
            onChange={handleCheckInDateChange}                            
        />
    )
}

export function SearchDepartureInput () {
    const [outDate, setOutDate] = useState(TOMORROW.toISOString().split('T')[0]);

    const handleCheckOutDateChange = (event) => {
        setOutDate(event.target.value);
    };
    return (
        <input 
            className={styles.input} 
            type='date'
            value={outDate}
            onChange={handleCheckOutDateChange}                            
        />
    )
}