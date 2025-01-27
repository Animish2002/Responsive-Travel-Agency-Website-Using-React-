import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Offer from "./components/Offer";
import Tours from "./components/Tours";
import Testimonial from "./components/Testimonial";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    // Remove hash from URL if it exists
    const { hash, pathname, search } = window.location;
    if (hash) {
      window.history.replaceState(null, "", `${pathname}${search}`);
    }

    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </>
  );
}
