import React from 'react'
import Usercard from './Usercard'
function Mainprops() {
  return (
    <div>
            <div className ='container'>
                    <h1>This is UserCard Data</h1>
                    <div className='row g-3' >
                        <Usercard name="Pintu Ghanchi" age="25" location="Ahmedabad"/>
                        <Usercard name="Laxman Borana" age="27" location="Surat" />
                        <Usercard name="Mohit Sharma" age="35" location="Mumbai"/>
                        <Usercard name="Lalit Parmar" age="20" location="Palanpur" />
                        <Usercard name="Rahul Purohit" age="30" location="Pune"/>
                        <Usercard name="Manish Patel" age="28" location="Patan" />
                        <Usercard name="Mohit Parmar" age="19" location="Sirohi"/>
                        <Usercard name="Rajesh Tiwari" age="29" location="Jalore" />
                        <Usercard name="Mukesh Kumar Patel" age="27" location="Baroda"/>
                        <Usercard name="Dalpat Singh0" age="24" location="Jaipur" />
                    </div>
            </div>
    </div>
  )
}

export default Mainprops
