import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { aboutus_data, industriesDataList } from '../../utils/constants';

const StyledContainer = styled(Container)`
  padding: 20px;
  background: #ffffff;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  border-radius: 8px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const IndustryCount = styled.a`
  font-size: 16px;
  color: #e85600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const IndustryCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 50px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  background: #fff;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 80px;
    border: 1px solid var(--Color-8-Color-8500, #A7A7A7);
    border-radius: 50%;
    margin-right: 16px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  color: #e85600;
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Arrow = styled.div`
  font-size: 24px;
  color: #e85600;
  margin-left: 16px;
  font-weight: bold;
`;

const AllIndustriesSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <Heading>{aboutus_data.allindustries.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.allindustries.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>

      {/* Loop through each industry list */}
      {[industriesDataList.agricultureList, industriesDataList.fmcgList , industriesDataList.oilandgasList].map((industryList, index) => (
        <StyledContainer className='mt-5 mb-5' key={index}>
          <Row className="justify-content-between align-items-center">
            <Col>
              <Header>{index === 0 ? "Agriculture to Electronic Industries" : "FMCG to Metal Fabrication Industry"  }</Header>
            </Col>
            <Col className="d-flex justify-content-end">
              <IndustryCount href="#">{industryList.length} Industries</IndustryCount>
            </Col>
          </Row>
          <Row>
            {industryList.map((industry) => (
              <Col md={6} key={industry.id}>
                <IndustryCard>
                  <IconWrapper>
                    <Icon src={industry.icon} alt={industry.title} />
                  </IconWrapper>
                  <CardContent>
                    <Title className='mb-3'>{industry.title}</Title>
                    <Description className='mb-2'>{industry.description}</Description>
                  </CardContent>
                  <Arrow>&#x2192;</Arrow>
                </IndustryCard>
              </Col>
            ))}
          </Row>
        </StyledContainer>
      ))}
    </>
  );
};

export default AllIndustriesSection;
