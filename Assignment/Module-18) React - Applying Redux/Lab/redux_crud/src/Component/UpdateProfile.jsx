import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editStudent, studentData } from '../Slice/studentSlice';

function UpdateProfile() {

    const redirect = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const [Studentdata, setStudentdata] = useState({
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

    const { user } = useSelector((state) => state.students);

    useEffect(() => {
        const singleStudent = user.find((data) => data.id === id);
        if (singleStudent) {
            console.log(singleStudent[0])
            setStudentdata(singleStudent[0]);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...studentData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editStudent(studentData));
        redirect("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1>Update User Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" value={studentData && studentData.name} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="text" name="image"value={studentData && studentData.image} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value={studentData && studentData.email} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" value={studentData && studentData.password} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" name="phone" value={studentData && studentData.phone} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                            <input type="text" name="course" value={studentData && studentData.course} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select name="gender" value={studentData && studentData.gender} onChange={handleChange} className="form-control">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select name="status" value={studentData && studentData.status} onChange={handleChange} className="form-control">
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
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
