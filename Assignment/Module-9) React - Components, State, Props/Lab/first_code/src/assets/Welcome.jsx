/* Task: 
o Create a React component that renders the following JSX elements: 
 A heading with the text "Welcome to JSX". 
 A paragraph explaining JSX with dynamic data (use curly braces to insert 
variables). */

import React from 'react'

function Welcome() {
    const data = "Welcome to React JS Library "
  return (
    <div>
            <h4 className='ms-4 '>Welcome to JSX</h4>
            <p className='ms-4 '>{data}</p>
    </div>
  )
}

export default Welcome
