import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ctaData } from '../../utils/constants'; 

// Styled components
const Section = styled.section`
  position: relative;
  background: linear-gradient(270deg, #05a7cc 0%, #48c4df 100%);
  padding: 90px 0 100px 0;
  overflow: hidden;
  clip-path: ellipse(75% 100% at center top);
  text-align: center;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  color: #fff;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: -50px;
  left: -356px;
  right: 0px;
  bottom: -48px;
  background-image: url(${(props) => props.bgImage}); 
  background-size: cover;
  
  /* Animation properties */
  -webkit-animation: service_hexagon_2 40s infinite linear;
  -moz-animation: service_hexagon_2 40s infinite linear;
  -o-animation: service_hexagon_2 40s infinite linear;
  animation: service_hexagon_2 40s infinite linear;

  /* Define the keyframes */
  @keyframes service_hexagon_2 {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  /* Vendor prefixes for keyframes */
  @-webkit-keyframes service_hexagon_2 {
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}

@-moz-keyframes service_hexagon_2 {
    0% {
        -moz-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    100% {
        -moz-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}

@-o-keyframes service_hexagon_2 {
    0% {
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    100% {
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}

@keyframes service_hexagon_2 {
    0% {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    100% {
        -webkit-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}

/* Keyframes for service_hexagon */
@-webkit-keyframes service_hexagon {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-moz-keyframes service_hexagon {
    0% {
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-o-keyframes service_hexagon {
    0% {
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes service_hexagon {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

`;


const Heading = styled.h2`
  font-size: 45px;
  line-height: 56px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Text = styled.p`
  margin-bottom: 30px;
  font-size: 16px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CTAButton = styled(Button)`
  position: relative; /* Necessary for positioning the pseudo-elements */
  overflow: hidden;
  padding: 17px 35px 16px;
  text-align: center;
  z-index: 1;
  color: #111111;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  border:none;
  text-transform: capitalize;
  transition: 0.5s;
  background-color: #fff !important;
  border-radius: 55px;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  /* Pseudo-elements */
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
      border:none;
    width: 0%;
    height: 100%;
    content: '';
    z-index: -1;
    background: #ef5226;
    transition: all 900ms ease;
  }

  &::before {
    left: 0;
    transition: all 900ms ease;
  }

  &::after {
    right: 0;
    transition: all 900ms ease;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
  }
`;


const CallToAction = () => {
  return (
    <Section>
      <BackgroundImage bgImage={ctaData.calltoaction_bg_img} /> 
      <Container>
        <Row>
          <Col>
            <Heading>{ctaData.heading}</Heading>
            <Text>{ctaData.description}</Text>
            <CTAButton href={ctaData.buttonLink} target="_blank">
              {ctaData.buttonText}
            </CTAButton>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CallToAction;
