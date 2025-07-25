import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Footer from '../Reuse/Footer'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Helmet } from 'react-helmet'
function Home() {

    const [proQuality, setproQuality] = useState()

    useEffect(() => {
        getProductQuality()
    }, [])

    const getProductQuality = async () => {
        const res = await axios.get("http://localhost:3000/feature")
        // console.log(res.data)
        setproQuality(res.data)
    }


    return (
        <div>

            <Header />

            {/* Carousel Start */}
            <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" />
                        <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                        <li data-bs-target="#carouselId" data-bs-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption-1">
                                <div className="carousel-caption-1-content" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: '1s' }}>Importance life</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.3s" style={{ animationDelay: '1.3s' }}>Always Want Safe Water For Healthy Life</h1>
                                    <p className="mb-5 fs-5 text-white fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.5s" style={{ animationDelay: '1.5s' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div className="carousel-caption-1-content-btn fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.7s" style={{ animationDelay: '1.7s' }}>
                                        <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                        <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption-2">
                                <div className="carousel-caption-2-content" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>Importance life</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1.3s" style={{ animationDelay: '1.3s' }}>Always Want Safe Water For Healthy Life</h1>
                                    <p className="mb-5 fs-5 text-white fadeInRight animated" data-animation="fadeInRight" data-delay="1.5s" style={{ animationDelay: '1.5s' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div className="carousel-caption-2-content-btn fadeInRight animated" data-animation="fadeInRight" data-delay="1.7s" style={{ animationDelay: '1.7s' }}>
                                        <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                        <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn btn-primary fadeInLeft animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{ animationDelay: '1.3s' }}> <i className="fa fa-angle-left fa-3x" /></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn btn-primary fadeInRight animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{ animationDelay: '1.3s' }}><i className="fa fa-angle-right fa-3x" /></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}
            <div>
                {/* feature Start */}
                <div className="container-fluid feature bg-light py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Feature</h4>
                            <h1 className="display-3 text-capitalize mb-3">A Trusted Name In Bottled Water Industry</h1>
                        </div>
                        <div className="row g-4">

                            {
                                proQuality && proQuality.map((value, index) => {
                                    console.log(value)

                                    return (
                                        <div className=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="feature-item p-4">
                                                <div className="feature-icon mb-3"><i className="fas text-white fa-3x" ><img src={value.logo} style={{ height: "100%", width: "100%", borderRadius: "50%" }} alt="" /> </i></div>
                                                <a href="#" className="h4 mb-3">{value.title}</a>
                                                <p className="mb-3">{value.desc}</p>
                                                <a href="#" className="btn text-secondary">Read More <i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* feature End */}
                {/* About Start */}
                <div className="container-fluid about overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="about-img rounded h-100">
                                    <img src="img/about.jpg" className="img-fluid rounded h-100 w-100" style={{ objectFit: 'cover' }} alt />
                                    <div className="about-exp"><span>20 Years Experiance</span></div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="about-item">
                                    <h4 className="text-primary text-uppercase">About Us</h4>
                                    <h1 className="display-3 mb-3">We Deliver The Quality Water.</h1>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis unde a aperiam nulla voluptatibus excepturi ipsam iusto consequuntur
                                    </p>
                                    <div className="bg-light rounded p-4 mb-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex">
                                                    <div className="pe-4">
                                                        <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: 80, height: 80 }}><i className="fas fa-tint text-white fa-2x" /></div>
                                                    </div>
                                                    <div className>
                                                        <a href="#" className="h4 d-inline-block mb-3">Satisfied Customer</a>
                                                        <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded p-4 mb-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex">
                                                    <div className="pe-4">
                                                        <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: 80, height: 80 }}><i className="fas fa-faucet text-white fa-2x" /></div>
                                                    </div>
                                                    <div className>
                                                        <a href="#" className="h4 d-inline-block mb-3">Standard Product</a>
                                                        <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-secondary rounded-pill py-3 px-5">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Fact Counter */}
                <div className="container-fluid counter py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="counter-item">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-thumbs-up fa-3x text-white" />
                                    </div>
                                    <h4 className="text-white my-4">Happy Clients</h4>
                                    <div className="counter-counting">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">456</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="counter-item">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-truck fa-3x text-white" />
                                    </div>
                                    <h4 className="text-white my-4">Transport</h4>
                                    <div className="counter-counting">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">513</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="counter-item">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-users fa-3x text-white" />
                                    </div>
                                    <h4 className="text-white my-4">Employees</h4>
                                    <div className="counter-counting">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">53</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="counter-item">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-heart fa-3x text-white" />
                                    </div>
                                    <h4 className="text-white my-4">Years Experiance</h4>
                                    <div className="counter-counting">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">17</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fact Counter */}
                {/* Service Start */}
                <div className="container-fluid service bg-light overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Service</h4>
                            <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
                        </div>
                        <div className="row gx-0 gy-4 align-items-center">
                            <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="service-item rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="service-content text-end">
                                                    <a href="#" className="h4 d-inline-block mb-3">Residential Waters</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                                <div className="ps-4">
                                                    <div className="service-btn"><i className="fas fa-hand-holding-water text-white fa-2x" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="service-content text-end">
                                                    <a href="#" className="h4 d-inline-block mb-3">Commercial Waters</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                                <div className="ps-4">
                                                    <div className="service-btn"><i className="fas fa-dumpster-fire text-white fa-2x" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item rounded p-4 mb-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="service-content text-end">
                                                    <a href="#" className="h4 d-inline-block mb-3">Filtration Plants</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                                <div className="ps-4">
                                                    <div className="service-btn"><i className="fas fa-filter text-white fa-2x" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="bg-transparent">
                                    <img src="img/water.png" className="img-fluid w-100" alt />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="service-item rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="pe-4">
                                                    <div className="service-btn"><i className="fas fa-assistive-listening-systems text-white fa-2x" /></div>
                                                </div>
                                                <div className="service-content">
                                                    <a href="#" className="h4 d-inline-block mb-3">Water Softening</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item rounded p-4 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="pe-4">
                                                    <div className="service-btn"><i className="fas fa-recycle text-white fa-2x" /></div>
                                                </div>
                                                <div className="service-content">
                                                    <a href="#" className="h4 d-inline-block mb-3">Market Research</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item rounded p-4 mb-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="pe-4">
                                                    <div className="service-btn"><i className="fas fa-project-diagram text-white fa-2x" /></div>
                                                </div>
                                                <div className="service-content">
                                                    <a href="#" className="h4 d-inline-block mb-3">Project Planning</a>
                                                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Products Start */}
                <div className="container-fluid product py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Products</h4>
                            <h1 className="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="product-item">
                                    <img src="img/product-3.png" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="product-content bg-light text-center rounded-bottom p-4">
                                        <p>2L 1 Bottle</p>
                                        <a href="#" className="h4 d-inline-block mb-3">Mineral Water Bottle</a>
                                        <p className="fs-4 text-primary mb-3">$35:00</p>
                                        <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="product-item">
                                    <img src="img/product-2.png" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="product-content bg-light text-center rounded-bottom p-4">
                                        <p>4L 2 Bottles</p>
                                        <a href="#" className="h4 d-inline-block mb-3">RO Water Bottle</a>
                                        <p className="fs-4 text-primary mb-3">$70:00</p>
                                        <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="product-item">
                                    <img src="img/product-1.png" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="product-content bg-light text-center rounded-bottom p-4">
                                        <p>6L 3 Bottles</p>
                                        <a href="#" className="h4 d-inline-block mb-3">UV Water Bottle</a>
                                        <p className="fs-4 text-primary mb-3">$100:00</p>
                                        <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products End */}
                {/* Blog Start */}
                <div className="container-fluid blog pb-5">
                    <div className="container pb-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Blog</h4>
                            <h1 className="display-3 text-capitalize mb-3">Latest Blog &amp; News</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-1.jpg" className="img-fluid rounded-top w-100" alt />
                                        <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
                                    </div>
                                    <div className="blog-content rounded-bottom p-4">
                                        <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                        <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-2.jpg" className="img-fluid rounded-top w-100" alt />
                                        <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
                                    </div>
                                    <div className="blog-content rounded-bottom p-4">
                                        <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                        <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-3.jpg" className="img-fluid rounded-top w-100" alt />
                                        <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
                                    </div>
                                    <div className="blog-content rounded-bottom p-4">
                                        <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                        <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
                {/* Team Start */}
                <div className="container-fluid team pb-5">
                    <div className="container pb-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Team</h4>
                            <h1 className="display-3 text-capitalize mb-3">What is Really seo &amp; How Can I Use It?</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item p-4">
                                    <div className="team-inner rounded">
                                        <div className="team-img">
                                            <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                            <div className="team-share">
                                                <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                                            </div>
                                            <div className="team-icon rounded-pill py-2 px-2">
                                                <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="bg-light rounded-bottom text-center py-4">
                                            <h4 className="mb-3">Hard Branots</h4>
                                            <p className="mb-0">CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item p-4">
                                    <div className="team-inner rounded">
                                        <div className="team-img">
                                            <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                            <div className="team-share">
                                                <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                                            </div>
                                            <div className="team-icon rounded-pill py-2 px-2">
                                                <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="bg-light rounded-bottom text-center py-4">
                                            <h4 className="mb-3">Hard Branots</h4>
                                            <p className="mb-0">CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-item p-4">
                                    <div className="team-inner rounded">
                                        <div className="team-img">
                                            <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                            <div className="team-share">
                                                <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                                            </div>
                                            <div className="team-icon rounded-pill py-2 px-2">
                                                <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="bg-light rounded-bottom text-center py-4">
                                            <h4 className="mb-3">Hard Branots</h4>
                                            <p className="mb-0">CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-item p-4">
                                    <div className="team-inner rounded">
                                        <div className="team-img">
                                            <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                            <div className="team-share">
                                                <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                                            </div>
                                            <div className="team-icon rounded-pill py-2 px-2">
                                                <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                                                <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="bg-light rounded-bottom text-center py-4">
                                            <h4 className="mb-3">Hard Branots</h4>
                                            <p className="mb-0">CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}

                {/* Testimonial Start */}

                <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-uppercase text-primary">Testimonials</h4>
                        <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        className="wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        { 
                        feedback && feedback.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item text-center p-4">
                                    <p >
                                        {value.desc}
                                    </p>
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src={value.image}
                                            className="img-fluid border border-4 border-primary"
                                            style={{ width: 100, height: 100, borderRadius: '50%' }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="d-block">
                                        <h4 className="text-dark">{value.name}</h4>
                                        <p className="m-0 pb-3">{value.Designation}</p>
                                        <div className="d-flex justify-content-center text-secondary">
                                            {[...Array(5)].map((i) => (
                                                <i className="fas fa-star" key={i} />
                                            ))}
                                        </div>  
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


                {/* Testimonial End */}
            </div>

            <Footer />
        </div>
    )
}

export default Home
