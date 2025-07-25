import React, { useEffect, useState } from 'react'
import Header from '../Reuse/Header'
import Navs from '../Reuse/Navs'
import Footer from '../Reuse/Footer'
import axios from 'axios'

function OurTeam() {

    const [teamMember, setTeamMember] = useState()

    useEffect(() => {
        getTeamMember()
    }, [])

    const getTeamMember = async () => {
        const res = await axios.get("http://localhost:3000/Team")
        console.log(res.data)
        setTeamMember(res.data)
    }

    return (
        <div>
            <Header />
            <Navs title="Our Team" name="Team" />

            {/* Team Start */}
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-uppercase text-primary">Our Team</h4>
                        <h1 className="display-3 text-capitalize mb-3">What is Really seo &amp; How Can I Use It?</h1>
                    </div>
                    <div className="row g-4">
                        {
                            teamMember && teamMember.map((value, index) => {
                                console.log(value)

                                return (

                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="team-item p-4">
                                            <div className="team-inner rounded">
                                                <div className="team-img">
                                                    <img src={value.image} style={{height:"360px"}} className="img-fluid rounded-top w-100" alt="Image" />
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
                                                    <h4 className="mb-3">{value.name}</h4>
                                                    <p className="mb-0 h6">{value.designation}</p>
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
            {/* Team End */}


            <Footer />
        </div>
    )
}

export default OurTeam
