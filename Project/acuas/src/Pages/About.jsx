import React, { use, useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Footer from '../Reuse/Footer'
import Navs from '../Reuse/Navs'
import axios from 'axios'

function About() {

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
            <Navs title="About Us" name="About" />

            <div>
                {/* About Start */}
                <div className="container-fluid about py-5">
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
                                                <div className="feature-icon mb-3"><i className="fas text-white fa-3x" ><img src={value.logo} style={{height:"100%",width:"100%",borderRadius:"50%"}} alt="" /> </i></div>
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
            </div>

            <Footer />
        </div>
    )
}

export default About
