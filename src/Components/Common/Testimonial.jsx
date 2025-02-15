import React from 'react';
import Slider from 'react-slick';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// If you're using react-icons for the arrows
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
       
        speed: 500,
        slidesToShow: 3,  // Show one testimonial at a time
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

    return (
        <div className="container-fluid testimonial">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                    <h5 className="section-title px-3">Testimonial</h5>
                    <h1 className="mb-0">Our Clients Say!!!</h1>
                </div>

                {/* React Slick Carousel */}
                <Slider {...settings}>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
