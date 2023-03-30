import React from 'react'
import Company from '../../components/Company/Company.component'
import Contact from '../../components/Contact/Contact.component'
import Footer from '../../components/Footer/Footer.component'
import Navbar from '../../components/Navbar/Navbar.component'
import Products from '../../components/Products/Products.component'
import Services from '../../components/Servics/Services.component'
import Slider from '../../components/Slider/Slider.component'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Company/>
        <Products/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  )
}