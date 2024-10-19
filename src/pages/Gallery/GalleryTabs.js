import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { galleryData } from '../../utils/constants';
import { Title } from '../Home/CardSection';
import { useNavigate } from 'react-router-dom';

const GalleryContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: #F5FDFF;
  @media (max-width: 992px) {
    padding: 40px;
  }
`;

const Description = styled.p`
  color: #393939;
  font-size: 20px;
  margin-bottom: 2rem;
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
    margin: 2px !important;
  }
`;

const GalleryTabs = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
    window.scrollTo(0, 0); // Ensure the page scrolls to the top
  };

  return (
    <GalleryContainer className='mt-3'>
    <Row className='justify-content-center'>
    <Title>Exhibition Gallery</Title>
    <Description className='text-center w-75 md-0'>Experience our exclusive exhibition as we tour various cities across India, offering free demos and showcasing our advanced business solutions. Discover the transformative power of our modules, including CRM, ERP, HRMS, Accounting, Trading, POS, Finance, and Restaurant Management, as our experts guide you through live demonstrations at multiple locations. Gain valuable insights into how these innovative tools can streamline your business operations and drive growth, 
      all while exploring the future of enterprise solutions.</Description>
    </Row>
      <Container>
        <Row>
          {/* Loop through all the images in the galleryData, combining expo and festival */}
          {Object.keys(galleryData).map((category) =>
            galleryData[category].map((item) => (
              <Col key={item.id} xs={12} md={6} lg={3}>
                <CardContainer onClick={() => handleCardClick(item.id)}>
                  <CardItem className="text-start ">
                    <div>
                      <img src={item.img} alt={item.alt} className="w-auto" />
                    </div>
                    <p className="mt-3 font-weight-bold text-left">
                      <span className="fw-bold">{category === 'festival' ? 'Event Name: ' : 'Location: '}</span>{item.location}
                    </p>
                    <p><span className="fw-bold">Venue:</span> {item.venue}</p>
                    <p><span className="fw-bold mb-2">Date:</span> {item.date}</p>
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
