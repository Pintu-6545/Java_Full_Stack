import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { studentAdd } from '../Slice/studentSlice'
import { toast } from 'react-toastify'

function AddStudent() {
    const redirect = useNavigate()

    const [form, setForm] = useState({
        id: "",
        name: "",
        image: "",
        email:"",
        phone: "",
        course: "",
        gender: "",
        status: "Active"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            id: new Date().getTime().toString(),
            [name]: value
        })
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(studentAdd(form))
        redirect("/")
        toast.success("Student Add Successfully...!")
        setForm({
            id: "",
            name: "",
            image: "",
            email:"",
            phone: "",
            course: "",
            gender: "",
            status: "Active"
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>Add New Student</h1>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label className="form-label mb-0">Name</label>
                                <input type="text" value={form.name} name="name" onChange={handleChange} className="form-control" placeholder="Student Name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Image URL</label>
                                <input type="url" value={form.image} name="image" onChange={handleChange}  className="form-control" placeholder="Image URL" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Email</label>
                                <input type="email" value={form.email} name="email" onChange={handleChange} className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Phone</label>
                                <input type="tel" value={form.phone} name="phone" onChange={handleChange} className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Course</label>
                                <input type="text" value={form.course} name="course" onChange={handleChange}  className="form-control" placeholder="Course" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Gender</label>
                                <select name="gender" value={form.gender} onChange={handleChange}  className="form-select" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Status</label>
                                <select name="status" value={form.status} onChange={handleChange}  className="form-select" required>
                                    <option value="Active">Active</option>
                                    <option value="Drop">Drop</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-primary" value="Add Student" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
