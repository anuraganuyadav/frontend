import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal"; // Assuming you have this modal component

function YourComponent() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openFeedbackModal = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        setModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <div>
            {/* Feedback Button */}
            <div className="vertical-feedback-container">
                <a href="#" className="vertical-feedback-btn" onClick={openFeedbackModal}>
                    Send Feedback
                </a>
            </div>

            {/* WhatsApp Button */}
            <div className="vertical-whatsapp-container">
                <a
                    href="https://api.whatsapp.com/send?text=https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="WhatsApp" src="/img/whatsapp.webp" className="vertical-whatsapp-btn" />
                </a>
            </div>

            {/* Feedback Modal */}
            {isModalOpen && <FeedbackModal onClose={closeModal} />}
        </div>
    );
}

export default YourComponent;
