import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './auth/Login'
import Registeruser from './auth/Registeruser'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import PropertyDetail from './components/PropertyDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import BookingForm from './components/BookingForms'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Forgetpage from './auth/ForgotPassword'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/booking' element={<BookingForm />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/register-user' element={<Registeruser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget-password' element={<Forgetpage />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/booking-page' element={<BookingForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/property/:id' element={<PropertyDetail />} />
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </div>
  )
}

export default App
