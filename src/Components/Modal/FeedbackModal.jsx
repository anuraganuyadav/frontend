import React, { useState } from "react";
import styles from "../css/feedbackmodal.module.css";

function FeedbackModal({ onClose }) {
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <span
                        className={styles.closeModal}
                        onClick={onClose} // Close modal on click
                    >
                        &times;
                    </span>
                    <h2 className={styles.feedbackheading}>Send Feedback</h2>
                    <form className={styles.form}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your Name"
                            required
                            className={styles.input}
                        />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email Id"
                            required
                            className={styles.input}
                        />

                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="5"
                            placeholder="Enter your Feedback"
                            required
                            className={styles.textarea}
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FeedbackModal;
