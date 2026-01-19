import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import WhatIDo from './components/WhatIDo'
import Page6 from './pages/Page6'
import AboutMe from './components/AboutMe'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <div id='main' >
      <ToastContainer position="top-right" autoClose={3000} />
      <Header/>
      <Page1 />
      <Page2/>
      <Page3/>
      <WhatIDo/>
      <Page6/>
      <Page4/>
      <AboutMe/>
      <Page5/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  )
}

export default App
