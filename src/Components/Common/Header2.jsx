import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'

const Header2 = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>International</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link" >Home</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Domestic Packages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/domestic/category/honeymoon" className="dropdown-item">Honeymoon Packages</NavLink>
                                    <NavLink to="/domestic/category/family" className="dropdown-item">Family Packages</NavLink>
                                    <NavLink to="/domestic/category/group" className="dropdown-item">Group Packages</NavLink>
                                    <NavLink to="/domestic/category/weekend" className="dropdown-item">Weekend Packages</NavLink>
                                    <NavLink to="/domestic/category/solo" className="dropdown-item">Solo Packages</NavLink>
                                </div>
                            </div>


                            <div className="nav-item dropdown">
                                {/* Link for "International Packages", toggle the dropdown */}
                                <Link
                                    to="/international-packages"
                                    className="nav-link"
                                    onClick={toggleDropdown}  // Handle click to toggle dropdown visibility
                                >
                                    International Packages
                                </Link>

                                {/* Dropdown Menu */}
                                <div className={`dropdown-menu m-0 ${isOpen ? 'show' : ''}`}>
                                    <NavLink to="/international/category" className="dropdown-item">Honeymoon Packages</NavLink>
                                    <NavLink to="/family-packages" className="dropdown-item">Family Packages</NavLink>
                                    <NavLink to="/group-packages" className="dropdown-item">Group Packages</NavLink>
                                    <NavLink to="/weekend-packages" className="dropdown-item">Weekend Packages</NavLink>
                                    <NavLink to="/solo-packages" className="dropdown-item">Solo Packages</NavLink>
                                </div>
                            </div>

                            <NavLink to="/travel-contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/about-us" className="nav-item nav-link" >About</NavLink>

                        </div>
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>
            </div>
            {/* Navbar & Hero End */}
        </>
    )
}

export default Header2
