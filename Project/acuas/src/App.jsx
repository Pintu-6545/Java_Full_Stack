import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Service from './Pages/Service'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import OurFeature from './Pages/OurFeature'
import OurProduct from './Pages/OurProduct'
import OurTeam from './Pages/OurTeam'
import NotFound from './Pages/NotFound'
import Testimonial from './Pages/Testimonial'

function App() {

  return (
     <BrowserRouter>
    <div>
         
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Service />} />
                      <Route path="/blogs" element={<Blog />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/feature' element={<OurFeature />} />
                      <Route path='/pruducts' element={<OurProduct />} />
                      <Route path='/teams' element={<OurTeam />} />
                      <Route path='/testimonial' element={<Testimonial />} />
                      <Route path='*' element={<NotFound />} />
                  </Routes>
         
    </div>
    </BrowserRouter>
  )
}

export default App
