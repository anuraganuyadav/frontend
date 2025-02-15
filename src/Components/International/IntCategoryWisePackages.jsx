import React from 'react';
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
import honeymoonImage from '/img/country/honeymoon-cover.webp';


const IntCategoryWise = () => {
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

    return (

        <>
            <Header1></Header1>
            <Header2></Header2>
            <div className="container-fluid bgbreadcrumb" style={{ background: `linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(${honeymoonImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', padding: '150px 0 50px 0' }}>
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">Honeymoon Tour Packages</h3>
                    <div className={styles.bookpackages}>
                        <button className={`${styles.hoenybook} display-3 mb-4`}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='py-5'>
                    <h2 className={styles.amazingcountry}>About Honeymoon Packages</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum aliquam corrupti placeat reprehenderit possimus, facilis accusantium dolore perferendis ab voluptatem quae temporibus consectetur! Aperiam esse eveniet minus dignissimos excepturi?</p>
                </div>
                {/* Grid Layout */}
                <div className="row">
                    {countries.map((country) => (
                        <div key={country.name} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.countryCard}>
                                <img
                                    src={country.image}
                                    alt={`${country.name} landscape`}
                                    className={styles.countryImage}
                                />
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

export default IntCategoryWise;
