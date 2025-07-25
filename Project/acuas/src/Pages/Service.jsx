import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
import axios from 'axios'

function Service() {

    const [service, setService] = useState()

    useEffect(() => {
        getService()
        getService1()
    }, [])

    const getService = async () => {
        const res = await axios.get("http://localhost:3000/services")
        // console.log(res.data)
        setService(res.data)

    }

    const [service1, setService1] = useState()

    const getService1 = async () => {
        const res = await axios.get("http://localhost:3000/services1")
        console.log(res.data)
        setService1(res.data)
    }

    return (
        <div>
            <Header />
            <Navs title="Our Services" name="Service" />

            <div>
                {/* Service Start */}
                <div className="container-fluid service bg-light overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-uppercase text-primary">Our Service</h4>
                            <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
                        </div>
                        <div className="row gx-0 gy-4 align-items-center">
                            <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">

                                {
                                    service && service.map((value, index) => {
                                        // console.log(value)

                                        return (

                                            <div className="service-item rounded p-4 mb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex">
                                                            <div className="service-content text-end">
                                                                <a href="#" className="h4 d-inline-block mb-3">{value.title}</a>
                                                                <p className="mb-0" style={{ textAlign: "justify" }}>{value.desc.slice(0, 120)}</p>
                                                            </div>
                                                            <div className="ps-4">
                                                                <div className="service-btn"><i className="fas"> <img src={value.logo} style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="" /> </i> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="bg-transparent">
                                    <img src="img/water.png" className="img-fluid w-100" alt />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                                {
                                    service1 && service1.map((servic, index) => {
                                        // console.log(servic)

                                        return (

                                            <div className="service-item rounded p-4 mb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex">
                                                            <div className="pe-4">
                                                                <div className="service-btn"><i className="fas" > <img src={servic.logo} className='' style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="" /> </i></div>
                                                            </div>
                                                            <div className="service-content">
                                                                <a href="#" className="h4 d-inline-block mb-3">{servic.title}</a>
                                                                <p className="mb-0">{servic.desc.slice(0,120)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
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
            </div>


            <Footer />
        </div>
    )
}

export default Service
