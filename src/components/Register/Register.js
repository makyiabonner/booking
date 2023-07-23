import styles from '../Register/Register.module.scss';
import { useState } from 'react';

export default function Register({ isActive, toggleActiveState }){
    const [ returningUser, setReturningUser ] = useState(false);
    return(
        <>
            <main className={isActive? `${styles.darkScreen}` : `d-none`}
                    onClick={toggleActiveState}
                    >
                {returningUser === false
                    ? (
                        <div className={styles.registry}>
                            <div className={styles.topDiv}
                                 onClick={(event) => event.stopPropagation()}
                            >
                                <h3>Create Your Account</h3>
                                <input className={styles.input}  type={'text'} placeholder='Email'/>
                                <input className={styles.input} type={'text'} placeholder='Password'/>
                                <button className={`btn btn-primary ${styles.button}`}>Sign up</button>
                            </div>
                            <div className={styles.bottomDiv}
                                 onClick={(event) => event.stopPropagation()}
                            >
                                <p className={styles.p}>Returning User? 
                                    <button 
                                        className={styles.a} 
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            setReturningUser(true)
                                            }
                                        }
                                    >Log in</button>
                                </p>
                            </div>
                        </div>
                    )
                    : (
                        <div className={styles.registry}>
                            <div className={styles.topDiv}
                                 onClick={(event) => event.stopPropagation()}
                            >
                                <h3>Login to Savvy</h3>
                                <input className={styles.input}  type={'text'} placeholder='Email'/>
                                <input className={styles.input} type={'text'} placeholder='Password'/>
                                <button className={`btn btn-primary ${styles.button}`}>Sign in</button>
                            </div>
                            <div className={styles.bottomDiv}
                                 onClick={(event) => event.stopPropagation()}
                            >
                                <p className={styles.p}>Not a Returning User? 
                                    <button 
                                        className={styles.a} 
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            setReturningUser(false)
                                            }
                                        }
                                    >Sign up</button>
                                </p>
                            </div>
                        </div>
                    )  
                }
            </main>
        </>
    )
}
