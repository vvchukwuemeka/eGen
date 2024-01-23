import React, { Fragment } from 'react'
import Header from '../Components/Header-section/Header'
import Hero from '../Components/Hero-section/Hero'
import Offer from '../Components/Offer-section/Offer'
import Courses from '../Components/Courses-section/Courses'
import About from '../Components/About-Us/About us'
import Updates from '../Components/GetUpdates/Update'
import Footer from '../Components/Footer-section/Footer'



const Home = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <Offer />
        <Courses />
        <About />
        <Updates />
        <Footer />
        
    </Fragment>
  )
}

export default Home