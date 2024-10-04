import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { chairmanMessageContent } from "../../utils/constants"; // Import the constant

const MainTitle = styled.h1`
  text-align: center;
  color: #92321b;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 1280px) {
    font-size: 32px;
  }

  @media (max-width: 992px) {
    font-size: 28px;
  }
`;

const MessageContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;

  @media (max-width: 1280px) {
   height: 60vh;
        width: 113vh;
        padding: 40px;
  }

  @media (max-width: 992px) {
    padding: 20px;
    margin-top: 20px;
  }
`;

const ChairmanImage = styled.img`
  border-radius: 50%;
  width: 35vh;
  height: 35vh;

  @media (max-width: 1280px) {
    width: 30vh;
    height: 30vh;
  }

  @media (max-width: 992px) {
    width: 25vh;
    height: 25vh;
  }
`;

const Title = styled.h2`
  color: #92321b;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 1280px) {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

const MessageText = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 1280px) {
    font-size: 13px;
  }

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

const BackgroundContainer = styled(Container)`
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px;
  border-radius: 10px;
  padding-bottom: 60px;

  @media (max-width: 1280px) {
    padding: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 992px) {
    padding: 30px;
    padding-bottom: 30px;
  }
`;

const ChairmanMessage = () => {
  const { title, image, message, backgroundImage } = chairmanMessageContent; // Destructure backgroundImage

  return (
    <>
      <BackgroundContainer fluid backgroundImage={backgroundImage}>
        <Container fluid>
          <MainTitle>A Message from the Chairman</MainTitle>

          <Row className="justify-content-center">
            <Col md={8}>
              <MessageContainer>
                <Row className="align-items-center">
                  <Col md={4} className="text-center">
                    <ChairmanImage src={image} alt={title} />
                  </Col>
                  <Col md={8}>
                    <Title>{title}</Title>
                    {message.map((paragraph, index) => (
                      <MessageText key={index}>{paragraph}</MessageText>
                    ))}
                  </Col>
                </Row>
              </MessageContainer>
            </Col>
          </Row>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default ChairmanMessage;
