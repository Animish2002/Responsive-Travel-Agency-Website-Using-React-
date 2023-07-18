import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Offer from './components/Offer'
import Tours from './components/Tours'
import Testimonial from './components/Testimonial'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div>

      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <Services/>
      <Destinations/>
      <Offer/>
      <Tours/>
      <Testimonial/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}
