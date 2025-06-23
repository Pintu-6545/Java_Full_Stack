/* Task 2: 
o Create a list of users where each user has a unique id. Render the user list using 
React and assign a unique key to each user. */ 
import React from 'react'

function Userdata() {
          const users = [
                {id: 1, name: "Pintu Ghanchi"},
                {id: 2, name: "Uttam Bhai"},
                {id: 3, name: "Rahul Prajapati"},
                {id: 4, name: "Mukesh Patel"},
                {id: 5, name: "Laxman Borana"},
                {id: 6, name: "Ganesh Purohit"},
                {id: 7, name: "Manish Raval"},
                {id: 8, name: "Lalit Parmar"}
          ]
  return (
    <div>
            <h2>User List</h2>
            <ul>
                {
                   users.map((user,index)=> (
                        //  console.log(user.name),
                        //  console.log(user.id)
                        //  console.log(index)
                   <li key={index}>{user.id}  {user.name}</li>
                   ))
                }
            </ul>
    </div>
  )
}

export default Userdata
