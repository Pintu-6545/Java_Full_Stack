/* 
  Task 2: 
o Create a Counter component with a button that increments a count value using 
React state. Display the current count on the screen.
*/

import React, { useState } from 'react'

function Counter() {

  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>Hello Count:- {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
