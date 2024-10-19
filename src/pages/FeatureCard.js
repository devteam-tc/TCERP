// import React from 'react';
// import styled from 'styled-components';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { featuresData, aboutus_data } from '../utils/constants';
// import { ContentColumn, Description, Divider, Heading, Section } from './IndustryPage';
// import { Title } from './Home/CardSection';

// export const StyledCard = styled(Card)`
//     display: flex;
//     flex-direction: column;
//     width: clamp(20rem, calc(20rem + 2vw), 22rem);
//     overflow: hidden;
//     box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
//     transition: box-shadow 0.3s ease;
//     height: 100%;

//     &:hover {
//         box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
//     }

//     .card__image {
//         width: 100%;
//         height: auto;
//         border-radius: 8px;
//     }

//     .card__body {
//         padding: 1rem;
//         display: flex;
//         flex-direction: column;
//         flex-grow: 1;
//         // justify-content: space-between;
//         // gap: 0.5rem;
//     }
//         @media (max-width: 992px) {
//             width:100% !important;
//         }
// `;

// export const SubTitle = styled.p`
//     text-align: center;
//     margin-top: 1rem;
//     margin-bottom: 2rem;
//     color: #6c757d;
//     font-size: 1.1rem;
// `;

// const FeatureCard = () => {
//     const { heading, description } = aboutus_data.featurescontent;
    
//     return (
//         <>
//             <Section>
//                 <Container>
//                     <Row>
//                         <ContentColumn md={6}>
//                             <Heading>{heading}</Heading>
//                             <Divider />
//                             <Description>{description}</Description>
//                         </ContentColumn>
//                     </Row>
//                 </Container>
//             </Section>
//             <Container className='mt-5'>
//                 <Row>
//                     <Title className='text-center mt-3 mb-3'>Unique Features</Title>
//                     <SubTitle>TechCloud ERP offers a cutting-edge solution with seamless integration, intuitive design, and robust real-time analytics. It empowers businesses to streamline operations, enhance productivity, and drive informed decision-making effortlessly.</SubTitle>
//                     {featuresData.map((feature, index) => (
//                         <Col key={index} md={4} className="mb-5">
//                             <StyledCard>
//                                 <Card.Img variant="top" src={feature.imgSrc} alt="card__image" className="card__image" />
//                                 <Card.Body className="card__body">
//                                     <Card.Title>{feature.title}</Card.Title>
//                                     <Card.Text>{feature.description}</Card.Text>
//                                 </Card.Body>
//                             </StyledCard>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default FeatureCard;
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { featuresData } from '../utils/constants';
import { Title } from './Home/CardSection';
import { Container } from 'react-bootstrap';

// Styled Components for Slider
const SliderWrapper = styled.div`
  padding: 10px 0;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-track {
    display: flex;
    gap: 20px;
  }

  .slick-dots {
    bottom: -30px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 400px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: 45vw;
    height: auto;
  }

  @media (max-width: 992px) {
    width: 40vw;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }

  @media (max-width: 576px) {
    width: 90vw;
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 992px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 576px) {
    height: 150px;
  }
`;

const CardTitle = styled.h5`
  margin: 15px 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const CardText = styled.p`
  font-size: 13px;
  color: #666;

  @media (max-width: 992px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

const SubTitle = styled.p`
  text-align: center;
    color: #6c757d;
`;


const FeatureCard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: '#F5FDFF' }}>
      <Title className="text-center pt-5">Unique Features</Title>
      <SubTitle className='w-75 mx-auto'>TechCloud ERP offers a cutting-edge solution with seamless integration, intuitive design, and robust real-time analytics. 
        It empowers businesses to streamline operations, enhance productivity, and drive informed decision-making effortlessly</SubTitle>
      <Container className=" pb-5">
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {featuresData.map((feature, index) => (
              <Card key={feature.id} className='mb-5'>
                <CardImage src={feature.imgSrc} alt={feature.title} />
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </Card>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </div>
  );
};

export default FeatureCard;
