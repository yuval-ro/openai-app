import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, RequireAuth } from 'react-auth-kit'
import { Container } from 'react-bootstrap'

import Header from './components/AnchoredComponents/Header'
import Footer from './components/AnchoredComponents/Footer'
import Home from './containers/Home'
import Admin from './containers/Admin'
import Login from './containers/Login'
import About from './containers/About'
import NotFound from './containers/NotFound'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 'Logout' Button functionality

  return (
    <Container
      variant='fluid'
      style={{
        'height': '100vh',
        'fontFamily': 'Public Sans',
        'backgroundColor': '#f6f6f6'
      }}>
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
    </Container>
  )
}

export default App