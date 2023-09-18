import { ScrollParallax } from 'react-just-parallax';
import styles from './HomeSection.module.scss';
import pic from '../../../../public/images/continueJourney.svg'

export default function HomeSection(){
    return (
        <div className={styles.div}>
            <main className={styles.options_section}>
                <div>
                    <div>
                        <h1>Continue last searched</h1>
                    </div>
                </div>
                <div className={styles.options_section_second_row}>
                    <div>
                        <h1>Coming Soon<br></br>To Mobile</h1>
                    </div>
                    <div>
                        <h1>Create<br></br>Your<br></br>Account</h1>
                    </div>
                </div>
            </main>
        </div>
    )
}