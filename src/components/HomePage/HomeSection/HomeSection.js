import styles from './HomeSection.module.scss';
import { useState, useEffect } from 'react';
import Register from '@/components/Register/Register';

export default function HomeSection(){
    const [ isActive, setIsActive ] = useState(false);
    const [ offsetY, setOffsetY ]= useState(null);
    const toggleActiveState = () => setIsActive(!isActive);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    return (
        <>
            <section className={isActive? `${styles.Show_signin}` : 'd-none'}>
                <Register isActive={isActive} toggleActiveState={toggleActiveState}/>
            </section>
            <div className={styles.options}>
                <main className={styles.options__section} style={{ transform:`translateY(${offsetY * -.04}px)`}}>
                    <div>
                        <div>
                            <h1>Continue last searched</h1>
                        </div>
                    </div>
                    <div className={styles.options__section_second_row}>
                        <div>
                            <h1>Coming Soon<br></br>To Mobile</h1>
                        </div>

                        <button className={styles.Second_row__button} onClick={toggleActiveState}>
                            <div>
                                <h1>Create<br></br>Your<br></br>Account</h1>
                            </div>
                        </button>
                    </div>
                </main>
            </div>
        </>
    )
}