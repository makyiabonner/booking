import HotelCard from '../HotelCard/hotelcard'
import ResultsCard from '../ResultsCard/resultsCard';
import styles from './sidepanel.module.scss';
import { getLocation, getHotels, getHotelData } from '@/components/api';
import { debounce, TODAY, TOMORROW } from '@/components/util';
import { useState } from 'react';
import { SearchArrivalInput, SearchDepartureInput, SearchLocationInput, Search } from '../MobileSearchScreen/MobileSearchScreen';

export default function Sidepanel({ selectedHotel }){
    const [inputContent, setInputContent] = useState('');
    const [debounceInput, setDebounceInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [hotelList, setHotelList] = useState([]);
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
    
    
    const handleCheckInDateChange = (event) => {
        setInDate(event.target.value);
    };

    const handleCheckOutDateChange = (event) => {
        setOutDate(event.target.value);
    };

    const debounceApiCall = debounce(async (inputValue) => {
        const searchResults = await getLocation(inputValue);
        setSearchList(searchResults);
    }, 900);

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
            console.log(hotelList)
            setPresetHotel(hotelList[0]);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }
    
    const handleResultClick = (selectedValue) => {
        setInputContent(() => selectedValue);
        setIsActive(false);
    };


    const getHotelList = () => {
        return(
            hotelList.map(hotel => {
                return (
                    <HotelCard 
                        key={hotel.hotel_id}
                        details = {{
                            img : hotel.max_photo_url,
                            name : hotel.hotel_name,
                            location : hotel.district ? `${hotel.district}, ${hotel.city_trans}` : hotel.city_trans,
                            price : hotel.price_breakdown.gross_price,
                            review : hotel.review_score
                        }}
                        isSelected={selectedID === hotel.hotel_id}
                        onSelect={() => handleClickedHotel(hotel.hotel_id) && setSelectedID(hotel.hotel_id)}
                    />
                )})
        )
    }

    return (
        <div className={styles.SidePanel}>
            <form className={styles.SearchTab}>
                <div className={styles.Location}>
                    <label className={`${styles.label}`}>Where To?
                        <SearchLocationInput />
                    </label>
                        <Search />
                </div>
                <div className={styles.Date__row}>
                    <label className={`${styles.label} d-flex`}>Arrival
                        <SearchArrivalInput />
                    </label>
                    <label className={`${styles.label} d-flex`}>Departure
                        <SearchDepartureInput />
                    </label>
                </div>
            </form>
            <section className={styles.HotelScroll}>
                {hotelList && hotelList.length > 0 ? 
                    getHotelList() : 
                    <div className={styles.EmptyHotelScroll}>
                        <p>Well this is awkward...</p>
                    </div>}
            </section>
        </div>
    )
}