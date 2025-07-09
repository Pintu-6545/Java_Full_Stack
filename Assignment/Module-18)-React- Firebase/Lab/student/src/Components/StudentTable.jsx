import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/MyContext';
import { Link, NavLink } from 'react-router-dom';

function StudentTable() {

    const context = useContext(MyContext);

    const { allStudents, deleteStudent, editStudenthandle } = context;


    return (
        <div className=" my-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Student Details</h4>
                    <NavLink to={"/addstudent"}>
                        <button className='btn btn-danger' style={{ fontSize:"25px", fontWeight:"600", marginLeft: "1850px" }}>Add Student</button>
                    </NavLink>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered mb-0">
                        <thead className="table-dark">
                            <tr style={{fontSize:"22px",fontWeight:"600"}}>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>State</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Enrollment Date</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {allStudents.length > 0 ? (
                                allStudents.map((value, index) => (

                                    <tr key={index}>
                                        <td style={{ fontSize: "20px" }}>{value.name}</td>
                                        <td style={{ fontSize: "20px" }}><img src={value.image} alt="student" width="100px" height="100px" /></td>
                                        <td style={{ fontSize: "20px" }}>{value.email}</td>
                                        <td style={{ fontSize: "20px" }}>{value.phone}</td>
                                        <td style={{ fontSize: "20px" }}>{value.City}</td>
                                        <td style={{ fontSize: "20px" }}>{value.State}</td>
                                        <td style={{ fontSize: "20px" }}>{value.dob}</td>
                                        <td style={{ fontSize: "20px" }}>{value.gender}</td>
                                        <td style={{ fontSize: "20px" }}>{value.course}</td>
                                        <td style={{ fontSize: "20px" }}>{value.enrollmentDate}</td>
                                        <td style={{ fontSize: "20px" }}>{value.status}</td>
                                        <td>
                                            <button className='btn btn-danger mt-2 ms-3 ' style={{ fontWeight: "600" }} onClick={() => deleteStudent(value)}>Delete</button>
                                            
                                            <Link to={"/updatedata"} >
                                            <button className='btn btn-success mt-2 ms-3 ' style={{  fontWeight: "600" }} onClick={()=> editStudenthandle(value)} >Edit</button>
                                        </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="12" className="text-center"  style={{ fontSize: "20px" }}>No students found</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StudentTable;
