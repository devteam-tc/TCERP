import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
import { testimonialsData, releavant, featuresData } from '../../utils/constants';
import StickyButton from '../Home/StickyButton';
import { Title, StyledButton } from './CardSection';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SubTitle, StyledCard } from '../FeatureCard';

// Define the styled button

const Home = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/features');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HomeVideoLanding />
      <OurMissionSection data={releavant.ourMission} />
      <CardSection />
      <ImportantModuleSection />
      <RecordSection />
      <div className='mb-5' style={{ backgroundColor: '#F5FDFF', padding: '60px 0px' }}> {/* New div for background color */}
        <Container className='mt-5'>
          <Row>
            <Title className='text-center mt-3 mb-3'>Unique Features</Title>
            <SubTitle>
              TechCloud ERP offers a cutting-edge solution with seamless integration, intuitive design, and robust real-time analytics. It empowers businesses to streamline operations, enhance productivity, and drive informed decision-making effortlessly.
            </SubTitle>
            {featuresData.slice(0, 3).map((feature, index) => (
              <Col key={index} md={4} className="mb-5">
                <StyledCard>
                  <Card.Img variant="top" src={feature.imgSrc} alt="card__image" className="card__image" />
                  <Card.Body className="card__body">
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
          <StyledButton onClick={handleButtonClick} style={{ margin: '0px auto' }}>Explore More Features</StyledButton>
        </Container>
      </div> {/* End of new div */}

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
