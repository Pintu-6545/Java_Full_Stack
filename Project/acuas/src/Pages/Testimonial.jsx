import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
// import 'swiper/css';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';
function Testimonial() {

    const [feedback,setFeedback] = useState()

            useEffect(()=>{
                getFeedbackData()
            },[])

        const getFeedbackData = async() =>{
            const res = await axios.get("http://localhost:3000/feedback")
            console.log(res.data)
            setFeedback(res.data)
        }

    return (
        <div>
            <Header />
            <Navs title="Our Testimonial" name="Testimonial" />

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



            <Footer />
        </div>
    )
}

export default Testimonial
