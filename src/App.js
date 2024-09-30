import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/Aboutus/Aboutus';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
import IndustryPage from './pages/IndustryPage'; // Component to handle all industry pages
import { sectionsData } from './utils/constants'; // Import industry data
import ExpoDetail from './pages/Gallery/ExpoDetail';
import MainNavbar from './components/Navbar/Navbar';
import ProductPage from './pages/Products/ProductsPage';
import BusinessIntelligence from './pages/Business/business-intelligence-analytics-software';
import ContactUs from './pages/Contact/ContactUs';
import TermsAndConditions from './pages/terms-conditions';
import PrivacyPolicy from './pages/privacy-policy';
import MdsProfile from './pages/profile/mds-profile';
import NotFound from './pages/NotFound';
import ServicesSection from './pages/Services/ServicesSection';

function App() {
  return (
    <Router basename="/TCERP">
      <div className="App font-[Poppins] md:bg-top bg-center">
        <MainNavbar/>
        {/* Define your Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Dynamic routes for each industry */}
          {Object.keys(sectionsData).map((industry) => (
            <Route
              key={industry}
              path={sectionsData[industry].link}
              element={<IndustryPage data={sectionsData[industry]} />}
            />
          ))}
          {/* Define routes for festivals and others similarly */}
          <Route path="/gallery/:id" element={<ExpoDetail/>} />
          {/* Dynamic product pages */}
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/business-intelligence-analytics-software" element ={<BusinessIntelligence />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/terms-and-conditions' element ={<TermsAndConditions />} />
          <Route path='/privacypolicy' element ={<PrivacyPolicy />} />
          <Route path ='/mds-profile' element ={<MdsProfile />} />
          {/* 404 error for unmatched subroutes within dynamic routes */}
          <Route path="/products/*" element={<NotFound />} />
          <Route path="/gallery/*" element={<NotFound />} />
          {/* Other routes */}
          <Route path="/services/:serviceId" element={<ServicesSection />} />
          <Route path="/services/*" element={<NotFound />} />
          {/* Other routes */}

          {/* Route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer should be displayed across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;