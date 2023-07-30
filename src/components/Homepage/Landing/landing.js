import styles from './landing.module.scss';

export default function LandingSection(){
    return(
        <div className={styles.landing}>
              <form className={`py-4 ${styles.form}`}>
                <section className={` flex-column flex-lg-row gap-3 gap-lg-0 ${styles.section}`}>
                  <div>
                      <label className={`${styles.label} d-block`}>Locations</label>
                      <input className={styles.LocationText} type='text' required />
                  </div>
                  <section className={`flex-column flex-lg-row gap-3 gap-lg-5 ${styles.rightSectionForm}`}>
                    <div>
                        <label className={`${styles.label} d-block`}>Check-In / Check-Out Date</label>
                        <input className={styles.inputText} type='text' />
                    </div>
                    <div>
                        <label className={`${styles.label} d-block`}>Total Persons / Rooms</label>
                        <input className={styles.inputText} type='text' />
                    </div>
                    <button className={`m-auto mt-3 mt-lg-auto ${styles.submitButton}`}>Submit</button>
                  </section>
                </section>
              </form>
              <section className={styles.landingContent}>
                <div className={styles.landingNav}>
                  <button className={`d-none d-lg-block ${styles.button}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgba(255,255,255,.6)" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                  </button>
                  <button className={`d-none d-lg-block ${styles.button}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgba(255,255,255,.6)" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                  </button>
                  <input className={`d-none d-lg-block ${styles.input}`} type='text' />
                </div>
                <div className={`${styles.landingDiv} pb-lg-0`}>
                  <i>
                    <h1 className={styles.landingText}>Savvy Relaxation,<br></br>Satisfies The Need</h1>
                  </i>
                  <i>
                    <p className={styles.landingDesc}>Take a Quick Getaway with Ease through<br></br> Savvy Online Booking Service</p>
                  </i>
                </div>
              </section>
        </div>
    )
}