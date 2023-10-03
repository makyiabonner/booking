import HotelCard from '../HotelCard/hotelcard'
import ResultsCard from '../ResultsCard/resultsCard';
import styles from './sidepanel.module.scss';
import { getLocation, getHotels, getHotelData } from '@/components/api';
import { debounce, getDropdownOptions, TODAY, TOMORROW } from '@/components/util';
import { useState } from 'react';

export default function Sidepanel({ selectedHotel }){
    const [inputContent, setInputContent] = useState('');
    const [debounceInput, setDebounceInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [hotelList, setHotelList] = useState([]);
    const [destID, setDestID] = useState('');

    TOMORROW.setDate(TODAY.getDate() + 1);
    const [inDate, setInDate] = useState(TODAY.toISOString().split('T')[0]);
    const [outDate, setOutDate] = useState(TOMORROW.toISOString().split('T')[0]);
    const [hotelInfo, setHotelInfo] = useState(null);

   
    
    const handleClickedHotel = async (hotelID) => {
        const result = await getHotelData(hotelID, inDate, outDate);
        setHotelInfo(result);
        selectedHotel(hotelInfo);
        console.log(hotelInfo)
    };
    
    
    const handleCheckInDateChange = (event) => {
        setInDate(event.target.value);
    };

    const handleCheckOutDateChange = (event) => {
        setOutDate(event.target.value);
    };

    const debounceApiCall = debounce(async (inputValue) => {
        const searchResults = await getLocation(inputValue);
        setSearchList(searchResults);
    }, 700);

    const handleInputChange = async (event) => {
        const input = event.target.value;
        setInputContent(input);
        setDebounceInput(input);
        debounceApiCall(input)
    };
    
    const handleInputBlur = () => {
        setTimeout(() => setIsActive(false), 200);
    }
    
    const handleGetHotels = async () => {
        try {
            const hotelResults = await getHotels(destID, inDate, outDate);
            console.log("Hotel Results:", hotelResults);
            setHotelList(hotelResults.result);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }
    
    const handleResultClick = (selectedValue) => {
        setInputContent(() => selectedValue);
        setIsActive(false);
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

    const getHotelList = () => {
        return(
            hotelList.map(hotel => {
                return (
                    <HotelCard 
                        details = {{
                            img : hotel.max_photo_url,
                            name : hotel.hotel_name,
                            location : hotel.district ? `${hotel.district}, ${hotel.city_trans}` : hotel.city_trans,
                            price : hotel.price_breakdown.gross_price,
                            review : hotel.review_score
                        }}
                        hotelID={hotel.hotel_id}
                        onSelect={() => handleClickedHotel(hotel.hotel_id)}
                    />
                )})
        )
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
                    <button className={styles.SubmitButton} type='button' onClick={() => handleGetHotels(destID)}>Submit</button>
                </div>
                <div className={styles.Date__row}>
                    <label className={`${styles.label} d-flex`}>Check-In Date
                        <input 
                            className={styles.Date__input} 
                            type='date'
                            value={inDate}
                            onChange={handleCheckInDateChange}                            
                        />
                    </label>
                    <label className={`${styles.label} d-flex`}>Check-Out Date
                        <input 
                            className={styles.Date__input} 
                            type='date'
                            value={outDate}
                            onChange={handleCheckOutDateChange}                        />
                    </label>
                </div>
            </form>
            <section className={styles.HotelScroll}>
                {hotelList.length > 0 ? getHotelList() : null}
            </section>
        </div>
    )
}