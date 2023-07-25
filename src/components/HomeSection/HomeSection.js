import styles from './HomeSection.module.scss';

export default function HomeSection(){
    return (
        <div className={styles.div}>
            <main className={styles.main}>
                <div className={styles.firstDiv}></div>
                <div className='w-75 d-flex gap-5'>
                    <div className={styles.secondDiv}></div>
                    <div className={styles.thirdDiv}></div>
                </div>
            </main>
        </div>
    )
}