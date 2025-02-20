import React, { useState } from 'react';
import FeedbackModal from '../Modal/FeedbackModal';
import HeaderEnquery from '../Modal/HeaderEnquery';


const CommonEnquery = () => {

    const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

    // Handle Enquiry button click
    const handleEnqueryClick = () => {
        setEnqueryModalOpen(true); // Open modal on Enquiry button click
    };

    // Handle Enquiry modal close
    const handleEnqueryCloseModal = () => {
        setEnqueryModalOpen(false); // Close modal
    };



    //feedback modal


    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true); // Open the modal
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false); // Close the modal
    };
    return (
        <>
            <div>
                <div className="horizontally-enquery-container">
                    <a href="#" className="horizontally-enquery-btn" onClick={handleEnqueryClick} >
                        Enquery Now
                    </a>
                </div>

            </div>


            <div>
                <div className="vertical-feedback-container">
                    <a href="#" className="vertical-feedback-btn" onClick={openFeedbackModal}>
                        Send Feedback
                    </a>
                </div>
            </div>


            {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}

            {isFeedbackModalOpen && <FeedbackModal onClose={closeFeedbackModal} />}

        </>
    )
}

export default CommonEnquery