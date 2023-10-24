import { useState } from 'react'
import styles from './viewhotel.module.scss'
import { Carousel, Offcanvas } from 'react-bootstrap';

export default function Viewhotel({ selectedHotel, preset }){
    const [isActive, setIsActive] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0)

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
    const handleSlide = (selectedIndex) => setCurrentSlide(prevNum => selectedIndex)
    const handleClose = () => setIsActive(false);
    const handleShow = () => setIsActive(true);

    const blockID = hotel && hotel.block && hotel.block[0] && hotel.block[0].room_id ? hotel.block[0].room_id : null;
    const price = hotel ? hotel.composite_price_breakdown?.all_inclusive_amount?.value : null;
    const name = hotel ? hotel.hotel_name : null;
    const photoGallery = hotel && hotel.rooms && blockID ? hotel.rooms[blockID].photos : [];

    const photos = () => {
        return photoGallery.map((photo, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className={styles.hotel_img}
                        src = {photo.url_original} 
                        style={{
                            backgroundImage:`${hotel && photoGallery.length > 0? `url(${photo.url_original})` : `linear-gradient(45deg, #FFC700 1%, rgb(241, 145, 0) 10%)`}`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                        }}
                    />
                </Carousel.Item>
            )
        })
    }
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
            <section className={styles.hotel_model}> 
                {checkSelectHotel()? 
                    (
                        <>
                            <Carousel indicators={false} onSelect={handleSlide}>
                                {photos()}
                            </Carousel>
                            <div className={blockID? `${styles.hotel_details}` : `${styles.hide}`}>
                                <h1 className={blockID? `${styles.hotel_name}` : `${styles.hide}`}>{hotel ? name : 0}</h1>
                                <h3 className={blockID? `${styles.hotel_nightrates}` : `${styles.hide}`}>${Math.floor(price)}/Night</h3>
                                <button className={blockID? `${styles.reserve_button}` : `${styles.hide}`} onClick={handleShow}>Reserve</button>
                            </div>
                            <p className={blockID? `${styles.hotel_photocount}` : `${styles.hide}`}> {`${currentSlide + 1}/${photoGallery.length}`}</p>
                        </>
                    ) 
                    : (
                        <div
                            className= 'w-100 h-100'
                            style={{
                                background:`linear-gradient(45deg, #FFC700 1%, rgb(241, 145, 0) 10%)`,
                            }}
                        >
                        </div>
                    )}
                
            </section>
        </>
    )
}