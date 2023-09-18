import styles from './landing.module.scss';

export default function LandingSection(){
    return(
        <div className={styles.Landing}>
              <form className={`py-4 ${styles.Form}`}>
                <section className={` flex-column flex-lg-row gap-3 gap-lg-0 ${styles.section}`}>
                  <div>
                      <label className={`${styles.Form__label} d-block`}>Where To?</label>
                      <input className={styles.Form__inputLocation} type='text' required />
                  </div>
                  <section className={`flex-column flex-lg-row gap-3 gap-lg-5 ${styles.rightSectionForm}`}>
                    <div>
                        <label className={`${styles.Form__label} d-block`}>Check-In</label>
                        <input className={styles.Form__input} type='date' />
                    </div>
                    <div>
                        <label className={`${styles.Form__label} d-block`}>Check-Out</label>
                        <input className={styles.Form__input} type='date' />
                    </div>
                    <div>
                        <label className={`${styles.Form__label} d-block`}>Guests</label>
                        <select className={`w-100 ${styles.Form__input}`}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </div>
                    <button className={`m-auto mt-3 mt-lg-auto ${styles.submitButton}`}>Submit</button>
                  </section>
                </section>
              </form>
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