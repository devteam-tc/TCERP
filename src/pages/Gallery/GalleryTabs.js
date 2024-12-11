import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path
// import { galleryData } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const GalleryContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: #F5FDFF;
  @media (max-width: 992px) {
    padding: 40px;
  }
`;

const Description = styled.div`
  text-align: center !important;
  width: 50% !important;
  
  @media (max-width: 992px) {
    width: 100% !important;
    padding: 1rem !important; /* You can adjust padding for smaller screens */
  }
`;

const CardContainer = styled.div`
  margin: 20px 0;
   &:hover {
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const CardItem = styled.div`
  background: white;
  padding: 20px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  color: #565756;
  flex-direction: column;
  // align-items: center;

  img {
    width: 100% !important;
    height: auto;
    border-radius: 5px;
  }
    @media (max-width: 992px) {
    height: auto;
  }
  p {
    margin: 2px;
  }
`;
export const Title = styled.h3`
  font-size: 40px;
  color: #ef5226;
  // line-height: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
// const GalleryTabs = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/gallery/${id}`);
//     window.scrollTo(0, 0); // Ensure the page scrolls to the top
//   };

//   return (
//     <GalleryContainer className='mt-3'>
//     <Row className='justify-content-center'>
//     <Title>Exhibition Gallery</Title>
//     <Description className='text-center w-50 p-3 md-0'>Join our nationwide exhibition to experience live demos of advanced ERP solutions, designed to assist your business flourish . Experience innovative features and discover how we can elevate your business efficiency!</Description>
//     </Row>
//       <Container>
//         <Row>
//           {/* Loop through all the images in the galleryData, combining expo and festival */}
//           {Object.keys(galleryData).map((category) =>
//             galleryData[category].map((item) => (
//               <Col key={item.id} xs={12} md={6} lg={3}>
//                 <CardContainer onClick={() => handleCardClick(item.id)}>
//                       <CardItem className="text-start fw-semibold">
//                         <div className='mb-3'>
//                           <img src={item.img} alt={item.alt} className="w-auto" />
//                         </div>
//                         <p className="font-weight-bold">
//                         <span className="fw-bold text-black">{category === 'festival' ? 'Event Name: ' : 'Location: '}</span>{item.location}
//                         </p>
//                         <p><span className="fw-bold text-black">Venue:</span> {item.venue}</p>
//                         <p><span className="fw-bold text-black mb-2">Date:</span> {item.date}</p>
//                       </CardItem>
//                     </CardContainer>
//               </Col>
//             ))
//           )}
//         </Row>
//       </Container>
//     </GalleryContainer>
//   );
// };

const GalleryTabs = () => {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState({});

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'galleryData'));
        const gallery = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const category = data.category || 'uncategorized'; // Adjust field names as per your database structure
          if (!gallery[category]) {
            gallery[category] = [];
          }
          gallery[category].push({ id: doc.id, ...data });
        });
        setGalleryData(gallery);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };
    fetchGalleryData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <GalleryContainer className='mt-3'>
      <Row className='justify-content-center'>
        <Title>Exhibition Gallery</Title>
        <Description className='text-center w-50 p-3 md-0'>
          Join our nationwide exhibition to experience live demos of advanced ERP solutions, designed to assist your business flourish. Experience innovative features and discover how we can elevate your business efficiency!
        </Description>
      </Row>
      <Container>
        <Row>
          {Object.keys(galleryData).map((category) =>
            galleryData[category].map((item) => (
              <Col key={item.id} xs={12} md={6} lg={3}>
                <CardContainer onClick={() => handleCardClick(item.id)}>
                  <CardItem className="text-start fw-semibold">
                    <div className='mb-3'>
                      <img src={item.img} alt={item.alt} className="w-auto" />
                    </div>
                    <p className="font-weight-bold">
                      <span className="fw-bold text-black">{category === 'festival' ? 'Event Name: ' : 'Location: '}</span>{item.location}
                    </p>
                    <p><span className="fw-bold text-black">Venue:</span> {item.venue}</p>
                    <p><span className="fw-bold text-black mb-2">Date:</span> {item.date}</p>
                  </CardItem>
                </CardContainer>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </GalleryContainer>
  );
};

export default GalleryTabs;