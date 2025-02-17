import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from "../css/intcategorywise.module.css";  // Ensure the path is correct
import Header1 from '../Common/Header1';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
// Import images for each country
import baliImage from '/img/country/bali_card.webp';
import dubaiImage from '/img/country/dubai-card.webp';
import maldivesImage from '/img/country/maldives_card.webp';
import mauritiusImage from '/img/country/mauritiu_card.webp';
import nepalImage from '/img/country/nepal_card.webp';
import parisImage from '/img/country/europe_card.webp';
import singaporeImage from '/img/country/singapore_card.webp';
import srilankaImage from '/img/country/sri-lanka_card.webp';
import thailandImage from '/img/country/thailand-card.webp';
import turkeyImage from '/img/country/turkey_card.webp';
import vietnamImage from '/img/country/vietnam_card.webp';
// import honeymoonImage from '/img/country/honeymoon-cover.webp';

// Import images for each category
import honeymoonImage from '/img/country/honeymoon-cover.webp';
import familyImage from '/img/country/honeymoon-cover.webp';
import groupImage from '/img/country/honeymoon-cover.webp';
import WeekendImage from '/img/country/honeymoon-cover.webp';
import soloImage from '/img/country/honeymoon-cover.webp';

const IntCategoryWisePackages = () => {
    const countries = [
        { name: 'Bali', image: baliImage },
        { name: 'Dubai', image: dubaiImage },
        { name: 'Maldives', image: maldivesImage },
        { name: 'Mauritius', image: mauritiusImage },
        { name: 'Nepal', image: nepalImage },
        { name: 'Paris', image: parisImage },
        { name: 'Singapore', image: singaporeImage },
        { name: 'Srilanka', image: srilankaImage },
        { name: 'Thailand', image: thailandImage },
        { name: 'Turkey', image: turkeyImage },
        { name: 'Vietnam', image: vietnamImage }
    ];



    const { category } = useParams(); // Capture category from the URL
    const [content, setContent] = useState({
        title: 'Honeymoon Tour Packages',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum aliquam corrupti placeat reprehenderit possimus...',
        bannerImage: honeymoonImage,
    });

    useEffect(() => {
        // Switch content based on category
        if (category === 'honeymoon-packages') {
            setContent({
                title: 'Honeymoon Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum aliquam corrupti placeat reprehenderit...',
                bannerImage: honeymoonImage,
            });
        } else if (category === 'family-packages') {
            setContent({
                title: 'Family Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus laboriosam quam reiciendis...',
                bannerImage: familyImage,
            });
        } else if (category === 'group-packages') {
            setContent({
                title: 'Group Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui labore distinctio nobis fugiat...',
                bannerImage: groupImage,
            });
        } else if (category === 'weekend-packages') {
            setContent({
                title: 'Weekend Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui labore distinctio nobis fugiat...',
                bannerImage: WeekendImage,
            });
        }

        else if (category === 'solo-packages') {
            setContent({
                title: 'Solo Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui labore distinctio nobis fugiat...',
                bannerImage: soloImage,
            });
        }
        // Add other conditions for 'weekend', 'solo' etc.
    }, [category]);



    return (

        <>
            <Header1></Header1>
            <Header2></Header2>
            <div className="container-fluid bgbreadcrumb" style={{ background: `linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(${honeymoonImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', padding: '150px 0 50px 0' }}>
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">{content.title}</h3>
                    <div className={styles.bookpackages}>
                        <button className={`${styles.hoenybook} display-3 mb-4`}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='py-5'>
                    <h2 className={styles.amazingcountry}>About Honeymoon Packages</h2>
                    <p>{content.description}</p>
                </div>
                {/* Grid Layout */}
                <div className="row">
                    {countries.map((country) => (
                        <div key={country.name} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.countryCard}>
                                <Link to="/international-packages">
                                    <img
                                        src={country.image}
                                        alt={`${country.name} landscape`}
                                        className={styles.countryImage}
                                    />
                                </Link>
                                {/* <h3 className={styles.countryName}>{country.name}</h3> */}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default IntCategoryWisePackages;
