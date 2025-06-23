/* Task 1: 
o Create a functional component Greeting that accepts a name as a prop and 
displays "Hello, [name]!".  */

import React from 'react'

function Greeting(prop) {
  return (
    <div>
            <h1>Hello ,{prop.name}</h1>
    </div>
  )
}

export default Greeting
