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
            <section className={styles.hotel_model} 
                style={{
                    backgroundImage:`${hotel && photoGallery.length > 0? `url(${currentSlide})` : `linear-gradient(45deg, #FFC700 1%, rgb(241, 145, 0) 10%)`}`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'
                }}>
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