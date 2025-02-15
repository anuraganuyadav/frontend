import React from 'react';
import Slider from 'react-slick';
import styles from "../css/internationalcountry.module.css";  // Ensure the path is correct

// Import images for each country
import baliImage from '/img/country/bali.png';
import dubaiImage from '/img/country/dubai.png';
import maldivesImage from '/img/country/maldives.png';
import mauritiusImage from '/img/country/mauritius.png';
import nepalImage from '/img/country/nepal.png';
import parisImage from '/img/country/paris.png';
import singaporeImage from '/img/country/singapore.png';
import srilankaImage from '/img/country/srilanka.png';
import thailandImage from '/img/country/thailand.png';
import turkeyImage from '/img/country/turkey.png';
import vietnamImage from '/img/country/vietnam.png';

const InternationalCountry = () => {
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

    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='container'>
            <h2 className={styles.amazingcountry}>Explore Amazing Countries</h2>

            <Slider {...settings}>
                {countries.map((country) => (
                    <div key={country.name} className={styles.slide}>
                        <img
                            src={country.image}
                            alt={`${country.name} landscape`}
                            className={styles.countryImage}
                        />
                        <h3 className={styles.countryName}>{country.name}</h3>
                    </div>
                ))}

            </Slider>

        </div>
    );
};

export default InternationalCountry;
