// import React from 'react';
// import HomeVideoLanding from './HomeVideoLanding';
// import OurMissionSection from './OurMissionSection';
// import CardSection from './CardSection';
// import ImportantModuleSection from './ImportantModuleSection';
// import Testimonials from './Testimonials';
// import RecordSection from './RecordSection';
// import GalleryTabs from '../Gallery/GalleryTabs';
// import PricingSection from './PricingSection';
// import CallToActionSection from './CallToActionSection';
// import OurPartnerSection from './OurPartnerSection';
// import { testimonialsData, releavant } from '../../utils/constants';
// import StickyButton from './StickyButton';
// import ScrollFeatureCard from '../ScrollFeatureCard';

// const Home = () => {
//   return (
//     <>
      
//       <HomeVideoLanding />
//       <OurMissionSection data={releavant.ourMission} />
//       <CardSection />
//       <ImportantModuleSection />
//       <RecordSection />
//       <ScrollFeatureCard />
//       <Testimonials testimonialsData={testimonialsData} />
//       <GalleryTabs />
//       <PricingSection />
//       <CallToActionSection />
//       <OurPartnerSection />
//       <StickyButton />
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import HomeVideoLanding from './HomeVideoLanding';
// import OurMissionSection from './OurMissionSection';
// import CardSection from './CardSection';
// import ImportantModuleSection from './ImportantModuleSection';
// import Testimonials from './Testimonials';
// import RecordSection from './RecordSection';
// import GalleryTabs from '../Gallery/GalleryTabs';
// import PricingSection from './PricingSection';
// import CallToActionSection from './CallToActionSection';
// import OurPartnerSection from './OurPartnerSection';
// import { testimonialsData, releavant } from '../../utils/constants';
// import StickyButton from './StickyButton';
// import ScrollFeatureCard from '../ScrollFeatureCard';

// const Home = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     // Show popup after 2 seconds
//     const showTimer = setTimeout(() => {
//       setShowPopup(true);
//     }, 2000);

//     return () => clearTimeout(showTimer); // Cleanup show timer on unmount
//   }, []);

//   return (
//     <>
//       {showPopup && (
//         <div style={popupStyle}>
//           <div style={popupContentStyle}>
//             <button style={closeButtonStyle} onClick={() => setShowPopup(false)}>
//               ✖
//             </button>
//             <h2>Live Streaming</h2>
//             <div style={{ width: '100%', height: '360px' }}>
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/watch?v=blqgaMGRvzQ"
//                 title="YouTube live stream"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//       <HomeVideoLanding />
//       <OurMissionSection data={releavant.ourMission} />
//       <CardSection />
//       <ImportantModuleSection />
//       <RecordSection />
//       <ScrollFeatureCard />
//       <Testimonials testimonialsData={testimonialsData} />
//       <GalleryTabs />
//       <PricingSection />
//       <CallToActionSection />
//       <OurPartnerSection />
//       <StickyButton />
//     </>
//   );
// };

// export default Home;

// // Styles
// const popupStyle = {
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   width: '100vw',
//   height: '100vh',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   zIndex: 1000,
// };

// const popupContentStyle = {
//   backgroundColor: 'white',
//   padding: '20px',
//   borderRadius: '8px',
//   width: '80%',
//   maxWidth: '600px',
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   position: 'relative',
// };

// const closeButtonStyle = {
//   position: 'absolute',
//   top: '10px',
//   right: '10px',
//   background: 'none',
//   border: 'none',
//   fontSize: '20px',
//   cursor: 'pointer',
// };


