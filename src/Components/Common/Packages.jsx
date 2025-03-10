// import React from 'react';
// import styles from "../css/packages.module.css";
// import Header1 from './Header1';
// import Header2 from './Header2';
// import Footer from './Footer';
// import packagesData from '../js/packagesData';
// import { Link } from 'react-router-dom';

// const Packages = ({ type }) => {
//     // Filter packages based on type (domestic or international)
//     const filteredPackages = packagesData.filter(pkg => pkg.type === type);

//     return (
//         <>
//             <Header1 />
//             <Header2 />
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
//                     <h3 className="text-white display-3 mb-4">{type === 'domestic' ? 'Domestic Packages' : 'International Packages'}</h3>
//                     <ol className="breadcrumb justify-content-center mb-0">
//                         <li className="breadcrumb-item"><a href="index.html">Home</a></li>
//                         <li className="breadcrumb-item"><a href="#">Pages</a></li>
//                         <li className="breadcrumb-item active text-white">Packages</li>
//                     </ol>
//                 </div>
//             </div>
//             {/* Header end */}

//             <div className="container-fluid packages py-0">
//                 <div className="container py-5">
//                     <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
//                         <h5 className="section-title px-3">Packages</h5>
//                         <h1 className="mb-0">{type === 'domestic' ? 'Domestic Packages' : 'International Packages'}</h1>
//                     </div>

//                     {/* Packages Grid */}
//                     <div className="row">
//                         {filteredPackages.length > 0 ? (
//                             filteredPackages.map((pkg) => (
//                                 <div className="col-lg-4 col-md-6 mb-4" key={pkg.id}>
//                                     <div className="packages-item">
//                                         <div className="packages-img" style={{ position: 'relative', height: '324px', overflow: 'hidden' }}>
//                                             <img src={pkg.img} className="img-fluid w-100 rounded-top" alt={pkg.title} />
//                                             <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
//                                                 <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{pkg.location}</small>
//                                                 <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2"></i>{pkg.duration}</small>
//                                                 <small className="flex-fill text-center py-2"><i className="fa fa-user me-2"></i>{pkg.persons}</small>
//                                             </div>
//                                             <div className="packages-price py-2 px-4">{pkg.price}</div>
//                                         </div>
//                                         <div className="packages-content bg-light" >
//                                             <div className="p-4 pb-0">
//                                                 <h5 className={`${styles.packagetitle} mb-0`}>{pkg.title}</h5>

//                                                 <div className="mb-3">
//                                                     <small className="fa fa-star text-primary"></small>
//                                                     <small className="fa fa-star text-primary"></small>
//                                                     <small className="fa fa-star text-primary"></small>
//                                                     <small className="fa fa-star text-primary"></small>
//                                                     <small className="fa fa-star text-primary"></small>
//                                                 </div>
//                                             </div>
//                                             <div className="row bg-primary rounded-bottom mx-0">
//                                                 <div className="col-6 text-start px-0">
//                                                     <Link to ="/details-packages" className="btn-hover btn text-white py-2 px-4">Details</Link>
//                                                 </div>
//                                                 <div className="col-6 text-end px-0">
//                                                     <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div>No packages available for this type.</div>
//                         )}
//                     </div>
//                     {/* End of Packages Grid */}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Packages;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from "../css/packages.module.css";
import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import packagesData from '../js/packagesData';

const Packages = () => {
    const { type, city } = useParams(); // Get type and city from URL params

    // Filter packages based on type (domestic or international), if type exists
    const filteredPackages = type
        ? packagesData.filter(pkg => pkg.type === type)
        : packagesData; // If no type, don't filter by type

    // Filter packages based on city name, if city exists
    const filteredPackagesCity = city
        ? filteredPackages.filter(pkg => pkg.city_name.toLowerCase() === city.toLowerCase())
        : filteredPackages; // If no city, just use the filtered by type or all packages


    return (
        <>
            <Header1 />
            <Header2 />
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">
                        {type === 'domestic'
                            ? 'Domestic Packages'
                            : type === 'international'
                                ? 'International Packages'
                                : 'All Packages'}
                        {city && ` - ${city}`} {/* Display the city name if available */}
                    </h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Packages</li>
                    </ol>
                </div>
            </div>
            {/* Header end */}

            <div className="container-fluid packages py-0">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 className="section-title px-3">Packages</h5>
                        <h1 className="mb-0">
                            {type === 'domestic'
                                ? 'Domestic Packages'
                                : type === 'international'
                                    ? 'International Packages'
                                    : 'All Packages'}
                            {city && ` - ${city}`} {/* Display the city name if available */}
                        </h1>
                    </div>

                    {/* Packages Grid */}
                    <div className="row">
                        {filteredPackagesCity.length > 0 ? (
                            filteredPackagesCity.map((pkg) => (
                                <div className="col-lg-4 col-md-6 mb-4" key={pkg.id}>
                                    <div className="packages-item">
                                        <div className="packages-img" style={{ position: 'relative', height: '324px', overflow: 'hidden' }}>
                                            <img src={pkg.img} className="img-fluid w-100 rounded-top" alt={pkg.title} />
                                            <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{pkg.location}</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2"></i>{pkg.duration}</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-user me-2"></i>{pkg.persons}</small>
                                            </div>
                                            <div className="packages-price py-2 px-4">{pkg.price}</div>
                                        </div>
                                        <div className="packages-content bg-light">
                                            <div className="p-4 pb-0">
                                                <h5 className={`${styles.packagetitle} mb-0`}>{pkg.title}</h5>
                                                <div className="mb-3">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </div>
                                            <div className="row bg-primary rounded-bottom mx-0">
                                                <div className="col-6 text-start px-0">
                                                    <Link to="/details-packages" className="btn-hover btn text-white py-2 px-4">Details</Link>
                                                </div>
                                                <div className="col-6 text-end px-0">
                                                    <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No packages available for this type or city.</div>
                        )}
                    </div>
                    {/* End of Packages Grid */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Packages;
