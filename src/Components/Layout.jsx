import React, { useState } from "react";
import Header1 from './Common/Header1';
import Header2 from './Common/Header2';
import Footer from './Common/Footer';
import HeroBanner from './HeroBanner';
import PopularDestination from './Common/PopularDestination';
import ExploreTour from './Common/ExploreTour';
import AwesomePackage from './Common/AwesomePackage';
import { Gallery } from './Common/Gallery';
import BookingOnline from './Common/BookingOnline';
import TravelGuide from './Common/TravelGuide';
import Testimonial from './Common/Testimonial';
import SubscribeTravel from './Common/SubscribeTravel';
import Blogs from './Common/Blogs';
import InternationalCountry from './Common/InternationalCountry';


const Layout = () => {
    // Enquiry modal state
    const [isEnqueyModalOpen, setIsEnqueryModalOpen] = useState(false);

    // Open modal
    const openEnqueryModal = () => {
        setIsEnqueryModalOpen(true);
    };

    // Close modal
    const closeEnqueryModal = () => {
        setIsEnqueryModalOpen(false);
    };

    return (
        <>
            {/* Topbar start */}
            <Header1 />
            {/* Topbar End */}

            {/* Navbar & Hero Start */}
            <Header2 />
            <HeroBanner />
            {/* Navbar & Hero End */}
           
            {/* Country Section */}
            <InternationalCountry />

            {/* Popular Destinations */}
            <PopularDestination />

            {/* Explore Tour Section */}
            <ExploreTour />

            {/* Awesome Packages */}
            <AwesomePackage />

            {/* Gallery Section */}
            <Gallery />

            {/* Booking Online */}
            <BookingOnline />

            {/* Travel Guide */}
            <TravelGuide />

            {/* Blog Section */}
            <Blogs />

            {/* Testimonial Section */}
            <Testimonial />

            {/* Subscribe Section */}
            <SubscribeTravel />

            {/* Footer Section */}
            <Footer />

            {/* Right Modal Section for Enquiry */}

        </>
    );
};

export default Layout;
