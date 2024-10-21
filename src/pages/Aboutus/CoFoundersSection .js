import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { coFoundersData } from '../../utils/constants'; 
import { FaXTwitter } from "react-icons/fa6";
import { Title } from "../Home/CardSection";

const SectionContainer = styled.div`
    padding: 60px 0;
    background:#F4FDFF;
    text-align: center;
`;
const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.5;
`;
const StyledCard = styled(Card)`
    border: none;
    border-radius: 10px;
    box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,rgba(173, 216, 230, 0.7) 0px 6px 6px;
    padding: 20px;
`;

const CardTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    color: #e55039;
    margin-top: 10px;
`;

const CardSubtitle = styled.h6`
    font-size: 1rem;
    color: #999;
    margin-bottom: 20px;
`;

const SocialIcons = styled.div`
    font-size: 1.2rem;
    color: #e55039;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 15px 0;

    & > * {
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #000;
        }
    }
`;

const CardText = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin-top: 10px;
`;

const CoFoundersSection = () => {
    const handleSocialClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <SectionContainer>
            <Container>
                <Title className="text-center pt-4 pt-md-0">Our Management Team</Title>
                <SectionSubtitle>
                    Our co-founders are the driving force behind our company’s vision and success. 
                    With a blend of diverse expertise and shared passion for innovation, their leadership 
                    and commitment to excellence guide our team in creating user-focused, high-quality 
                    digital experiences that meet the evolving needs of modern businesses.
                </SectionSubtitle>
                <Row>
                    {coFoundersData.map((coFounder, index) => (
                        <Col md={6} className="mb-4" key={index}>
                            <StyledCard>
                                <Card.Body>
                                    <CardTitle>{coFounder.name}</CardTitle>
                                    <CardSubtitle>{coFounder.title}</CardSubtitle>
                                    <SocialIcons>
                                        <div onClick={() => handleSocialClick(coFounder.socialLinks.facebook)}>
                                            <FaFacebookF />
                                        </div>
                                        <div onClick={() => handleSocialClick(coFounder.socialLinks.linkedin)}>
                                            <FaLinkedinIn />
                                        </div>
                                        <div onClick={() => handleSocialClick(coFounder.socialLinks.instagram)}>
                                            <FaInstagram />
                                        </div>
                                        <div onClick={() => handleSocialClick(coFounder.socialLinks.twitter)}>
                                            <FaXTwitter />
                                        </div>
                                    </SocialIcons>
                                    <CardText>{coFounder.description}</CardText>
                                </Card.Body>
                            </StyledCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionContainer>
    );
};

export default CoFoundersSection;
