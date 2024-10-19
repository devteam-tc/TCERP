import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { chairmanMessageContent } from "../../utils/constants";

const MainTitle = styled.h1`
  text-align: center;
  color: #92321b;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const MessageContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;

  @media (max-width: 992px) {
    padding: 20px;
    margin-top: 20px;
    width: 100%;
  }
`;

const ChairmanImage = styled.img`
  border-radius: 50%;
  width: 270px;
  height: 260px;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 25vh;
    height: 25vh;
  }
`;

const Title = styled.h2`
  color: #92321b;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

const MessageText = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

const BackgroundContainer = styled(Container)`
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  padding: 60px;
  border-radius: 10px;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const ChairmanMessage = () => {
  const { title, image, message, backgroundImage } = chairmanMessageContent;

  return (
    <BackgroundContainer fluid backgroundImage={backgroundImage}>
      <Container fluid>
        <MainTitle>A Message from the Chairman</MainTitle>
        <Row className="justify-content-center">
          <Col md={8}>
            <MessageContainer>
              <Row className="align-items-center">
                <Col md={4} xs={12} className="text-center mb-3 mb-md-0">
                  <ChairmanImage src={image} alt={title} />
                </Col>
                <Col md={8} xs={12}>
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
  );
};

export default ChairmanMessage;
