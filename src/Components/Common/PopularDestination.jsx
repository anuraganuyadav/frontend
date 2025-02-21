import React from 'react'

const PopularDestination = () => {

    // Function to handle city click and pass both type and city name to the Packages component
    const handleCityClick = (type, city) => {
        window.location.href = `/packages/${type}/${city}`;
    };

    return (
        <>
            <div className="container-fluid destination">
                <div class="container py-5">
                    <div class="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 class="section-title px-3">Destination</h5>
                        <h1 class="mb-0">Popular Internationl Destination</h1>
                    </div>
                    <div className="tab-class text-center">

                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                <div class="row g-4">
                                    <div class="col-xl-8">
                                        <div class="row g-4">
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-1.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Dubai</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Dubai')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-1.jpg" data-lightbox="destination-1"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-2.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Bali</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Bali')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-2.jpg" data-lightbox="destination-2"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-7.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Maldives</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Maldives')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-7.jpg" data-lightbox="destination-7"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-8.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Singapore</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Singapore')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-8.jpg" data-lightbox="destination-8"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div class="destination-img h-100">
                                            <img class="img-fluid rounded w-100 h-100" src="img/destination-9.jpg" style={{ objectFit: 'cover', minHeight: '300px' }} alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Thailand</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Thailand')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-9.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Vietnam</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Vietnam')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Srilanka</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Srilanka')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Mauritius</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('international', 'Mauritius')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="container py-5">
                    <div class="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 class="section-title px-3">Destination</h5>
                        <h1 class="mb-0">Popular Domestic Destination</h1>
                    </div>
                    <div className="tab-class text-center">

                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                <div class="row g-4">
                                    <div class="col-xl-8">
                                        <div class="row g-4">
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-1.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Ooty</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Ooty')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-1.jpg" data-lightbox="destination-1"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-2.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Ladakh</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Ladakh')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-2.jpg" data-lightbox="destination-2"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-7.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Himachal</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Himachal')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-7.jpg" data-lightbox="destination-7"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="destination-img">
                                                    <img class="img-fluid rounded w-100" src="img/destination-8.jpg" alt="" />
                                                    <div class="destination-overlay p-4">

                                                        <h4 class="text-white mb-2 mt-3">Kashmir</h4>
                                                        <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Kashmir')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                                    </div>
                                                    <div class="search-icon">
                                                        <a href="img/destination-8.jpg" data-lightbox="destination-8"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div class="destination-img h-100">
                                            <img class="img-fluid rounded w-100 h-100" src="img/destination-9.jpg" style={{ objectFit: 'cover', minHeight: '300px' }} alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Uttarakhand</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Uttarakhand')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-9.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Goa</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Goa')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">North East</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'North East')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="destination-img">
                                            <img class="img-fluid rounded w-100" src="img/destination-4.jpg" alt="" />
                                            <div class="destination-overlay p-4">

                                                <h4 class="text-white mb-2 mt-3">Andman</h4>
                                                <a href="#" class="btn-hover text-white" onClick={() => handleCityClick('domestic', 'Andman')}>View All Packages <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                            <div class="search-icon">
                                                <a href="img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PopularDestination