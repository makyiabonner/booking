import { useState } from 'react'
import HotelCard from '../HotelCard/hotelcard'
import styles from './viewhotel.module.scss'
import { Button, Offcanvas } from 'react-bootstrap';

export default function Viewhotel({ selectedHotel, preset }){
    const [reviews, setReviews] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const checkSelectHotel = () => {
        if (selectedHotel) {
            return selectedHotel;
        };

        if (preset && selectedHotel === null) {
            return preset;
        };
        return null;
    };
    const hotel = checkSelectHotel();
    const toggleReviews = () => setReviews(reviews => !reviews)
    const handleClose = () => setIsActive(false);
    const handleShow = () => setIsActive(true);

    const blockID = hotel && hotel.block && hotel.block[0] && hotel.block[0].room_id ? hotel.block[0].room_id : null;
    const price = hotel ? hotel.composite_price_breakdown?.all_inclusive_amount?.value : null;
    const rating = hotel ? hotel.breakfast_review_score?.rating : null;
    const name = hotel ? hotel.hotel_name : null;
    const slide = 0;
    const photoGallery = hotel && hotel.rooms && blockID ? hotel.rooms[blockID].photos : [];
    const currentSlide = hotel && photoGallery ? photoGallery[slide]?.url_original : null;

    return (
        <>
            <Offcanvas className='w-50'show={isActive} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
            <div className={reviews? styles.review_container : 'd-none'}>
                <div className={styles.review_closeTab_div} onClick={toggleReviews}>
                    <button className={styles.review_closeTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <section className={styles.hotel_model} 
                style={{
                    backgroundImage:`${hotel && photoGallery.length > 0? `url(${currentSlide})` : `linear-gradient(45deg, #FFC700 1%, rgb(241, 145, 0) 10%)`}`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'
                }}>
                <div className='d-flex h-100'>
                    <div className={currentSlide? `${styles.hotel_rating_div}` : `${styles.hide}`}>
                        <p className={currentSlide? `${styles.hotel_rating}` : `${styles.hide}`}>{rating}</p>
                    </div>
                </div>
                <div className={currentSlide? `${styles.hotel_details}` : `${styles.hide}`}>
                    <h1 className={currentSlide? `${styles.hotel_name}` : `${styles.hide}`}>{hotel ? name : 0}</h1>
                    <h3 className={currentSlide? `${styles.hotel_nightrates}` : `${styles.hide}`}>${Math.floor(price)}/Night</h3>
                    <button className={currentSlide? `${styles.reserve_button}` : `${styles.hide}`} onClick={handleShow}>Reserve</button>
                </div>
                    <p className={currentSlide? `${styles.hotel_photocount}` : `${styles.hide}`}> {`${slide}/${photoGallery.length}`}</p>
            </section>
        </>
    )
}