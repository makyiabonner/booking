import { useState } from 'react'
import HotelCard from '../HotelCard/hotelcard'
import styles from './viewhotel.module.scss'
import { Button, Offcanvas } from 'react-bootstrap';

export default function Viewhotel({ selectedHotel }){
    const [ reviews, setReviews] = useState(false)
    const [show, setShow] = useState(false);

    const toggleReviews = () => setReviews(reviews => !reviews)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const blockID = selectedHotel?.block[0].room_id
    const hotelPrice = selectedHotel?.composite_price_breakdown.all_inclusive_amount.value ;
    const hotelRating = selectedHotel?.breakfast_review_score.rating
    ////const hotelComments = selectedHotel?.
    const hotelName = selectedHotel?.hotel_name || 'Loading...';
    const hotelPhotoGallery = selectedHotel?.rooms[blockID].photos || [];
    const slide = 0;
    const currentSlide = hotelPhotoGallery[slide].url_original

    
    return (
        <>
            <Offcanvas className='w-50'show={show} onHide={handleClose}>
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
            <section className={`${styles.hotel_model} position-relative`} 
                style={{
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundImage:`url(${currentSlide})`
                }}>
                <div className='d-flex h-100'>
                    <div className={styles.hotel_rating_div}>
                        <p className={styles.hotel_rating}>{hotelRating}</p>
                    </div>
                </div>
                <div className={styles.hotel_details}>
                    <h1 className={styles.hotel_name}>{selectedHotel ? hotelName : 0}</h1>
                    <h3 className={styles.hotel_nightrates}>${Math.floor(hotelPrice)}/Night</h3>
                    <button className={styles.reserve_button} onClick={handleShow}>Reserve</button>
                </div>
                    <p className={styles.hotel_photocount}> {`0/${hotelPhotoGallery.length}`}</p>
            </section>
        </>
    )
}