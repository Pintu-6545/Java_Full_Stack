/*Task 1: 
o Create a React component UserCard that accepts name, age, and location as 
props and displays them in a card format.  
*/
import React from 'react'

function Usercard({name,age,location}) {
    return (
        <div className='col-md-3'> 
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{age}</h5>
                     <h5 className="card-title">{location}</h5>
                    <button className='btn btn-danger ms-5 mt-2' style={{fontWeight:"600"}}> View User</button>
                </div>
                </div>
            </div>
    )
}

export default Usercard

/*
import React from 'react'

function UserCard(name,age,location) {

  return (
    <div>
          <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

    </div>
  )
}

export default Usercard

*/