// import React, { useState, useEffect } from 'react';
// import HomeVideoLanding from './HomeVideoLanding';
// import OurMissionSection from './OurMissionSection';
// import CardSection from './CardSection';
// import ImportantModuleSection from './ImportantModuleSection';
// import Testimonials from './Testimonials';
// import RecordSection from './RecordSection';
// import GalleryTabs from '../Gallery/GalleryTabs';
// import PricingSection from './PricingSection';
// import CallToActionSection from './CallToActionSection';
// import OurPartnerSection from './OurPartnerSection';
// import { testimonialsData, releavant } from '../../utils/constants';
// import StickyButton from './StickyButton';
// import ScrollFeatureCard from '../ScrollFeatureCard';
// import { collection, doc, getDoc } from 'firebase/firestore';
// import { db } from '../../firebase';

// const Home = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupContent, setPopupContent] = useState({ type: '', url: '', poster: '' });
//   const [popupTimer, setPopupTimer] = useState(2000); // Default 2 seconds
//   const [popupText, setpopupText] = useState(''); // Store dynamic text
//   const [isEnabled, setIsEnabled] = useState(true); // Track whether the popup should be enabled

//   useEffect(() => {
//     // Fetch popup settings from Firebase
//     const fetchPopupSettings = async () => {
//       try {
//         const docRef = doc(db, 'popupSettings', 'home'); // Get the document reference
//         const snapshot = await getDoc(docRef); // Use getDoc to fetch the document
//         if (snapshot.exists()) {
//           const data = snapshot.data();
//           setIsEnabled(data.enabled !== false); // Disable popup if 'enabled' is false
//           setpopupText(data.popupText || 'Live Streaming');
//           setPopupTimer(data.timer || 2000); // Use timer from Firebase or default to 2000ms
//           setPopupContent({
//             type: data.type || 'video', // Could be 'video', 'image', or 'poster'
//             url: data.url || '',
//             poster: data.poster || '',
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching popup settings from Firebase:', error);
//       }
//     };

//     fetchPopupSettings();

//     // Show popup after specified timer
//     if (isEnabled) {
//       const showTimer = setTimeout(() => {
//         setShowPopup(true);
//       }, popupTimer);

//       return () => clearTimeout(showTimer); // Cleanup timer on unmount
//     }
//   }, [popupTimer, isEnabled]);

//   return (
//     <>
//       {showPopup && isEnabled && (
//         <div style={popupStyle}>
//           <div style={popupContentStyle}>
//             <button style={closeButtonStyle} onClick={() => setShowPopup(false)}>
//               ✖
//             </button>
//             <h2>{popupText}</h2> {/* Display dynamic live streaming text */}
//             {popupContent.type === 'video' && popupContent.url && (
//               <div style={{ position: 'relative', width: '100%' }}>
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={popupContent.url}
//                   title="YouTube live stream"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             )}
//             {popupContent.type === 'image' && popupContent.poster && (
//               <img src={popupContent.poster} alt="Popup Poster" style={{ width: '100%' }} />
//             )}
//             {popupContent.type === 'video' && !popupContent.url && popupContent.poster && (
//               <video controls style={{ width: '100%' }}>
//                 <source src={popupContent.poster} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         </div>
//       )}
//       <HomeVideoLanding />
//       <OurMissionSection data={releavant.ourMission} />
//       <CardSection />
//       <ImportantModuleSection />
//       <RecordSection />
//       <ScrollFeatureCard />
//       <Testimonials testimonialsData={testimonialsData} />
//       <GalleryTabs />
//       <PricingSection />
//       <CallToActionSection />
//       <OurPartnerSection />
//       <StickyButton />
//     </>
//   );
// };

// export default Home;

// // Styles
// const popupStyle = {
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   width: '100vw',
//   height: '100vh',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   zIndex: 1000,
// };

// const popupContentStyle = {
//   backgroundColor: 'white',
//   padding: '20px',
//   borderRadius: '8px',
//   width: '80%',
//   maxWidth: '600px',
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   position: 'relative',
// };

// const closeButtonStyle = {
//   position: 'absolute',
//   top: '10px',
//   right: '10px',
//   background: 'none',
//   border: 'none',
//   fontSize: '20px',
//   cursor: 'pointer',
// };


