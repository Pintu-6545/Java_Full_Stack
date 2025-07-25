import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
import axios from 'axios'

function OurProduct() {

    const [product, setproduct] = useState()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await axios.get("http://localhost:3000/products")
        console.log(res.data)
        setproduct(res.data)
    }

    return (
        <div>
            <Header />
            <Navs title="Our Products" name="Product" />

            {/* Products Start */}
            <div className="container-fluid product py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-uppercase text-primary">Our Products</h4>
                        <h1 className="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {
                            product && product.map((value, index) => {
                                console.log(value)

                                return (

                                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="product-item">
                                            <img src={value.image} style={{height:"280px", width:"300px"}} className="img-fluid w-100 rounded-top" alt="Image" />
                                            <div className="product-content bg-light text-center rounded-bottom p-4">
                                                <p>{value.quantity}</p>
                                                <a href="#" className="h4 d-inline-block mb-3">{value.water_type}</a>
                                                <p className="fs-4 text-primary mb-3"><img src={value.icon}style={{width:"40px", height:"30px"}} alt="" />{value.price}</p>
                                                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>
            {/* Products End */}


            <Footer />
        </div>
    )
}

export default OurProduct
