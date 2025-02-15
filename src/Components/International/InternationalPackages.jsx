import React from 'react'
import Header1 from '../Common/Header1'
import Header2 from '../Common/Header2'
import Footer from '../Common/Footer'
import packagesData from '../js/packagesData';


const InternationalPackages = () => {
    return (
        <>
            <Header1 />
            <Header2 />
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">Travel Packages</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Packages</li>
                    </ol>
                </div>
            </div>
            {/* Header end */}

            <div className="container-fluid packages py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 className="section-title px-3">Packages</h5>
                        <h1 className="mb-0">Awesome Packages</h1>
                    </div>

                    {/* Packages Grid */}
                    <div className="row">
                        {packagesData.map((pkg) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={pkg.id}>
                                <div className="packages-item">
                                    <div className="packages-img">
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
                                            <h5 className="mb-0">{pkg.title}</h5>
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
                                                <a href="#" className="btn-hover btn text-white py-2 px-4">Details</a>
                                            </div>
                                            <div className="col-6 text-end px-0">
                                                <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End of Packages Grid */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InternationalPackages;
