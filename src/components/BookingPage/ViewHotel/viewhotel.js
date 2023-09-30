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

    console.log(selectedHotel);
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
            <section className={`${styles.hotel_model} position-relative`} style={{backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className={reviews? styles.toggle_reviews : 'd-none'}>
                    <div className={styles.review_grid}>
                        <div className={styles.review_card}>
                            <div className={styles.review_left}>
                                <img src="" alt="" className={styles.review_cardImg} />
                                <h6 className={styles.review_cardProfileName}>hello world</h6>
                                <span className={styles.review_cardDate}>July 2023</span>
                            </div>
                            <div className={styles.review_right}>
                                <p className={styles.review_cardComment}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab officiis in atque, odio doloremque deleniti quo debitis culpa amet sint modi neque unde cupiditate, ducimus aspernatur nesciunt possimus? Nostrum, dolore!
                                </p>
                            </div>
                        </div>
                        <div className={styles.review_card}>
                            <div className={styles.review_left}>
                                <img src="" alt="" className={styles.review_cardImg} />
                                <h6 className={styles.review_cardProfileName}>hello world</h6>
                                <span className={styles.review_cardDate}>July 2023</span>
                            </div>
                            <div className={styles.review_right}>
                                <p className={styles.review_cardComment}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab officiis in atque, odio doloremque deleniti quo debitis culpa amet sint modi neque unde cupiditate, ducimus aspernatur nesciunt possimus? Nostrum, dolore!
                                </p>
                            </div>
                        </div>
                        <div className={styles.review_card}>
                            <div className={styles.review_left}>
                                <img src="" alt="" className={styles.review_cardImg} />
                                <h6 className={styles.review_cardProfileName}>hello world</h6>
                                <span className={styles.review_cardDate}>July 2023</span>
                            </div>
                            <div className={styles.review_right}>
                                <p className={styles.review_cardComment}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab officiis in atque, odio doloremque deleniti quo debitis culpa amet sint modi neque unde cupiditate, ducimus aspernatur nesciunt possimus? Nostrum, dolore!
                                </p>
                            </div>
                        </div>
                        <div className={styles.review_card}>
                            <div className={styles.review_left}>
                                <img src="" alt="" className={styles.review_cardImg} />
                                <h6 className={styles.review_cardProfileName}>hello world</h6>
                                <span className={styles.review_cardDate}>July 2023</span>
                            </div>
                            <div className={styles.review_right}>
                                <p className={styles.review_cardComment}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab officiis in atque, odio doloremque deleniti quo debitis culpa amet sint modi neque unde cupiditate, ducimus aspernatur nesciunt possimus? Nostrum, dolore!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex h-100'>
                    <div className={styles.toggle_reviews} onClick={toggleReviews}></div>
                    <div className={styles.hotel_rating_div}>
                        <p className={styles.hotel_rating}>9.0</p>
                        <ul className={styles.hotel_verdict}>
                            <li className={styles.hotel_pros}>Good akjd ksad jfl; kadf jdflja dhoadjfa</li>
                            <li className={styles.hotel_pros}>Great</li>
                            <li className={styles.hotel_cons}>Bad</li>
                        </ul>
                    </div>
                    <div className={styles.hotel_review_div}>
                        <button className={styles.review_button}>REVIEWS</button>
                    </div>
                    <div className={styles.hotel_love_div}>
                        <button className={styles.love_button}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.hotel_details}>
                    <h1 className={styles.hotel_name}>Hotel_Name</h1>
                    <h3 className={styles.hotel_nightrates}>$122/Night</h3>
                    <button className={styles.reserve_button} onClick={handleShow}>Reserve</button>
                </div>
                    <p className={styles.hotel_photocount}> 5/21</p>
            </section>
        </>
    )
}