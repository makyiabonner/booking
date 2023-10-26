import styles from './MobileSearchScreen.module.scss';
import { TODAY, TOMORROW, debounce } from '@/components/util';
import { getHotels, getLocation } from '@/components/api';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ResultsCard from '../ResultsCard/resultsCard';

export default function MobileSearchScreen ({ toggleShow, toggleHide, handleHotelList }) {
    const [destID, setDestID] = useState('');

    TOMORROW.setDate(TODAY.getDate() + 1);
    const [inDate, setInDate] = useState(TODAY.toISOString().split('T')[0]);
    const [outDate, setOutDate] = useState(TOMORROW.toISOString().split('T')[0]);

    const handleSelectedDestID = (input) => setDestID(input);
    const handleCheckInDateChange = (event) => setInDate(event.target.value);
    const handleCheckOutDateChange = (event) => setOutDate(event.target.value);
    const handleSearch = (input) => (handleHotelList(input));

    return (
        <section className={toggleShow ? styles.section : styles.hide}>
            <Button className={styles.close} onClick={toggleHide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </Button>
            <form>
                <label className={styles.label}>Where To?</label>
                    <SearchLocationInput handleSelectedDestID={handleSelectedDestID}/>
                <div>
                    <label className={styles.label}>Arrival
                        <SearchArrivalInput inDate={inDate} handleCheckInDateChange={handleCheckInDateChange} />
                    </label>
                    <label className={styles.label}>Departure
                        <SearchDepartureInput outDate={outDate} handleCheckOutDateChange={handleCheckOutDateChange} />
                    </label>
                </div>
                <MobileSearch 
                    toggleHide={toggleHide}
                    destID={destID}
                    inDate={inDate}
                    outDate={outDate}
                    handleSearch={handleSearch}
                />
            </form>
        </section>
    )
}

export function SearchLocationInput ({ handleSelectedDestID }) {
    const [searchList, setSearchList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [inputContent, setInputContent] = useState('');

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
        debounceApiCall(input)
    };

    const getSearchList = () => {
        return (
            <ul className={`${styles.Results__container} ${inputContent && isActive? styles.show : styles.hidden}`}>
                {searchList.map((item,index) => {
                    const updatedInput = `${item.name}, ${item.region}`;

                    return (
                        <li 
                            key={index}
                            className={styles.Search__list}
                            onClick={() => {
                                handleResultClick(updatedInput);
                                handleSelectedDestID(item.dest_id);
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

export function MobileSearch ({ toggleHide, destID, inDate, outDate, handleSearch }) {
    const handleGetHotels = async () => {
        try {
            const hotelResults = await getHotels(destID, inDate, outDate);
            console.log("Hotel Results:", hotelResults);
            handleSearch(hotelResults.result);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }

    return (
        <Button 
            className={styles.search} 
            type='button' 
            onClick={() => (handleGetHotels(destID) && toggleHide(true))}
        >
            Search
        </Button>)
}
export function Search ({ destID, inDate, outDate, handleSearch }) {
    const handleGetHotels = async () => {
        try {
            const hotelResults = await getHotels(destID, inDate, outDate);
            console.log("Hotel Results:", hotelResults);
            handleSearch(hotelResults.result);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }

    return (
        <Button 
            className={styles.search} 
            type='button' 
            onClick={() => (handleGetHotels(destID))}
        >
            Search
        </Button>)
}

export function SearchArrivalInput ({ inDate, handleCheckInDateChange }) {
    return (
        <input 
            className={styles.input} 
            type='date'
            value={inDate}
            onChange={handleCheckInDateChange}                            
        />
    )
}

export function SearchDepartureInput ({ outDate, handleCheckOutDateChange }) {
    return (
        <input 
            className={styles.input} 
            type='date'
            value={outDate}
            onChange={handleCheckOutDateChange}                            
        />
    )
}