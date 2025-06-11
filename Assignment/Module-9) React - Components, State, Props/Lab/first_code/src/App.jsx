/* Task 2: 
o Create a class component WelcomeMessage that displays "Welcome to React!" and 
a render() method.*/

import { useState } from 'react'
import Greeting from './Components/Greeting'
import WelcomeMessage from './Components/WelcomeMessage'
import Mainprops from './Props/Mainprops'
import Counter from './State/Counter'

function App() {

  return (
    <div>
          {/* < Greeting name ="Pintu!" /> */}
          {/* < WelcomeMessage /> */}
          {/* < Usercard /> */}
           {/* < Mainprops /> */}
           <Counter />
    </div>
  )
}

export default App
