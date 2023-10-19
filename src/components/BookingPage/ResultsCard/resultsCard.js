import styles from './resultsCard.module.scss'

export default function ResultsCard({city, region}){
    return(
        <button
            type='button' 
            className={`${styles.Card} ${styles.hover}`}
            >
            <img src='./images/location-icon.png'></img>
            <div>
                <h4 className={styles.Card__location}>{city}</h4>
                <span className={`${styles.Card__full_location}`}>{region}</span>
            </div>
        </button>
    )
}