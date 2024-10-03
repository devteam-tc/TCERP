import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainNavbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { sectionsData } from './utils/constants';
import IndustryPage from './pages/IndustryPage';
import Aboutus from './pages/Aboutus/Aboutus';
import ExpoDetail from './pages/Gallery/ExpoDetail';
import ProductPage from './pages/Products/ProductsPage';
import BusinessIntelligence from './pages/Business/business-intelligence-analytics-software';
import ContactUs from './pages/Contact/ContactUs';
import TermsAndConditions from './pages/terms-conditions';
import PrivacyPolicy from './pages/privacy-policy';
import MdsProfile from './pages/profile/mds-profile';
import NotFound from './pages/NotFound';
import ServicesSection from './pages/Services/ServicesSection';
import Footer from './components/Footer/footer';
const APP = (
  <HelmetProvider>
    <BrowserRouter>
      <div className="App font-[Poppins] md:bg-top bg-center">
        <MainNavbar/>
        {/* Define your Routes here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<Aboutus />} />
          
          {/* Dynamic routes for each industry */}
          {Object.keys(sectionsData).map((industry) => (
            <Route exact
              key={industry}
              path={sectionsData[industry].link}
              element={<IndustryPage data={sectionsData[industry]} />}
            />
          ))}
          {/* Define routes for festivals and others similarly */}
          <Route exact path="/gallery/:id" element={<ExpoDetail/>} />
          {/* Dynamic product pages */}
          <Route exact path="/products/:productId" element={<ProductPage />} />
          <Route exact path="/business-intelligence-analytics-software" element ={<BusinessIntelligence />} />
          <Route exact path='/ContactUs' element={<ContactUs />} />
          <Route exact path='/terms-and-conditions' element ={<TermsAndConditions />} />
          <Route exact path='/privacypolicy' element ={<PrivacyPolicy />} />
          <Route exact path ='/mds-profile' element ={<MdsProfile />} />
          {/* 404 error for unmatched subroutes within dynamic routes */}
          <Route exact path="/products/*" element={<NotFound />} />
          <Route exact path="/gallery/*" element={<NotFound />} />
          {/* Other routes */}
          <Route exact path="/services/:serviceId" element={<ServicesSection />} />
          <Route exact path="/services/*" element={<NotFound />} />
          {/* Other routes */}

          {/* Route for 404 Not Found */}
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        {/* Footer should be displayed across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  </HelmetProvider>
);
// Select the root element
const rootElement = document.getElementById('root');

// Check if the root element already has child nodes (i.e., server-rendered content)
if (rootElement.hasChildNodes()) {
  // Use hydrateRoot for server-side rendering (SSR) hydration
  hydrateRoot(rootElement, APP);
} else {
  // Use createRoot for client-side rendering (CSR)
  const root = ReactDOM.createRoot(rootElement);
  root.render(APP);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
