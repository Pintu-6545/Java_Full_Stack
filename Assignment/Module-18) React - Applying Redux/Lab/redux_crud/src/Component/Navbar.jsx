import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/assets/nav.css'; 

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 px-4 ">
            <h4 className="navbar-brand fw-bold fs-3">StudentCRUD</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <li className="nav-item">
                        <NavLink className="nav-link nav-hover" to="/">Student</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav-hover" to="/features">Admin</NavLink>
                    </li>
                   
                </ul>
                <NavLink to="/addstudent" className="btn btn-danger add-student-btn">+ Add Student</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
