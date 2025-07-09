import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'

function UpdateStudent() {

            const context = useContext(MyContext)
            // console.log(context)

            const {student, setstudent, editStudent } = context;

    return (
        <div className='container my-5'>
            <form >
                    <h3 className='text-danger my-3'>Student Update Form</h3>
                <div className="mb-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={student.name} onChange={(e)=> setstudent({...student, name: e.target.value})} name="name" id="exampleInputEmail1"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                    <input type="text" className="form-control" value={student.image} onChange={(e)=> setstudent({...student, image: e.target.value})} name="image" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" value={student.email} onChange={(e)=> setstudent({...student, email: e.target.value})} name="email" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" value={student.phone} onChange={(e)=> setstudent({...student, phone: e.target.value})} name="phone" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" value={student.address} onChange={(e)=> setstudent({...student, address: e.target.value})} name="address" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                    <input type="text" className="form-control" value={student.City} onChange={(e)=> setstudent({...student, City: e.target.value})} name="city" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                    <input type="text" className="form-control" value={student.State} onChange={(e)=> setstudent({...student, State: e.target.value})} name="state"  id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">DOB</label>
                    <input type="text" className="form-control" value={student.dob} onChange={(e)=> setstudent({...student, dob: e.target.value})} name="dob" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
                    <input type="text" className="form-control" value={student.gender} onChange={(e)=> setstudent({...student, gender: e.target.value})} name="gender" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Course</label>
                    <input type="text" className="form-control" value={student.course} onChange={(e)=> setstudent({...student, course: e.target.value})} name="course" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enrollment Date</label>
                    <input type="text" className="form-control" value={student.enrollmentDate} onChange={(e)=> setstudent({...student, enrollmentDate: e.target.value})} name="enrollmentDate" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Status</label>
                    <input type="text" className="form-control"  value={student.status} onChange={(e)=> setstudent({...student, status: e.target.value})} name="status" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary  mt-2 ms-3" style={{ fontWeight: "600" }}  onClick={(e)=>{ editStudent(); e.preventDefault()}} >Update Student</button>
            </form>

        </div>
    )
}

export default UpdateStudent
