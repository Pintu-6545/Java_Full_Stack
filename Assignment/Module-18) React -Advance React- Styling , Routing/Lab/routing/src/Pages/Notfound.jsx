import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {

        const redirect = useNavigate()
    const goback = () =>{
            redirect("/")
    }
    return (
        <div>
            <div className='container'>
            <img src="https://img.freepik.com/premium-vector/error-404-illustration_863552-12.jpg?ga=GA1.1.1347431533.1742824091&semt=ais_hybrid&w=740" style={{marginLeft:"140px", width:"700px"}} alt="" />
            <button onClick={goback} className='btn btn-primary' style={{fontWeight:600}} > Back Home</button>
            </div>
        </div>
    )
}

export default Notfound
