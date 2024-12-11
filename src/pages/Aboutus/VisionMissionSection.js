// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
// import { visionMissionData } from '../../utils/constants'; 

// // Styled-components for custom styles
// const Section = styled.section`
//   padding: 50px 0;
//   background-color: #fff;
// `;

// const ImageContainer = styled.div`
//   position: relative;
//   img {
//     width: 100%;
//     height: auto;
//   }
// `;

// const OrangeBorder = styled.div`
//   position: absolute;
//   top: -20px;
//   bottom: -20px;
//   left: -20px;
//   right: -20px;
//   // border: 15px solid #ff5722; 
//   z-index: -1;
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding-left: 50px; 
//   @media (max-width: 992px) {
//     padding-left: 0;
//   }
// `;

// const Title = styled.h2`
//   font-size: 32px; /* Adjusted the font size */
//   margin-bottom: 20px;
// `;

// const Text = styled.p`
//   font-size: 18px;
//   text-align: justify;
//     line-height: 22px;
//   margin-bottom: 40px; /* Added extra spacing between text blocks */
// `;

// const VisionMissionSection = () => {
//   return (
//     <Section>
//       <Container>
//         <Row className="align-items-center">
//           {/* Image Section */}
//           <Col md={6}>
//             <ImageContainer>
//               <img src={visionMissionData.image} alt="Vision for Innovation" />
//               <OrangeBorder />
//             </ImageContainer>
//           </Col>

//           {/* Text Section */}
//           <Col md={6} className='mt-2 mb-2'>
//             <TextContainer>
//               {/* Our Vision */}
//               <Title style={{color: '#ef5226'}}>{visionMissionData.vision.title}</Title>
//               <Text>{visionMissionData.vision.text}</Text>

//               {/* Our Mission */}
//               <Title style={{color: '#ef5226'}}>{visionMissionData.mission.title}</Title>
//               <Text>{visionMissionData.mission.text}</Text>
//             </TextContainer>
//           </Col>
//         </Row>
//       </Container>
//     </Section>
//   );
// };

// export default VisionMissionSection;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { visionMissionData } from '../../utils/constants';
import AnimatedColumn from '../../components/AnimatedLeftRight'; // Adjust the path as needed
import AnimatedSection from '../../components/AnimatedUp';

// Styled-components for custom styles
const Section = styled.section`
  padding: 50px 0;
  background-color: #fff;
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

const OrangeBorder = styled.div`
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  z-index: -1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  @media (max-width: 992px) {
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 22px;
  margin-bottom: 40px;
`;

const VisionMissionSection = () => {
  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6}>
            <AnimatedColumn direction="left">
              <ImageContainer>
                <img src={visionMissionData.image} alt="Vision for Innovation" />
                <OrangeBorder />
              </ImageContainer>
            </AnimatedColumn>
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <AnimatedColumn direction="right">
              <TextContainer>
                <AnimatedSection id="hero" className="animated-section">
                <Title style={{ color: '#ef5226' }}>{visionMissionData.vision.title}</Title>
                <Text>{visionMissionData.vision.text}</Text>
                </AnimatedSection>

                <Title style={{ color: '#ef5226' }}>{visionMissionData.mission.title}</Title>
                <Text>{visionMissionData.mission.text}</Text>
              </TextContainer>
            </AnimatedColumn>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default VisionMissionSection;
