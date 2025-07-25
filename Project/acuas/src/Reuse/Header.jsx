import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>

            <div>
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <a href className="navbar-brand p-0">
                            <h1 className="text-primary"><i className="fas fa-hand-holding-water me-3" />Acuas</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/services" className="nav-item nav-link">Service</NavLink>
                                <NavLink to="/blogs" className="nav-item nav-link">Blog</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/feature" className="dropdown-item">Our Feature</NavLink>
                                        <NavLink to="/pruducts" className="dropdown-item">Our Product</NavLink>
                                        <NavLink to="/teams" className="dropdown-item">Our Team</NavLink>
                                        <NavLink to="/testimonial"  className="dropdown-item">Testimonial</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/contact"  className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <div className="d-none d-xl-flex me-3">
                                <div className="d-flex flex-column pe-3 border-end border-primary">
                                    <span className="text-body">Get Free Delivery</span>
                                    <a href="tel:+4733378901"><span className="text-primary">Free: + 0123 456 7890</span></a>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search" /></button>
                            <a href className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">Order Now</a>
                        </div>
                    </nav>
                </div>
                {/* Navbar & Hero End */}


                {/* Modal Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Search End */}
            </div>



        </div>
    )
}

export default Header
