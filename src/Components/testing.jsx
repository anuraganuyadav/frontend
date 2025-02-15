import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To capture dynamic URL parameter
import styles from "../css/intcategorywise.module.css";
import Header1 from '../Common/Header1';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';

// Import images for each category
import honeymoonImage from '/img/country/honeymoon-cover.webp';
import familyImage from '/img/country/family-cover.webp';
import groupImage from '/img/country/group-cover.webp';
// Add other category images...

const DomCategoryWisePackages = () => {
    const { category } = useParams(); // Capture category from the URL
    const [content, setContent] = useState({
        title: 'Honeymoon Tour Packages',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum aliquam corrupti placeat reprehenderit possimus...',
        bannerImage: honeymoonImage,
    });

    useEffect(() => {
        // Switch content based on category
        if (category === 'honeymoon') {
            setContent({
                title: 'Honeymoon Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum aliquam corrupti placeat reprehenderit...',
                bannerImage: honeymoonImage,
            });
        } else if (category === 'family') {
            setContent({
                title: 'Family Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus laboriosam quam reiciendis...',
                bannerImage: familyImage,
            });
        } else if (category === 'group') {
            setContent({
                title: 'Group Tour Packages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui labore distinctio nobis fugiat...',
                bannerImage: groupImage,
            });
        }
        // Add other conditions for 'weekend', 'solo' etc.
    }, [category]);

    return (
        <>
            <Header1 />
            <Header2 />
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
                {/* Add grid layout here */}
            </div>
            <Footer />
        </>
    );
};

export default DomCategoryWisePackages;
