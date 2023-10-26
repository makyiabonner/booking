import styles from './landing.module.scss';

export default function LandingSection(){
    return(
        <div className={styles.Landing}>
              <section className={styles.Hero}>
                <div className={styles.Hero__content}>
                  <i>
                    <h1 className={styles.Hero__title}>Savvy Relaxation,<br></br>Satisfies The Need</h1>
                  </i>
                  <i>
                    <p className={styles.Hero__subtitle}>Take a Quick Getaway with Ease through<br></br> Savvy Online Booking Service</p>
                  </i>
                </div>
              </section>
        </div>
    )
}