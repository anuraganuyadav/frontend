import React from 'react';
import styles from "../css/booknowmodal.module.css";

function BookNowModal({ onClose }) {
    return (
        <>
            <div className={styles.modalEnqueryOverlay}>
                <div className={styles.modalEnqueryContent}>
                    <span className={styles.closeEnqueryModal} onClick={onClose}>
                        &times;
                    </span>
                    <h2 className={styles.enqueryheading}>Book Now</h2>
                    <form className={styles.enqueryform}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your Name"
                            required
                            className={styles.enqueryinput}
                        />
                        <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Enter your Mobile No."
                            required
                            className={styles.enqueryinput}
                            maxLength={10}
                            pattern="\d{10}"
                            title="Please enter a valid 10-digit mobile number."
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email Id"
                            required
                            className={styles.enqueryinput}
                        />
                        <select
                            id="propertyType"
                            name="propertyType"
                            required
                            className={styles.enqueryselect}
                        >
                            <option value="" disabled>
                                Select Package Type
                            </option>
                            <option value="International">International</option>
                            <option value="Domestic">Domestic</option>
                        </select>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Enter your Message"
                            required
                            className={styles.enquerytextarea}
                        ></textarea>
                        <button type="submit" className={styles.enquerysubmitButton}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookNowModal;
