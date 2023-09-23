import styles from './resultsCard.module.scss'
import { useState } from 'react'

export default function ResultsCard(){
    return(
        <button 
            className={`${styles.Card} ${styles.hover}`}
            onHover
            >
            <img src='./images/location-icon.png'></img>
            <div>
                <h4 className={styles.Card__location}>Atlanta</h4>
                <span className={`${styles.Card__full_location}`}>Georgia, United States</span>
            </div>
        </button>
    )
}