import React, { useState, useEffect } from 'react';
import HomeVideoLanding from './HomeVideoLanding';
import OurMissionSection from './OurMissionSection';
import CardSection from './CardSection';
import ImportantModuleSection from './ImportantModuleSection';
import Testimonials from './Testimonials';
import RecordSection from './RecordSection';
import GalleryTabs from '../Gallery/GalleryTabs';
import PricingSection from './PricingSection';
import CallToActionSection from './CallToActionSection';
import OurPartnerSection from './OurPartnerSection';
import { testimonialsData, releavant } from '../../utils/constants';
import StickyButton from './StickyButton';
import ScrollFeatureCard from '../ScrollFeatureCard';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ type: '', url: '', poster: '' });
  const [popupTimer, setPopupTimer] = useState(2000); // Default 2 seconds
  const [popupText, setpopupText] = useState(''); // Store dynamic text
  const [isEnabled, setIsEnabled] = useState(true); // Track whether the popup should be enabled
  const [closeAfter, setCloseAfter] = useState(5000); // Default 5 seconds for automatic close

  useEffect(() => {
    // Fetch popup settings from Firebase
    const fetchPopupSettings = async () => {
      try {
        const docRef = doc(db, 'popupSettings', 'home'); // Get the document reference
        const snapshot = await getDoc(docRef); // Use getDoc to fetch the document
        if (snapshot.exists()) {
          const data = snapshot.data();
          setIsEnabled(data.enabled !== false); // Disable popup if 'enabled' is false
          setpopupText(data.popupText || 'Live Streaming');
          setPopupTimer(data.timer || 2000); // Use timer from Firebase or default to 2000ms
          setCloseAfter(data.closeAfter || 5000); // Fetch the closeAfter time from Firebase (defaults to 5000ms)
          setPopupContent({
            type: data.type || 'video', // Could be 'video', 'image', or 'poster'
            url: data.url || '',
            poster: data.poster || '',
          });
        }
      } catch (error) {
        console.error('Error fetching popup settings from Firebase:', error);
      }
    };

    fetchPopupSettings();

    // Show popup after specified timer
    if (isEnabled) {
      const showTimer = setTimeout(() => {
        setShowPopup(true);
      }, popupTimer);

      return () => clearTimeout(showTimer); // Cleanup timer on unmount
    }
  }, [popupTimer, isEnabled]);

  useEffect(() => {
    if (showPopup && isEnabled) {
      // Automatically close the popup after the specified time (closeAfter)
      const closeTimer = setTimeout(() => {
        setShowPopup(false);
      }, closeAfter);

      return () => clearTimeout(closeTimer); // Cleanup close timer on unmount or if showPopup changes
    }
  }, [showPopup, closeAfter, isEnabled]);

  return (
    <>
      {showPopup && isEnabled && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <button style={closeButtonStyle} onClick={() => setShowPopup(false)}>
              ✖
            </button>
            <h2>{popupText}</h2> {/* Display dynamic live streaming text */}
            {popupContent.type === 'video' && popupContent.url && (
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={popupContent.url}
                  title="YouTube live stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {popupContent.type === 'image' && popupContent.poster && (
              <img src={popupContent.poster} alt="Popup Poster" style={{ width: '100%' }} />
            )}
            {popupContent.type === 'video' && !popupContent.url && popupContent.poster && (
              <video controls style={{ width: '100%' }}>
                <source src={popupContent.poster} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
      <HomeVideoLanding />
      <OurMissionSection data={releavant.ourMission} />
      <CardSection />
      <ImportantModuleSection />
      <RecordSection />
      <ScrollFeatureCard />
      <Testimonials testimonialsData={testimonialsData} />
      <GalleryTabs />
      <PricingSection />
      <CallToActionSection />
      <OurPartnerSection />
      <StickyButton />
    </>
  );
};

export default Home;

// Styles
const popupStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const popupContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '600px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
};

