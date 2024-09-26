import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { galleryData } from '../../utils/constants';
import { Title } from '../Home/CardSection';
import { useNavigate } from 'react-router-dom';

const GalleryContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: #F5FDFF;
`;

const Description = styled.p`
  color: #393939;
  font-size: 20px;
  margin-bottom: 2rem;
`;

const TabButton = styled(Nav.Link)`
  color: #6c757d;
  background-color: transparent;
  font-weight: bold;
  width: auto;
  border: none;
  text-align: center;

  &:hover {
    color: white;
    background-color: #EF5226;
  }

  &.active {
    color: white !important;
    background-color: #EF5226 !important;
  }
`;

const CardContainer = styled.div`
  margin: 20px 0;
  width: min-content;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0.1, 0.3);
    cursor: pointer;
  }
`;

const CardItem = styled.div`
  background: white;
  padding: 20px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('expo');
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
    window.scrollTo(0, 0); // Ensure the page scrolls to the top
  };


  return (
    <GalleryContainer>
      <Title>Exhibition Gallery</Title>
      <Description>Explore our curated gallery of innovative designs and project solutions.</Description>

      <Container>
        <Tab.Container activeKey={activeTab}>
          <Nav style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Nav.Item>
              <TabButton 
                className={activeTab === 'expo' ? 'active' : ''} 
                onClick={() => setActiveTab('expo')}
              >
                Expo's
              </TabButton>
            </Nav.Item>
            <Nav.Item>
              <TabButton 
                className={activeTab === 'festival' ? 'active' : ''} 
                onClick={() => setActiveTab('festival')}
              >
                Event's
              </TabButton>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey={activeTab}>
              <Row>
                {galleryData[activeTab].map((item) => (
                  <Col key={item.id} xs={12} md={6} lg={4}>
                    <CardContainer onClick={() => handleCardClick(item.id)}>
                      <CardItem className="text-start fw-semibold">
                        <div>
                          <img src={item.img} alt={item.alt} className="w-auto" />
                        </div>
                        <p className="mt-2 font-weight-bold">
                        <span className="fw-bold">{activeTab === 'festival' ? 'Event Name: ' : 'Location: '}</span>{item.location}
                        </p>
                        <p><span className="fw-bold">Venue:</span> {item.venue}</p>
                        <p><span className="fw-bold mb-2">Date:</span> {item.date}</p>
                      </CardItem>
                    </CardContainer>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </GalleryContainer>
  );
};

export default GalleryTabs;

