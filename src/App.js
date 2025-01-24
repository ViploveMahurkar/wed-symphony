// src/App.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import AboutUs from './components/AboutUs';
import PackagePage from './components/PackagePage';
import EnquiryPage from './components/EnquiryPage';
import WeddingPlanning from './components/WeddingPlanning';
import VendorManagement from './components/VendorManagement';
import VenueSelection from './components/VenueSelection';
import EventCoordination from './components/EventCoordination';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import CustomerLogin from './components/CustomerLogin';




function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/services" element={<ServicesOverview />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/packages" element={<PackagePage />} />
                    <Route path="/enquiry" element={<EnquiryPage />} />
                    <Route path="/weddingplanning" element={<WeddingPlanning />} />
                    <Route path="/vendormanagement" element={<VendorManagement />} />
                    <Route path="/venueselection" element={<VenueSelection />} />
                    <Route path="/eventcoordination" element={<EventCoordination />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/customerlogin" element={<CustomerLogin />} />
                    {/* More routes will be added for About Us, Packages, etc. */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
