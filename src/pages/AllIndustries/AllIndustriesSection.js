// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
// import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
// import { aboutus_data, industriesDataList } from '../../utils/constants';
// import { FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// const StyledContainer = styled(Container)`
//   padding: 20px;
//   background: #ffffff;
//   box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
//   border-radius: 8px;
//   // max-width: 100%; /* Ensure full width */
// `;

// const Header = styled.h2`
//   font-size: 24px;
//   font-weight: 600;
//   text-align: left;
//   margin-bottom: 10px;

//   @media (max-width: 992px) {
//     font-size: 20px; /* Smaller font size for mobile */
//   }
// `;

// const IndustryCount = styled.a`
//   font-size: 16px;
//   color: #e85600;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }

//   @media (max-width: 992px) {
//     font-size: 14px; /* Smaller font size for mobile */
//   }
// `;

// const IndustryCard = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 16px;
//   border: 1px solid #ddd;
//   border-radius: 100px;
//   margin-bottom: 16px;
//   transition: box-shadow 0.2s ease-in-out;
//   background: #fff;
//   flex-direction: row; /* Default layout for larger screens */
  
//   @media (max-width: 992px) {
//     padding:10px;
//     border-radius: 10px;
//   }

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 140px;
//   height: 80px;
//   border-radius: 50%;
//   margin-right: 16px;

//   @media (max-width: 992px) {
//     width: 100px; /* Smaller icon container on mobile */
//     height: 60px;
//     margin-right: 15px;
//     margin-bottom: 10px; /* Space between icon and text */
//   }
// `;

// const Icon = styled.img`
//   width: 50px;
//   height: 50px;
//   color: #e85600;
// `;

// const CardContent = styled.div`
//   flex-grow: 1;

//   @media (max-width: 992px) {
//     text-align: left; /* Left-align text on mobile */
//   }
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
//   margin: 0;

//   @media (max-width: 992px) {
//     font-size: 16px; /* Smaller font size for mobile */
//   }
// `;

// const Arrow = styled.div`
//   font-size: 20px;
//   color: #ef5226;
//   margin-left: 16px;
//   font-weight: bold;
//   cursor: pointer;

//   @media (max-width: 992px) {
//     margin-left: 0;
//     margin-top: 10px; /* Adjust for mobile view */
//   }
// `;

// const AllIndustriesSection = () => {
//   const navigate = useNavigate(); // Declare the hook here

//   const handleArrowClick = (link) => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth', // Smooth scrolling to the top
//     });
//     navigate(link); // Navigate directly using the link from the industry data
//   };

//   return (
//     <>
//       <Section>
//         <Container>
//           <Row>
//             <ContentColumn md={6}>
//               <Heading>{aboutus_data.allindustries.heading}</Heading>
//               <Divider />
//               <Description>{aboutus_data.allindustries.description}</Description>
//             </ContentColumn>
//           </Row>
//         </Container>
//       </Section>

//       {/* Loop through each industry list */}
//       {[industriesDataList.agricultureList, industriesDataList.fmcgList, industriesDataList.oilandgasList].map((industryList, index) => (
//         <StyledContainer className="mt-5 mb-5" key={index}>
//           <Row className="justify-content-between align-items-center">
//             <Col>
//               <Header>
//                 {index === 0
//                   ? 'Agriculture to Electronic Industries'
//                   : index === 1
//                   ? 'FMCG to Metal Fabrication Industry'
//                   : 'Oil and Gas Industry'}
//               </Header>
//             </Col>
//             <Col className="d-flex justify-content-end">
//               <IndustryCount href="#">{industryList.length} Industries</IndustryCount>
//             </Col>
//           </Row>
//           <Row>
//             {industryList.map((industry) => (
//               <Col md={6} key={industry.id}>
//                 <IndustryCard>
//                   <IconWrapper>
//                     <Icon src={industry.icon} alt={`${industry.title} icon`} />
//                   </IconWrapper>
//                   <CardContent>
//                     <Title className="mb-1">{industry.title}</Title>
//                     <Description className="mb-1">{industry.description}</Description>
//                   </CardContent>
//                   <Arrow onClick={() => handleArrowClick(industry.link)}>
//                     <FaArrowRight /> {/* Use the FaArrowRight icon here */}
//                   </Arrow>
//                 </IndustryCard>
//               </Col>
//             ))}
//           </Row>
//         </StyledContainer>
//       ))}
//     </>
//   );
// };

// export default AllIndustriesSection;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { aboutus_data, industriesDataList } from '../../utils/constants';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Styled Components
const StyledContainer = styled(Container)`
  padding: 20px;
  background: #ffffff;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  border-radius: 8px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

const IndustryCount = styled.a`
  font-size: 16px;
  color: #e85600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const IndustryCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 100px;
  margin-bottom: 16px;
  background: #fff;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 992px) {
    padding: 10px;
    border-radius: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 80px;
  margin-right: 16px;

  @media (max-width: 992px) {
    width: 100px;
    height: 60px;
    margin-right: 15px;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const CardContent = styled.div`
  flex-grow: 1;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const Arrow = styled.div`
  font-size: 20px;
  color: #ef5226;
  margin-left: 16px;
  cursor: pointer;

  @media (max-width: 992px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

// Helper Components
const IndustryHeader = ({ title, count }) => (
  <Row className="justify-content-between align-items-center">
    <Col>
      <Header>{title}</Header>
    </Col>
    <Col className="d-flex justify-content-end">
      <IndustryCount href="#">{count} Industries</IndustryCount>
    </Col>
  </Row>
);

const IndustryList = ({ industries, onArrowClick }) => (
  <Row>
    {industries.map((industry) => (
      <Col md={6} key={industry.id}>
        <IndustryCard>
          <IconWrapper>
            <Icon src={industry.icon} alt={`${industry.title} icon`} />
          </IconWrapper>
          <CardContent>
            <Title>{industry.title}</Title>
            <Description>{industry.description}</Description>
          </CardContent>
          <Arrow onClick={() => onArrowClick(industry.link)}>
            <FaArrowRight />
          </Arrow>
        </IndustryCard>
      </Col>
    ))}
  </Row>
);

// Main Component
const AllIndustriesSection = () => {
  const navigate = useNavigate();

  const handleArrowClick = (link) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(link);
  };

  const industrySections = [
    {
      title: 'Agriculture to Electronic Industries',
      list: industriesDataList.agricultureList,
    },
    {
      title: 'FMCG to Metal Fabrication Industry',
      list: industriesDataList.fmcgList,
    },
    {
      title: 'Oil and Gas Industry',
      list: industriesDataList.oilandgasList,
    },
  ];

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

      {industrySections.map(({ title, list }, index) => (
        <StyledContainer className="mt-5 mb-5" key={index}>
          <IndustryHeader title={title} count={list.length} />
          <IndustryList industries={list} onArrowClick={handleArrowClick} />
        </StyledContainer>
      ))}
    </>
  );
};

export default AllIndustriesSection;
