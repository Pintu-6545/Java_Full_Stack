import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body ">
          <div className="container">
            <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                   <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/wel">History</NavLink>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header
