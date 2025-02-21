import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExploreTour = () => {

    const nationalTours = [
        { id: 1, title: 'Weekend Tour', img: 'img/explore-tour-1.jpg', offer: '', category: 'National' },
        { id: 2, title: 'Holiday Tour', img: 'img/explore-tour-2.jpg', offer: '', category: 'National' },
        { id: 3, title: 'Road Trip', img: 'img/explore-tour-3.jpg', offer: '15% Off', category: 'National' },
        { id: 4, title: 'Historical Trip', img: 'img/explore-tour-4.jpg', offer: '', category: 'National' },
        { id: 5, title: 'Family Tour', img: 'img/explore-tour-5.jpg', offer: '50% Off', category: 'National' },
        { id: 6, title: 'Beach Tour', img: 'img/explore-tour-6.jpg', offer: '', category: 'National' },
    ];

    const internationalTours = [
        { id: 1, title: 'Australia', img: 'img/explore-tour-1.jpg', offer: '30% Off', country: 'Australia', cities: 8, tourPlaces: 143 },
        { id: 2, title: 'Germany', img: 'img/explore-tour-2.jpg', offer: '', country: 'Germany', cities: 12, tourPlaces: 21 },
        { id: 3, title: 'Spain', img: 'img/explore-tour-3.jpg', offer: '45% Off', country: 'Spain', cities: 9, tourPlaces: 133 },
        { id: 4, title: 'Japan', img: 'img/explore-tour-4.jpg', offer: '', country: 'Japan', cities: 8, tourPlaces: 137 },
        { id: 5, title: 'London', img: 'img/explore-tour-5.jpg', offer: '70% Off', country: 'London', cities: 17, tourPlaces: 26 },
    ];

    // State to handle active tab
    const [activeTab, setActiveTab] = useState('NationalTab-1');

    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
            <button className="slick-prev">
                <FaChevronLeft />
            </button>
        ),
        nextArrow: (
            <button className="slick-next">
                <FaChevronRight />
            </button>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCityClick = (type, city) => {
        window.location.href = `/packages/${type}/${subcategory_name}`;
    };


    return (
        <>
            <div className="container-fluid ExploreTour">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 className="section-title px-3">Explore Tour</h5>
                        <h1 className="mb-4">The World</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo?
                        </p>
                    </div>
                    <div className="tab-className text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                            <li className="nav-item">
                                <a
                                    className={`d-flex mx-3 py-2 border border-primary bg-light rounded-pill ${activeTab === 'NationalTab-1' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('NationalTab-1')}
                                >
                                    <span className="text-dark" style={{ width: '250px', cursor: 'pointer' }}>
                                        National Tour Category
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`d-flex py-2 mx-3 border border-primary bg-light rounded-pill ${activeTab === 'InternationalTab-2' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('InternationalTab-2')}
                                >
                                    <span className="text-dark" style={{ width: '250px', cursor: 'pointer' }}>
                                        International Tour Category
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* National Tour Tab Content */}
                            {activeTab === 'NationalTab-1' && (
                                <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {nationalTours.map((tour) => (
                                            <div key={tour.id} className="col-md-6 col-lg-4">
                                                <div className="national-item">
                                                    <img src={tour.img} className="img-fluid w-100 rounded" alt={tour.title} />
                                                    <div className="national-content">
                                                        <div className="national-info">
                                                            <h5 className="text-white text-uppercase mb-2">{tour.title}</h5>
                                                            <a href="#" className="btn-hover text-white">
                                                                View All Place <i className="fa fa-arrow-right ms-2"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {tour.offer && <div className="tour-offer">{tour.offer}</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* International Tour Tab Content with Slider */}
                            {activeTab === 'InternationalTab-2' && (
                                <div id="InternationalTab-2" className="tab-pane fade show p-0 active">
                                    <Slider {...settings}>
                                        {internationalTours.map((tour) => (
                                            <div key={tour.id} className="international-item">
                                                <img src={tour.img} className="img-fluid w-100 rounded" alt={tour.title} />
                                                <div className="international-content">
                                                    <div className="international-info">
                                                        <h5 className="text-white text-uppercase mb-2">{tour.title}</h5>
                                                        <a href="#" className="btn-hover text-white me-4">
                                                            <i className="fas fa-map-marker-alt me-1"></i> {tour.cities} Cities
                                                        </a>
                                                        <a href="#" className="btn-hover text-white">
                                                            <i className="fa fa-eye ms-2"></i> <span>{tour.tourPlaces}+ Tour Places</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {tour.offer && <div className="tour-offer bg-success">{tour.offer}</div>}
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExploreTour;

