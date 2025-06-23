/*
Task 1: 
o Create a functional component with a counter using the useState() hook. Include 
buttons to increment and decrement the counter. 
*/
import React, { useState } from 'react'

function Counter() {
            const [count, setdata] = useState(0)

  return (
    <div>
            <h1>Number {count}</h1>
            <button onClick={() => setdata(count + 1)}>Increament</button> 
            <button onClick={() => setdata(count - 1)}>Decreament</button>
    </div>
  )
}

export default Counter
