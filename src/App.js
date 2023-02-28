import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, RequireAuth } from 'react-auth-kit'

import Header from './components/Consts/Header'
import Footer from './components/Consts/Footer'
import Home from './containers/Home'
import Admin from './containers/Admin'
import Login from './containers/Login'
import About from './containers/About'
import NotFound from './containers/NotFound'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 'Logout' Button functionality

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin' element={<RequireAuth loginPath={'/login'}><Admin /></RequireAuth>} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/*' element={<Navigate to='/404' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App