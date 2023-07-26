import styles from './Nav.module.scss';

export default function Nav({ isActive, toggleActiveState }){
    
    return (
        <nav className={styles.nav}>
            <section className={styles.section}>
                <div className={styles.imgContainer}>
                    <img className={styles.img}
                        src='/images/Savvy.jpg' 
                        alt='Savvy'/>
                </div>
                <div className={styles.div}>
                    <ul className={styles.ul}>
                        <li><p className='p-0 m-0'>Home</p></li>
                        <li><p className='p-0 m-0'>Booking</p></li>
                    </ul>
                    <button 
                        className='btn btn-secondary px-3 py-1 rounded'
                        onClick={toggleActiveState}
                    >Sign In</button>
                </div>
            </section>
    </nav>
    )
}