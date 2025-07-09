import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { Link } from 'react-router-dom';

function AddStudent() {

    const context = useContext(MyContext)
    // console.log(context)

    const { student, setstudent, addStudent } = context;

    return (
        <div>
            
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-dark text-white p-4 rounded w-100" style={{ maxWidth: '30rem' }}>
                    <div className="d-flex align-items-center mb-3">
                        <Link to="/" className="text-white me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                        <h1 className="h5 fw-bold m-0">Add Student</h1>
                    </div>
                    <form action="" >
                    <div className="mb-3">
                        <input type="text" value={student.name} onChange={(e) => setstudent({ ...student, name: e.target.value })} name="name" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Student Name" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.image} onChange={(e) => setstudent({ ...student, image: e.target.value })} name="image" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Student Image" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.email} onChange={(e) => setstudent({ ...student, email: e.target.value })} name="email" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Student Email " />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.phone} onChange={(e) => setstudent({ ...student, phone: e.target.value })} name="phone" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Phone Number" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.address} onChange={(e) => setstudent({ ...student, address: e.target.value })} name="address" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Address" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.City} onChange={(e) => setstudent({ ...student, City: e.target.value })} name="city" className="form-control bg-secondary text-dark bg-light border-0" placeholder="City" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.State} onChange={(e) => setstudent({ ...student, State: e.target.value })} name="state" className="form-control bg-secondarytext-dark bg-light border-0" placeholder="State" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.dob} onChange={(e) => setstudent({ ...student, dob: e.target.value })} name="dob" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Date of Birth" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.gender} onChange={(e) => setstudent({ ...student, gender: e.target.value })} name="gender" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Gender" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.course} onChange={(e) => setstudent({ ...student, course: e.target.value })} name="course" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Course" />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={student.enrollmentDate} onChange={(e) => setstudent({ ...student, enrollmentDate: e.target.value })} name="enrollmentDate" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Enrollment Date" />
                    </div>

                    <div className="mb-4">
                        <input type="text" value={student.status} onChange={(e) => setstudent({ ...student, status: e.target.value })} name="status" className="form-control bg-secondary text-dark bg-light border-0" placeholder="Status" />
                    </div>

                    <div className="d-grid">
                        <button onClick={(e)=>{ addStudent(); e.preventDefault()}} className="btn btn-primary fw-bold">Add Student</button>
                    </div>
                </form>
                </div>
            </div>


        </div>
    )
}

export default AddStudent
