import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import packagesData from '../../packagesData'; // Import the data
import styles from "../css/intcategorywise.module.css"; // Ensure path is correct

const CityPackages = () => {
    const { cityName } = useParams(); // Capture the city name from the URL
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        // Filter packagesData based on the cityName and type (domestic)
        const filteredPackages = packagesData.filter(
            (pkg) => pkg.type === 'domestic' && pkg.city_name.toLowerCase() === cityName.toLowerCase()
        );
        setPackages(filteredPackages);
    }, [cityName]);

    return (
        <div className="container">
            <h2>Packages for {cityName.charAt(0).toUpperCase() + cityName.slice(1)}</h2>
            <div className="row">
                {packages.length > 0 ? (
                    packages.map((pkg) => (
                        <div key={pkg.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.packageCard}>
                                <img src={pkg.img} alt={pkg.city_name} className={styles.packageImage} />
                                <h3>{pkg.title}</h3>
                                <p>{pkg.description}</p>
                                <p><strong>Price: {pkg.price}</strong></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No packages available for this city.</p>
                )}
            </div>
        </div>
    );
};

export default CityPackages;
