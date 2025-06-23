import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
         {/* Footer */}
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Pizza Hut, LLC
          </h6>
          <p>
            Pizza Hut, LLC is an American multinational pizza restaurant chain and international franchise founded in 1958 in Wichita, Kansas, by brothers Dan and Frank Carney. The chain, headquartered in Plano, Texas, operates 19,866 restaurants worldwide as of 2023.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Classic Pizzas</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Sides</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Desserts</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Drinks</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink className="text-reset" to="/">Home</NavLink>
          </p>
          <p>
            <NavLink className="text-reset" to="/about">About</NavLink>
          </p>
          <p>
             <NavLink className="text-reset" to="/contact">Contact</NavLink>
          </p>
          <p>
            <NavLink className="text-reset" to="/wel">History</NavLink>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" />Pizza Hut | Char Rasta, Ahmedabad
Shop No 10 to 12, Gr Flr, Hilltown Plaza, Ring Road, near Amar Jawan Circle, Char Rasta, Nikol, Ahmedabad, Gujarat 382350, India</p>
          <p>
            <i className="fas fa-envelope me-3" />
           pizzahut@pizzah.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 91 635 552 2512</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://www.pizzahut.co.in/">Pizzahut.co.in</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer
