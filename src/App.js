// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import AboutUs from './pages/Aboutus/Aboutus';
// import Footer from './components/Footer/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/MainNavbar';
// import ErpSoftwareForAgricultureIndustries from './pages/AgricultureIndustry';
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         {/* Define your Routes here */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/" element={<ErpSoftwareForAgricultureIndustries />} />


//           {/* Add more routes as needed */}
//         </Routes>

//         {/* Footer should be displayed across all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/Aboutus/Aboutus';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/MainNavbar';
import IndustryPage from './pages/IndustryPage'; // Component to handle all industry pages
import { sectionsData } from './utils/constants'; // Import industry data

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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

        </Routes>

        {/* Footer should be displayed across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

