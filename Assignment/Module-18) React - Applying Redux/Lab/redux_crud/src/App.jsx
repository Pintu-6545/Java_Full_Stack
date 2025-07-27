import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Read from './Component/Read'
import AddStudent from './Component/AddStudent'
import { ToastContainer } from 'react-toastify'
import UpdateProfile from './Component/UpdateProfile'

function App() {
  return (
    <BrowserRouter >

    <div>

          <Navbar />
           <ToastContainer />
          <Routes>
                    <Route path='/' element={<Read />} />
                    <Route path='/addstudent' element={<AddStudent />} />
                    <Route path='/profile/:id' element={<UpdateProfile />} />
          </Routes>
            
    </div>

    </BrowserRouter>
  )
}

export default App
      