import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import { releavant } from "../../utils/constants";
// Styled Components
const GradientContainer = styled(Container)`
  background-image: url(${releavant.testimonials_bg});
  background-position: center;
  background-size: contain;
  height: auto;
  padding: 2%;
  background-repeat: no-repeat;
  // padding: 2rem 0;
`;
const StyledCard = styled(Card)`
  border: none;
  background-color: transparent;
  
`;

const StyledCardBody = styled(Card.Body)`
  background-color: transparent !important;
  padding: 2rem;
`;

const StyledCarouselItem = styled(Carousel.Item)`
  
  .row {
    justify-content: center;
  }
  .text-center.text-lg-start {
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  
`;

const CarouselControls = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  margin-top: 5vh;

  button {
    background: none;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e93906;
    border: none;
    font-size: 3rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
      background: none;
    }
  }
`;


const Testimonials = ({ testimonialsData}) => {
  const [index, setIndex] = useState(0);
  const lastIndex = testimonialsData.length - 1;

  const handleSelect = (selectedIndex) => {
    if (selectedIndex < 0) {
      setIndex(lastIndex);
    } else if (selectedIndex > lastIndex) {
      setIndex(0);
    } else {
      setIndex(selectedIndex);
    }
  };


  return (
    <Container fluid className="text-center w-100 w-md-50 p-md-5">
      {/* <h1 className="fw-bold mb-3 mt-3">Testimonials</h1> */}
      <h2 className="py-3">Testimonials</h2>
      <GradientContainer>
          <StyledCard>
            <StyledCardBody className="px-4 py-md-5">
              <CarouselWrapper className="bg-transparent">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  indicators={false}
                  controls={false}
                  variant="dark"
                >
                  {testimonialsData.map((testimonial, idx) => (
                    <StyledCarouselItem key={idx}>
                      <Row className="d-flex justify-content-center" >
                        <Col
                          md={12}
                          className="text-center text-md-start mx-auto mx-lg-0 text-white"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(50px)',
                            borderRadius: '20px',
                            border: '20px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            height: 'auto',
                            padding: '2%',
                            width: window.innerWidth >= 992 ? "65%" : "100%"
                          }}
                        >
                          <Image
                                src={releavant.Quotation_mark}
                                roundedCircle
                                fluid
                                height="100"
                                className="shadow-1 mb-4 mb-lg-0"
                                alt={`${testimonial.name} avatar`}
                              />
                          <p className="mb-0 pd-3 fs-5 fw-semibold text-black w-75 m-auto" style={{color: '#3F3D56'}}>
                            {testimonial.testimonial}
                          </p>
                          <CarouselControls>
                            <button onClick={() => handleSelect(index - 1)} disabled={index === 0}>
                              &#8592;
                            </button>

                            
                            <div className="d-flex flex-column justify-content-center align-items-center">
                            <Image
                                src={testimonial.image}
                                roundedCircle
                                fluid
                                width="100"
                                height="100"
                                className="shadow-1 mb-4 mb-lg-0"
                                alt={`${testimonial.name} avatar`}
                              />
                            <h4 className="mb-0 mt-3 fs-4 fs-md-3 text-black">{testimonial.name}</h4>
                            </div>
                            <button
                              onClick={() => handleSelect(index + 1)}
                              disabled={index === lastIndex}
                            >
                              &#8594;
                            </button>
                          </CarouselControls>
                        </Col>
                        
                      </Row>
                    </StyledCarouselItem>
                  ))}
                </Carousel>
              </CarouselWrapper>
            </StyledCardBody>
          </StyledCard>
	</GradientContainer>
    </Container>
  );
};

export default Testimonials;

