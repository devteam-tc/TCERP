// import React from 'react';
// import styled from 'styled-components';
// import { Container } from 'react-bootstrap';
// import { releavant } from '../../utils/constants'; 

// const VideoBackground = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1; 
// `;

// const BannerWrapper = styled.div`
//   position: relative;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-align: center;
// `;

// const BannerContent = styled.div`
//   background: rgb(0,0,0);
//   backdrop-filter: blur(3px);
//   background: linear-gradient(150deg, rgba(0,0,36,0.8127626050420168) 0%, rgba(5,43,54,0.5102415966386555) 22%, rgba(0,84,103,0.4906337535014006) 52%, rgba(0,65,80,0.3981967787114846) 66%, rgba(1,1,5,0.8295693277310925) 100%);
//   padding: 40px;
//   border-radius: 10px; /* Optional: Adds rounded corners */
// `;

// const BannerTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: 900;
//   color: #EF5226;

//   @media (max-width: 992px) {
//     font-size: 1.9rem;
//   }
// `;

// const BannerSubtitle = styled.h2`
//   font-weight: 900;
//   font-size: 5rem;
//   // color: #ef5226;
//   color: #EF5226;

//   @media (max-width: 992px) {
//     font-size: 1.9rem;
//   }
// `;

// const BannerText = styled.p`
//   font-size: 18px;
// text-align:center !important;
//   @media (max-width: 992px) {
//     font-size: 1rem;
//   }
// `;

// const HomeVideoLanding = () => {
//   return (
//     <BannerWrapper>
//       <VideoBackground autoPlay loop muted>
//         <source src={releavant.bgvideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </VideoBackground>
//       <Container>
//         <BannerContent>
//           <BannerTitle>INNOVATE, INTEGRATE, EXCEL</BannerTitle>
//           <BannerSubtitle>The Era of ERP Solutions</BannerSubtitle>
//           <BannerText>Each click step software is the digital backbone of modern businesses, orchestrating efficiency, transparency, and growth in every operation.</BannerText>
//         </BannerContent>
//       </Container>
//     </BannerWrapper>
//   );
// };

// export default HomeVideoLanding;


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container , Row } from 'react-bootstrap';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`;

const BannerWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const BannerContent = styled.div`
border-radius: 10px;
border: 3px solid #FCE2DB;
background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(7.5px);


  background: rgb(0,0,0);
  background: linear-gradient(150deg, rgb(237 237 255 / 81%) 0%, rgb(239 248 251 / 51%) 22%, rgb(193 222 228 / 49%) 52%, rgb(211 226 230 / 40%) 66%, rgb(241 241 254 / 83%) 100%);
  padding: 40px;
  border-radius: 10px;
`;

const BannerTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: #EF5226;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const BannerSubtitle = styled.h2`
  font-weight: 900;
  font-size: 5rem;
  color: #EF5226;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const BannerText = styled.h6`
  font-size: 17px;
  color:#000;
  text-align: center !important;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const HomeVideoLanding = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch the video URL from an API
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch('https://techclouderp.in//tcerp_demo_api/api/get_uploaded_files.php'); // Replace with your actual API endpoint
        const data = await response.json();
        if (data.status === "200" && data.data.length > 0) {
          setVideoUrl(data.data[0].file_path); // Accessing the correct property from the response
        }
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };
    fetchVideoUrl();
  }, []);

  return (
    <BannerWrapper>
      {videoUrl && (
        <VideoBackground autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
      )}
      <Container>
        <BannerContent>
          <BannerTitle>INNOVATE, INTEGRATE, EXCEL.</BannerTitle>
          <BannerSubtitle>The Era of ERP Solutions</BannerSubtitle>
          <Row className='justify-content-center'>
          <BannerText className='text-center w-75 md-0'>Tech Cloud ERP software is the digital backbone of modern businesses, orchestrating efficiency, transparency, and growth in every operation.</BannerText>
          </Row>
        </BannerContent>
      </Container>
    </BannerWrapper>


  );
};

export default HomeVideoLanding;
