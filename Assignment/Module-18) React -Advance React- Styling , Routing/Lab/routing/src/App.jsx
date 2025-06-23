import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Routing from './Pages/Routing'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Contact from './Pages/Contact';
import Data from './Pages/Data';



function App() {

  return (
              <BrowserRouter>
    <div>
          
          <Routes>
                <Route path='/' element={< Routing/>}/>
                <Route path='/about' element={< About />}/>
                <Route path='/contact' element={< Contact />} />
                <Route path='/wel' element={< Data />}/>


                <Route path='*' element={<Notfound />} />
          </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App
