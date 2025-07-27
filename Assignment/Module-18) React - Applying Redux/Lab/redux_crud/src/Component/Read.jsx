import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { studentData, studentread } from '../Slice/studentSlice'
import '../../src/assets/view.css'
import { Link, redirect } from 'react-router-dom'

function Read() {
    const [singleStudent, setSingleStudent] = useState({})
    const student = useSelector((state) => state.students.student)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(studentread())
    }, [])

    const viewStudentData = (id) => {
        const selectedStudent = student.find((s) => s.id === id)
        setSingleStudent(selectedStudent)
    }

    return (
        <div className="table-responsive  mt-4">
            <h1 className="mb-4 text-center">Student Information For Institution</h1>
            <table className="table table-bordered table-hover shadow-sm rounded text-center align-middle">
                <thead className="table-dark" style={{ fontSize: '22px' }}>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '20px' }}>
                    {
                        student && student.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <img src={data.image} className="img-thumbnail img-hover-effect" style={{ width: '120px', height: '100px' }} alt="" />
                                    </td>

                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.course}</td>
                                    <td>{data.gender}</td>
                                    <td>
                                        <span className={`status-badge ${data.status.toLowerCase()}`}>
                                            {data.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center gap-2 flex-wrap">
                                            <button className="custom-btn view" data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() => viewStudentData(data.id)}>
                                               View
                                            </button>
                                            {/* <button className="custom-btn edit" >
                                                 Edit
                                            </button> */}
                                            <Link className="custom-btn edit" to={`/profile/${data.id}`}>Edit</Link>
                                            <button className="custom-btn delete" onClick={()=> dispatch(studentData(data.id))}>
                                                 Delete
                                               
                                            </button>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* View Modal */}
            <div className="modal fade" id="viewModal" tabIndex={-1} aria-labelledby="viewModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewModalLabel">Student Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            {singleStudent && (
                                <>
                                    <img src={singleStudent.image} style={{ width: "400px", height: "300px" }} alt="" />
                                    {/* <h2>ID: {singleStudent.id}</h2> */}
                                    <h2 className='my-2 text-left'>Name: {singleStudent.name}</h2>
                                    <h4>Email: {singleStudent.email}</h4>
                                    <h4>Password: {singleStudent.password}</h4>
                                    <h4>Phone: {singleStudent.phone}</h4>
                                    <h4>Course: {singleStudent.course}</h4>
                                    <h4>Gender: {singleStudent.gender}</h4>
                                    <h4>Status: {singleStudent.status}</h4>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="custom-btn text-light bg-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read
