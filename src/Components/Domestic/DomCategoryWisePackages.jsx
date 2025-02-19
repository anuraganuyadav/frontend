import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To capture dynamic URL parameter
import styles from "../css/intcategorywise.module.css";  // Ensure the path is correct
import Header1 from '../Common/Header1';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
// Import images for each country
import andmannImage from '/img/country/andaman_card.webp';
import goaImage from '/img/country/goa_card.png';
import himachalImage from '/img/country/himachal_card.webp';
import kashmirImage from '/img/country/kashmir_card.webp';
import keralaImage from '/img/country/kerala_card.webp';
import ladakhImage from '/img/country/ladakh_card.webp';
import meghalyaImage from '/img/country/meghalya_card.webp';
import rajasthanImage from '/img/country/rajasthan_card.webp';
import sikkimImage from '/img/country/sikkim_card.webp';
import uttarakhanImage from '/img/country/uttarakhand_card.webp';

// Import images for each category
import honeymoonImage from '/img/country/honeymoon-cover.webp';
import familyImage from '/img/country/honeymoon-cover.webp';
import groupImage from '/img/country/honeymoon-cover.webp';
import WeekendImage from '/img/country/honeymoon-cover.webp';
import soloImage from '/img/country/honeymoon-cover.webp';

const DomCategoryWisePackages = () => {

    const countries = [
        { name: 'Andman', image: andmannImage },
        { name: 'Goa', image: goaImage },
        { name: 'Himachal', image: himachalImage },
        { name: 'Kashmir', image: kashmirImage },
        { name: 'Kerala', image: keralaImage },
        { name: 'Ladakh', image: ladakhImage },
        { name: 'Meghalya', image: meghalyaImage },
        { name: 'Rajasthan', image: rajasthanImage },
        { name: 'Sikkim', image: sikkimImage },
        { name: 'Uttarakhand', image: uttarakhanImage },

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
            <div className="container-fluid bgbreadcrumb" style={{ background: `linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(${content.bannerImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', padding: '150px 0 50px 0' }}>
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">{content.title}</h3>
                    <div className={styles.bookpackages}>
                        <button className={`${styles.hoenybook} display-3 mb-4`}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='py-5'>
                    <h2 className={styles.amazingcountry}>About {content.title}</h2>
                    <p>{content.description}</p>
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

export default DomCategoryWisePackages;
