import styles from './Nav.module.scss';

export default function Nav(){
    
    return (
        <nav className={styles.nav}>
            <h1>Savvy</h1>
            <div className={styles.div}>
                <ul className={styles.ul}>
                    <li><p className='p-0 m-0'>Home</p></li>
                    <li><p className='p-0 m-0'>Booking</p></li>
                </ul>
                <a><button className='btn btn-secondary px-3 py-1 rounded'>Sign In</button></a>
            </div>
    </nav>
    )
}