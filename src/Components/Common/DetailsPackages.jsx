import React, { useState } from 'react'

import styles from "../css/detailspackages.module.css";  // Ensure the path is correct
import Header1 from './Header1'
import Header2 from './Header2'
import Footer from './Footer'
import DetailsContact from './DetailsContact';
import InternationalCountry from './InternationalCountry';

const DetailsPackages = () => {
    const [activeSection, setActiveSection] = useState("overview"); // Default to 'overview'

    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Header1 />
            <Header2 />

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
                        <button type="button" className={`${styles.dwnit} btn btn-warning`}>
                            Download Itinerary
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.sharelink}>
                            <path
                                d="M11 0.5V4.5C4 5.5 1 10.5 0 15.5C2.5 12 6 10.4 11 10.4V14.5L18 7.5L11 0.5ZM13 5.33L15.17 7.5L13 9.67V8.4H11C8.93 8.4 7.07 8.78 5.34 9.35C6.74 7.96 8.54 6.87 11.28 6.5L13 6.23V5.33Z"
                                fill="#FBFBFB"
                            ></path>
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
                                <p>Overview &amp; Highlights</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "itinerary" ? styles.active : ""}`} onClick={() => handleSectionClick("itinerary")}>
                                <p>Itinerary</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "inclusions" ? styles.active : ""}`} onClick={() => handleSectionClick("inclusions")}>
                                <p>Inclusions</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "exclusions" ? styles.active : ""}`} onClick={() => handleSectionClick("exclusions")}>
                                <p>Exclusions</p>
                            </div>
                            <div className={`${styles.sectiontitle} ${activeSection === "otherInfo" ? styles.active : ""}`} onClick={() => handleSectionClick("otherInfo")}>
                                <p>Other Info</p>
                            </div>
                        </div>

                        {/* Content of each section */}
                        {activeSection === "overview" && (
                            <div>
                                <h3>Overview & Highlights</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
                            </div>
                        )}

                        {activeSection === "itinerary" && (
                            <div>
                                <h3>Itinerary</h3>
                                <div className="itin">
                                    <div className="itday">Day 1</div>
                                    <div className="itdetails">Arrival in Johannesburg. Welcome to South Africa.</div>
                                </div>
                            </div>
                        )}

                        {activeSection === "inclusions" && (
                            <div>
                                <h3>Inclusions</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
                            </div>
                        )}

                        {activeSection === "exclusions" && (
                            <div>
                                <h3>Exclusions</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
                            </div>
                        )}

                        {activeSection === "otherInfo" && (
                            <div>
                                <h3>Other Info</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
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
