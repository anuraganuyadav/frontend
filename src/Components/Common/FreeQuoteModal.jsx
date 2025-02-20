import React, { useState } from 'react';
import styles from "../css/FreeQuoteModal.module.css";  // Assume you will create styles for it

const FreeQuoteModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContainer}>
                <div className={styles.imageSection}>
                    <img
                        src="/img/tour-booking-bg.jpg"
                        alt="Free Quote"
                        className={styles.modalImage}

                    />
                    <h3 className={styles.quotenxt}>Where do you want to go next?</h3>
                    <p className={styles.freequotenow}>Make your move, fill out your details now!</p>
                </div>


                <div className={styles.formSection}>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="number">Phone *</label>
                            <input
                                type="tel"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Id *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
                <div >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className={styles.quoteclosebtn} onClick={onClose} fill="none" viewBox="0 0 24 24" stroke="#015F74">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5"></path>
                    </svg> */}



                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.quoteclosebtn} onClick={onClose} fill="none" viewBox="0 0 24 24" stroke="#015F74"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5"></path><circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>

                </div>
                {/* <span onClick={onClose} className={styles.quoteclosebtn}>&times;</span> */}
            </div>
        </div>
    );
}

export default FreeQuoteModal;
