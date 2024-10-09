import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { featuresData, aboutus_data } from '../utils/constants';
import { ContentColumn, Description, Divider, Heading, Section } from './IndustryPage';
import { Title } from './Home/CardSection';

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    height: 100%;

    &:hover {
        box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
    }

    .card__image {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .card__body {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
        gap: 0.5rem;
    }
        @media (max-width: 992px) {
            width:100% !important;
        }
`;

const SubTitle = styled.p`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #6c757d;
    font-size: 1.1rem;
`;

const FeatureCard = () => {
    const { heading, description } = aboutus_data.featurescontent;
    
    return (
        <>
            <Section>
                <Container>
                    <Row>
                        <ContentColumn md={6}>
                            <Heading>{heading}</Heading>
                            <Divider />
                            <Description>{description}</Description>
                        </ContentColumn>
                    </Row>
                </Container>
            </Section>
            <Container className='mt-5'>
                <Row>
                    <Title className='text-center mt-3 mb-3'>Unique Features</Title>
                    <SubTitle>TechCloud ERP offers a cutting-edge solution with seamless integration, intuitive design, and robust real-time analytics. It empowers businesses to streamline operations, enhance productivity, and drive informed decision-making effortlessly.</SubTitle>
                    {featuresData.map((feature, index) => (
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
            </Container>
        </>
    );
};

export default FeatureCard;
