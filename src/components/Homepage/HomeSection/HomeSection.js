import { ScrollParallax } from 'react-just-parallax';
import styles from './HomeSection.module.scss';
import pic from '../../../../public/images/continueJourney.svg'

export default function HomeSection(){
    return (
        <div className={styles.div}>
            <main className={styles.main}>
                <div>
                    <img src={pic} 
                         className={styles.img}
                         alt='Continue last searched'
                         />
                </div>
                <div className={styles.second_row}>
                    <div className={styles.secondDiv}>
                        <h1>Coming Soon <br></br>To Mobile</h1>
                    </div>
                    <div className={styles.thirdDiv}>
                        <h1 className={styles.h1}>Create<br></br>Your<br></br>Account</h1>
                    </div>
                </div>
            </main>
        </div>
    )
}