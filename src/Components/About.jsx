import React from 'react'
import Header1 from './Common/Header1'
import Header2 from './Common/Header2'
import Footer from './Common/Footer'

const About = () => {
    return (
        <>
            <Header1></Header1>
            <Header2></Header2>
            {/*  About Header Start */}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 class="text-white display-3 mb-4">About Us</h3>
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item active text-white">About</li>
                    </ol>
                </div>
            </div>
            {/*About  Header end */}

            {/* About Start */}
            <div class="container-fluid about py-5">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-5">
                            <div class="h-100"
                                style={{
                                    border: '50px solid',
                                    borderColor: 'transparent #13357B transparent #13357B'
                                }}>
                                <img src="../img/about-img.jpg" class="img-fluid w-100 h-100" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-7"
                            style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(img/about-img-1.png)' }}>
                            <h5 class="section-about-title pe-3">About Us</h5>
                            <h1 class="mb-4">Welcome to <span class="text-primary">Travela</span></h1>
                            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum,
                                doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam
                                assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem
                                suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero
                                numquam perferendis provident placeat molestiae quia?</p>
                            <div class="row gy-2 gx-4 mb-4">
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours
                                    </p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <a class="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About end */}

            <Footer></Footer>
        </>
    )
}

export default About