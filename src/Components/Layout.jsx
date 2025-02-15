import React from 'react';
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
    return (
        <>
            {/* Spinner start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}

            {/* Topbar start */}
            <Header1></Header1>
            {/* Topbar End */}

            {/* Navbar & Hero Start */}
            <Header2></Header2>
            {/* Navbar & Hero End */}
            <HeroBanner></HeroBanner>

            <InternationalCountry></InternationalCountry>
            {/* Destination Start  */}
            <PopularDestination></PopularDestination>

            {/* Destination Start  */}


            {/* Explore Tour Start */}
            <ExploreTour></ExploreTour>

            {/* Explore Tour end */}


            {/*Packages Start*/}
            <AwesomePackage></AwesomePackage>
            {/*Packages end*/}


            {/* Gallery Start */}
            <Gallery></Gallery>
            {/* Gallery end */}

            {/*  Tour Booking Start */}
            <BookingOnline></BookingOnline>
            {/*  Tour Booking end */}


            {/* Travel Guide Start */}
            <TravelGuide></TravelGuide>
            {/* Travel Guide end */}


            {/* Blog Start */}
            <Blogs></Blogs>
            {/* Blog Start */}


            {/*  Testimonial Start*/}
            <Testimonial></Testimonial>
            {/*  Testimonial Start*/}


            {/*  Subscribe Start*/}
            <SubscribeTravel></SubscribeTravel>

            {/*  Subscribe end*/}

            {/* Footer Start */}
            <Footer></Footer>
            {/* Footer end */}
        </>
    );
};

export default Layout;
