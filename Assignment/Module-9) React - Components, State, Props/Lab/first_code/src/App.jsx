/* Task 2: 
o Create a class component WelcomeMessage that displays "Welcome to React!" and 
a render() method.*/

import { useState } from 'react';
import Greeting from './Components/Greeting';
import WelcomeMessage from './Components/WelcomeMessage';
import Mainprops from './Props/Mainprops';
import Usercard from './Props/Usercard';
import Counter from './State/Counter';
import Hello from './Lab/Hello';
import Welcome from './Lab/Welcome';

function App() {

  return (
    <div>
          < Hello />
          {/* < Welcome /> */}
          {/* < Greeting name ="Pintu!" /> */}
          {/* < WelcomeMessage /> */}
           {/* < Mainprops /> */}
           {/* <Counter /> */}
    </div>
  )
}

export default App
