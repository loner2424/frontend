import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signin from'./components/Signin'
import Register from './components/Register'
import { useAuthContext } from './hooks/useAuthContext'
import { LinkPage } from './components/LinkPage'
import Footer from './components/Footer'
import WhyNoUrl from './pages/WhyNoUrl'
import AboutUs from './pages/AboutUs'
import pageNotFound from './pages/pageNotFound'

function App() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/whynourl" element={<WhyNoUrl/>}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="*" element={<Navigate to='/'/>}/>
            <Route exact path="/signin" element={!user ? <Signin /> : <Navigate to="/" />} />
            <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route exact path="/link" element={user ? <LinkPage /> : <Navigate to="/signin" />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
