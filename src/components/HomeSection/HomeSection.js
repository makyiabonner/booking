import styles from './HomeSection.module.scss';

export default function HomeSection(){
    return (
        <div className={styles.div}>
            <main className={styles.main}>
                <div className={styles.firstDiv}></div>
                <div className='w-75 d-flex gap-5'>
                    <div className={styles.secondDiv}></div>
                    <div className={styles.thirdDiv}>
                        <h1 className={styles.h1}>Create<br></br>Your<br></br>Account</h1>
                    </div>
                </div>
            </main>
        </div>
    )
}