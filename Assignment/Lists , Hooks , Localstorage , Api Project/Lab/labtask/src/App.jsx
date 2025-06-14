import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fruitlist from './List/Fruitlist'
import Userdata from './List/Userdata'
import Counter from './Hooks/Counter'
import Recipesapidata from './Hooks/Recipesapidata'
import AvoidRerenderapp from './AvoidRerender/AvoidRerenderapp'

function App() {

  return (
    <div>
      <Fruitlist />
      {/* < Userdata /> */}
      {/* < Counter /> */}
      {/* < Recipesapidata /> */}
      {/* <AvoidRerenderapp /> */}
    </div>
  )
}

export default App
