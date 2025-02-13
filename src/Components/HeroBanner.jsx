import React from 'react'

const HeroBanner = () => {
    return (
        <>
            {/* Carousel start */}
                 {/* Carousel start */}
                 <div class="carousel-header">
                    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <img src="img/carousel-2.jpg" class="img-fluid" alt="Image" />
                                <div class="carousel-caption">
                                    <div class="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 class="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                        <h1 class="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                                        <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel-1.jpg" class="img-fluid" alt="Image" />
                                <div class="carousel-caption">
                                    <div class="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 class="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                        <h1 class="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                        <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel-3.jpg" class="img-fluid" alt="Image" />
                                <div class="carousel-caption">
                                    <div class="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 class="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                        <h1 class="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                        <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span class="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
            

            <div class="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
                <div class="container">
                    <div class="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
                        <input class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                        <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: '46px', transform: 'translateY(-50%)' }}>Search</button>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
        </>
    )
}

export default HeroBanner