import React from 'react';
import Header from '../Reuse/Header';
import Footer from '../Reuse/Footer';
import Navs from '../Reuse/Navs';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ShopDetail() {
  return (
    <div>
      <Header />
      <Navs name="Home" title="Shop" desc="Shop Detail" />

      {/* Shop Detail Section */}
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner bg-light">
                {[1, 2, 3, 4].map((num, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={num}
                  >
                    <img
                      className="w-100 h-100"
                      src={`img/product-${num}.jpg`}
                      alt={`Product ${num}`}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>

          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>Product Name Goes Here</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star-half-alt" />
                  <small className="far fa-star" />
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
              <p className="mb-4">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                clita ea...
              </p>

              {/* Sizes */}
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                  <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={`size-${index}`}
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor={`size-${index}`}>
                      {size}
                    </label>
                  </div>
                ))}
              </div>

              {/* Colors */}
              <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                {['Black', 'White', 'Red', 'Blue', 'Green'].map((color, index) => (
                  <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={`color-${index}`}
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor={`color-${index}`}>
                      {color}
                    </label>
                  </div>
                ))}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity mr-3" style={{ width: 130 }}>
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
              </div>

              {/* Social Share */}
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs (Description/Info/Review) */}
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">
                  Description
                </a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">
                  Information
                </a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">
                  Reviews (0)
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>Description goes here...</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>Additional product information...</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">1 review for "Product Name"</h4>
                      <div className="media mb-4">
                        <img
                          src="img/user.jpg"
                          alt="User"
                          className="img-fluid mr-3 mt-1"
                          style={{ width: 45 }}
                        />
                        <div className="media-body">
                          <h6>
                            John Doe<small> - <i>01 Jan 2045</i></small>
                          </h6>
                          <div className="text-primary mb-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                          <p>Great product! Highly recommend.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <form>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea id="message" cols="30" rows="5" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-0">
                          <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper: You May Also Like */}
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 2500 }}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <SwiperSlide key={num}>
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src={`img/product-${num}.jpg`} alt="" />
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#">
                          <i className="far fa-heart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#">
                          <i className="fa fa-sync-alt" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#">
                          <i className="fa fa-search" />
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
                        <h6 className="text-muted ml-2">
                          <del>$123.00</del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <small className="fa fa-star text-primary mr-1" key={i} />
                        ))}
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShopDetail;
