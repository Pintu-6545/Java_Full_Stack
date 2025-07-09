import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MyState from './Context/MyState'
import AddStudent from './Pages/addStudent/AddStudent'
import UpdateStudent from './Pages/updateStudent/UpdateStudent'

function App() {
  return (

        <MyState>
              <BrowserRouter>
                    <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/addstudent' element={<AddStudent />} />
                            <Route path='/updatedata' element={<UpdateStudent />} />
                    </Routes>

          {/* <Home /> */}
          </BrowserRouter>
        </MyState>
  
  )
}

export default App
