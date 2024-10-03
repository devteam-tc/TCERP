import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { aboutus_data , profileData } from '../../utils/constants';
import { Card } from 'react-bootstrap';
import ProfessionalExperience from './ProfessionalExperience';

const StyledCard = styled(Card)`
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const profiledescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const MdsProfile = () => {
    const { heading, description } = aboutus_data.mdsprofilecontent;

    return (
        <><><Section>
            <Container>
                <Row>
                    <ContentColumn md={6}>
                        <Heading>{heading}</Heading>
                        <Divider />
                        <Description>{description}</Description>
                    </ContentColumn>
                </Row>
            </Container>
        </Section><StyledCard>
                <Card.Body>
                    <Name>{profileData.name}</Name>
                    <profiledescription>{profileData.description}</profiledescription>
                </Card.Body>
            </StyledCard></><ProfessionalExperience /></>
    )
}
export default MdsProfile;