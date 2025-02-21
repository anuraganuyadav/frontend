import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HeaderEnquery from '../Modal/HeaderEnquery';
import CommonEnquery from './CommonEnquery';


const Header2 = () => {
    const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

    // Handle Enquiry button click
    const handleEnqueryClick = () => {
        setEnqueryModalOpen(true); // Open modal on Enquiry button click
    };

    // Handle Enquiry modal close
    const handleEnqueryCloseModal = () => {
        setEnqueryModalOpen(false); // Close modal
    };

    return (
        <>
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>International</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>

                            <div className="nav-item dropdown">
                                <Link
                                    to="/packages/domestic"
                                    className="nav-link"
                                >
                                    Domestic Packages
                                </Link>

                                <div className="dropdown-menu m-0">
                                    <NavLink to="/domestic/category/honeymoon-packages" className="dropdown-item">Honeymoon Packages</NavLink>
                                    <NavLink to="/domestic/category/family-packages" className="dropdown-item">Family Packages</NavLink>
                                    <NavLink to="/domestic/category/group-packages" className="dropdown-item">Group Packages</NavLink>
                                    <NavLink to="/domestic/category/weekend-packages" className="dropdown-item">Weekend Packages</NavLink>
                                    <NavLink to="/domestic/category/solo-packages" className="dropdown-item">Solo Packages</NavLink>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <Link
                                    to="/packages/international"
                                    className="nav-link"
                                >
                                    International Packages
                                </Link>

                                <div className="dropdown-menu m-0">
                                    <NavLink to="/international/category/honeymoon-packages" className="dropdown-item">Honeymoon Packages</NavLink>
                                    <NavLink to="/international/category/family-packages" className="dropdown-item">Family Packages</NavLink>
                                    <NavLink to="/international/category/group-packages" className="dropdown-item">Group Packages</NavLink>
                                    <NavLink to="/international/category/weekend-packages" className="dropdown-item">Weekend Packages</NavLink>
                                    <NavLink to="/international/category/solo-packages" className="dropdown-item">Solo Packages</NavLink>
                                </div>
                            </div>

                            <NavLink to="/travel-contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/about-us" className="nav-item nav-link">About</NavLink>
                        </div>
                        <div className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4" onClick={handleEnqueryClick}>
                            Enquiry Now
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar & Hero End */}
            <div>
                <div className="vertical-whatsapp-container">
                    <a
                        href="https://api.whatsapp.com/send?text=https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="WhatsApp" src="/img/whatsapp.webp" className='vertical-whatsapp-btn' />
                    </a>
                </div>
            </div>

            {/* Show the enquiry modal when the state is true */}
            {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}
            <CommonEnquery></CommonEnquery>
        </>
    );
};

export default Header2;
