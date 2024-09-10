import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/Aboutus/Aboutus';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/MainNavbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Define your Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
       
          {/* Add more routes as needed */}
        </Routes>

        {/* Footer should be displayed across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
