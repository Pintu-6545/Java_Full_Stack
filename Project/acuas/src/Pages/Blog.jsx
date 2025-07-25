import React, { use, useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
import axios from 'axios'
import { Await } from 'react-router-dom'

function Blog() {

    const [blog, setBlog] = useState()

    useEffect(() => {
        getBlogData()
    }, [])

    const getBlogData = async () => {
        const res = await axios.get("http://localhost:3000/blogs")
        console.log(res.data)
        setBlog(res.data)
    }

    return (
        <div>
            <Header />
            <Navs title="Our News & Blog" name=" News & Blog" />

            {/* Blog Start */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-uppercase text-primary">Our Blog</h4>
                        <h1 className="display-3 text-capitalize mb-3">Latest Blog &amp; News</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {
                            blog && blog.map((value, index) => {
                                console.log(value)


                                return (
                                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="blog-item">
                                            <div className="blog-img">
                                                <img src={value.image} style={{height:"280px"}} className="img-fluid rounded-top w-100" alt />
                                                <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> {value.date} </div>
                                            </div>
                                            <div className="blog-content rounded-bottom p-4">
                                                <a href="#" className="h4 d-inline-block mb-3">{value.title}</a>
                                                <p>{value.desc}</p>
                                                <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* Blog End */}


            <Footer />
        </div>
    )
}

export default Blog
