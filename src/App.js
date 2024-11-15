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
import ProductPage from './pages/Products/ProductsPage';
import BusinessIntelligence from './pages/Business/business-intelligence-analytics-software';
import ContactUs from './pages/Contact/ContactUs';
import TermsAndConditions from './pages/terms-conditions';
import PrivacyPolicy from './pages/privacy-policy';
import MdsProfile from './pages/profile/mds-profile';
import NotFound from './pages/NotFound';
import ServicesSection from './pages/Services/ServicesSection';
import PricingPage from './pages/Pricing/PricingPage';
import FeatureCard from './pages/FeatureCard';
import ComparisonTable from './pages/product-comparison';
import './routes/index.css'
import Navigation from './components/Navbar/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton';
import BlogList from './pages/Blogs/BlogList';
import BlogForm from './pages/Blogs/BlogForm';
import CareersList from './pages/Careers/CareersList';
import JobDetail from './pages/Careers/JobDetails';
import AdminJobManagement from './pages/Careers/JobEntry';
import OurBranches from './pages/Branches/OurBranches';
import AllServicesSection from './pages/AllServices/AllServicesSection';
import AllIndustriesSection from './pages/AllIndustries/AllIndustriesSection';
import AllProductsSection from './pages/AllProducts/AllProductsSection';
import DemoPage from './components/Navbar/DemoPage';

function App() {
  return (
    <Router >
      <div className="App  md:bg-top bg-center">
        <Navigation/>
        {/* Define your Routes here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
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
          <Route path="/business-intelligence" element ={<BusinessIntelligence />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/terms-and-conditions' element ={<TermsAndConditions />} />
          <Route path='/privacypolicy' element ={<PrivacyPolicy />} />
          <Route path ='/mds-profile' element ={<MdsProfile />} />
          {/* 404 error for unmatched subroutes within dynamic routes */}
          <Route path="/gallery/404" element={<NotFound />} />
          {/* Other routes */}
          <Route path="/services/:serviceId" element={<ServicesSection />} />
          <Route path="/services/*" element={<NotFound />} />
          <Route path='/services' element={<AllServicesSection />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/features' element={<FeatureCard />} />
          <Route path='/ourbranches' element={<OurBranches />} />
          <Route path="/product-comparison" element={<ComparisonTable />} />
          <Route path='/blogs' element={<BlogList />}/>
          <Route path="/blogForm" element={<BlogForm />} />
          <Route path='/careers' element={<CareersList />}/>
          <Route path="/careers/:jobId" element={<JobDetail />} />
          <Route path="/job-entry" element={<AdminJobManagement />} />
          {/* Other routes */}

          {/* Route for 404 Not Found */}
          <Route path="/industries/*" element={<NotFound />} />
          <Route path='/allindustries' element={<AllIndustriesSection />} />
          <Route path='/allproducts' element={<AllProductsSection/>} />
          <Route path="/products/*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/demo' element={<DemoPage />} />
        </Routes>
        {/* Footer should be displayed across all pages */}
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
