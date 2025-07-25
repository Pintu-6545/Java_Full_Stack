import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
import axios from 'axios'

function OurFeature() {

    const [proQuality, setproQuality] = useState()

    useEffect(() => {
        getProductQuality()
    },[])

    const getProductQuality = async () => {
        const res = await axios.get("http://localhost:3000/feature")
        console.log(res.data)
        setproQuality(res.data)
    }

    return (
        <div>
            <Header />
            <Navs title="Our Features" name="Feature" />

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

            <Footer />
        </div>
    )
}

export default OurFeature
