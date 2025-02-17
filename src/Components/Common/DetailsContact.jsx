import React from 'react'
import styles from "../css/detailsContactus.module.css";
const DetailsContact = () => {
    return (
        <>
            <div className="col-lg-4">
                <h3 className={styles.customised}>Customised</h3>
                <p className={styles.custrip}>Customise your trip with us!</p>
                <div className={styles.quotecontainer}><div className={styles.quotebox}>Get Quotes</div></div>
                {/* Form for quotes */}
                <div className={`${styles.formcontainer} py-4`}>

                    <p className={styles.tagline}><span className={styles.highlight}>Contact Us?</span><br />Allow Us to Call You Back!</p>
                    <form action="#" method="POST">
                        <div className={`${styles.formName} py-4`}>

                            <div className={styles.inputWrapper}>
                                <img src="/img/name.svg" alt="Name Icon" className={styles.inputIcon} />
                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Please Enter Name"

                                className={styles.input} // Apply the .input class to the input element
                            />
                        </div>
                        <div className={`${styles.formName} py-4`}>

                            <div className={styles.inputWrapper}>
                                <img src="/img/phone.svg" alt="Name Icon" className={styles.inputIcon} />
                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Please Enter Number"

                                className={styles.input} // Apply the .input class to the input element
                            />
                        </div>

                        <div className={`${styles.formName} py-4`}>

                            <div className={styles.inputWrapper}>
                                <img src="/img/email.svg" alt="Name Icon" className={styles.inputIcon} />
                            </div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Please Enter Email"

                                className={styles.input} // Apply the .input class to the input element
                            />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary w-100" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DetailsContact