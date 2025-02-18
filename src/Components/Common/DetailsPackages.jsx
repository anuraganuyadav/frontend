import React, { useState } from 'react'

import styles from "../css/detailspackages.module.css";  // Ensure the path is correct
import Header1 from './Header1'
import Header2 from './Header2'
import Footer from './Footer'
import DetailsContact from './DetailsContact';
import InternationalCountry from './InternationalCountry';
import DownloadAndShare from './DownloadAndShare';



const DetailsPackages = (type) => {
    const [activeSection, setActiveSection] = useState("overview"); // Default to 'overview'
    const [expandedDays, setExpandedDays] = useState({}); // Store expanded days
    const [isModalOpen, setIsModalOpen] = useState(false);  // Track modal state



    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Function to toggle the expanded state of a day
    const toggleDayContent = (day) => {
        setExpandedDays(prevState => ({
            ...prevState,
            [day]: !prevState[day]
        }));
    };


    const handleShareClick = () => {
        setIsModalOpen(true);  // Show modal on share icon click
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    // Content for the days (example)
    const dayContent = {
        "Day 1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo in orci dignissim auctor. Curabitur vel magna et metus consectetur mollis. Curabitur vel magna et metus consectetur mollis. Aenean tincidunt egestas nisi, vitae vehicula arcu volutpat ac. Suspendisse vitae risus nec arcu venenatis pretium.",
        "Day 2": "Integer tincidunt, purus sit amet sodales dignissim, metus eros viverra nisi, non fringilla sapien felis id mi. Ut fermentum, neque at laoreet blandit, nunc est fringilla lectus, at tincidunt nulla ipsum a nulla. Cras vitae justo risus.",
        "Day 3": "Maecenas quis magna non tortor dignissim aliquam. Phasellus eget nulla in velit viverra cursus. Donec ut felis at nulla cursus placerat a et eros. Aenean at interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla consequat urna et lectus."
    };


    return (
        <>
            <Header1 />
            <Header2 />

            {/* Share Modal */}
            {isModalOpen && <DownloadAndShare onClose={handleCloseModal} />}

            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">Details Packages</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Packages</li>
                    </ol>

                    <div>
                        <button type="button" className={`${styles.dwnit} btn btn-warning`} >

                            Download Itinerary
                        </button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.sharelink}
                            onClick={handleShareClick}  // Trigger modal on click
                        >
                            <path
                                d="M11 0.5V4.5C4 5.5 1 10.5 0 15.5C2.5 12 6 10.4 11 10.4V14.5L18 7.5L11 0.5ZM13 5.33L15.17 7.5L13 9.67V8.4H11C8.93 8.4 7.07 8.78 5.34 9.35C6.74 7.96 8.54 6.87 11.28 6.5L13 6.23V5.33Z"
                                fill="#FBFBFB"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Header End */}

            {/* Main Content */}
            <div className="container py-5">
                <div className="row">
                    {/* Left Part */}       
                    <div className="col-lg-8">   
                        <h2 className={styles.packagename}>6 Days Malaysia Tour Package With Genting Highlands</h2>
                        <div className="col-lg-12" style={{ textAlign: 'center' }}>
                            
                            <span className="text-primary product-price h3" >
                                <i className="fas fa-rupee-sign"></i>22500
                            </span>
                            <span className={`${styles.preprice} h3`}>
                                <span className="fas fa-rupee-sign"></span>23,500
                            </span>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.pickupdropcontainer}>
                                <img src="/img/new-location.svg" className={styles.pickupdropicon} />
                                <div className={styles.pickupdropinfo}>
                                    <h3 className={styles.pickupdropheading}>Pickup & Drop</h3>
                                    <p className={styles.pickupdropdetails}>Kuala Lumpur Airport - Kuala Lumpur Airport</p>
                                </div>
                            </div>

                            <div className={styles.pickupdropcontainer}>
                                <img src="/img/new-clock.svg" className={styles.durationIcon} />
                                <div className={styles.pickupdropinfo}>
                                    <p className={styles.durationText}>Duration: 5N - 6D</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.itncontainer}>

                            <div className={`${styles.sectiontitle} ${activeSection === "overview" ? styles.active : ""}`} onClick={() => handleSectionClick("overview")}>
                                <p className={styles.detailsheading}>Overview &amp; Highlights</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "itinerary" ? styles.active : ""}`} onClick={() => handleSectionClick("itinerary")}>
                                <p className={styles.detailsheading}>Itinerary</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "inclusions" ? styles.active : ""}`} onClick={() => handleSectionClick("inclusions")}>
                                <p className={styles.detailsheading}>Inclusions</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "exclusions" ? styles.active : ""}`} onClick={() => handleSectionClick("exclusions")}>
                                <p className={styles.detailsheading}>Exclusions</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "otherInfo" ? styles.active : ""}`} onClick={() => handleSectionClick("otherInfo")}>
                                <p className={styles.detailsheading}>Other Info</p>
                            </div>
                        </div>

                        {/* Content of each section */}
                        {activeSection === "overview" && (

                            <div className={styles.pkgdetails}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
                                        fill="#01AFD1"
                                    />
                                </svg>
                                <h3 className={styles.dthead}>Overview & Highlights</h3>
                                <p className={styles.indvdetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
                            </div>

                        )}

                        {activeSection === "itinerary" && (
                            <div className={styles.pkgdetails}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
                                        fill="#01AFD1"
                                    />
                                </svg>
                                <h3 className={styles.dthead}>Itinerary</h3>
                                <div className="itin">
                                    {["Day 1", "Day 2", "Day 3"].map((day, index) => (
                                        <div key={index} className={styles.itineraryday}>
                                            <div className={styles.daynumber}>{day}</div>
                                            <div className={styles.daydetails}>
                                                {/* Show partial content initially */}
                                                {expandedDays[day] ? (
                                                    <p>{dayContent[day]}</p>
                                                ) : (
                                                    <p>{dayContent[day].slice(0, 70)}...</p> // Only show 50 words initially
                                                )}
                                            </div>
                                            {/* Toggle icon */}
                                            <img
                                                src={expandedDays[day] ? "/img/minus-new.svg" : "/img/plus-new.svg"}
                                                className={styles.toggleicon}
                                                onClick={() => toggleDayContent(day)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === "inclusions" && (
                            <div className={styles.pkgdetails}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
                                        fill="#01AFD1"
                                    />
                                </svg>
                                <h3 className={styles.dthead}>Inclusions</h3>
                                <div className={styles.inclusionscontainer}>
                                    <div className={styles.inclusionitem}>
                                        <img src="/img/check-mark.png" alt="check mark" />
                                        <p>1N Johannesburg Hotel with Breakfast</p>
                                    </div>

                                    <div className={styles.inclusionitem}>
                                        <img src="/img/check-mark.png" alt="check mark" />
                                        <p>Cape Point with return Funicular ride (if open)</p>
                                    </div>

                                    <div className={styles.inclusionitem}>
                                        <img src="/img/check-mark.png" alt="check mark" />
                                        <p>Visit to Boulders Beach to see the African Penguins</p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {activeSection === "exclusions" && (
                            <div className={styles.pkgdetails}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
                                        fill="#01AFD1"
                                    />
                                </svg>
                                <h3 className={styles.dthead}>Exclusions</h3>
                                <div className={styles.exclusionscontainer}>
                                    <div className={styles.exclusionsitem}>
                                        <img src="/img/exclude.png" alt="check mark" />
                                        <p>1N Johannesburg Hotel with Breakfast</p>
                                    </div>

                                    <div className={styles.exclusionsitem}>
                                        <img src="/img/exclude.png" alt="check mark" />
                                        <p>Cape Point with return Funicular ride (if open)</p>
                                    </div>

                                    <div className={styles.exclusionsitem}>
                                        <img src="/img/exclude.png" alt="check mark" />
                                        <p>Visit to Boulders Beach to see the African Penguins</p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {activeSection === "otherInfo" && (
                            <div className={styles.pkgdetails}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
                                        fill="#01AFD1"
                                    />
                                </svg>
                                <h3 className={styles.dthead}>Other Info</h3>
                                <p className={styles.indvdetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
                            </div>
                        )}
                    </div>

                    {/* Right Part */}
                    <DetailsContact />
                </div>
            </div>
            {/* Main Content End */}

            <InternationalCountry></InternationalCountry>
            <Footer />
        </>
    );
}

export default DetailsPackages;
