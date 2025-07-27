import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editStudent } from '../Slice/studentSlice';
import { toast } from 'react-toastify';

function UpdateProfile() {

    const redirect = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const [studentData, setStudentData] = useState({
        id: '',
        name: '',
        image: '',
        email: '',
        password: '',
        phone: '',
        course: '',
        gender: '',
        status: ''
    });

    const { student } = useSelector((state) => state.students);

    useEffect(() => {
        const singleStudent = student.find((data) => data.id.toString() === id);
        if (singleStudent) {
            setStudentData(singleStudent);
        }
    }, [id, student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editStudent(studentData));
        redirect("/");
        toast.success("Student Data update successfully ...!")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1>Update Student Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" value={studentData.name} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="url" name="image" value={studentData.image} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value={studentData.email} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" value={studentData.password} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" name="phone" value={studentData.phone} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                            <input type="text" name="course" value={studentData.course} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select name="gender" value={studentData.gender} onChange={handleChange} className="form-control" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select name="status" value={studentData.status} onChange={handleChange} className="form-control" required>
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Drop">Drop</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;
