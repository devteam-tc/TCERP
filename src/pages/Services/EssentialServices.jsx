// import React from "react";
// import styled from "styled-components";
// import { Container, Row, Col } from "react-bootstrap";
// import { essentialServicesData } from "../../utils/constants";
// import { Title } from "../Home/CardSection";

// const SectionWrapper = styled.div`
//   padding: 50px 0;
//   color: white;
//   text-align: center;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 24px;
//   font-weight: 500;
//   color: #000;
//   margin-bottom: 40px;
// `;

// const CardWrapper = styled.div`
//   border: 1px solid #0B0A0A;
//   padding: 20px;
//   border-radius: 8px;
//   margin-bottom: 30px;
//   text-align: left;
//   transition: transform 0.3s ease;
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: end;
//   margin-bottom: 10px; /* Space between title and description */
// `;

// const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const CardTitle = styled.h4`
//   font-size: 18px;
//   font-weight: 600;
//   color: #000;
//   margin-left: 15px; /* Space between icon and title */
// `;

// const CardText = styled.p`
//   font-weight: 400;
//   line-height: 21px;
//   letter-spacing: 0.01em;
//   text-align: left;
//   color: #393939;
//   margin-top: 10px; /* Margin between title and description */
// `;

// const CardImage = styled.img`
//   width: 40px; /* Adjust width as needed */
//   height: 40px; /* Adjust height as needed */
// `;

// const EssentialServices = () => {
//   return (
//     <SectionWrapper>
//       <Container>
//         <Title className="text-center pt-4 pt-md-0">
//           Essential Services for Modern Digital Marketing
//         </Title>
//         <SectionSubtitle>
//           Essential digital marketing services include SEO, social media, PPC,
//           content creation, email campaigns, and analytics for growth
//           optimization.
//         </SectionSubtitle>
//         <Row>
//           {essentialServicesData.map((service) => (
//             <Col md={6} key={service.id} className="d-flex">
//               <CardWrapper>
//                 <CardContent>
//                   {/* Card Header with Icon and Title */}
//                   <CardHeader>
//                     <CardImage src={service.image} alt={service.title} />
//                     <CardTitle>{service.title}</CardTitle>
//                   </CardHeader>
//                   {/* Description comes below */}
//                   <CardText>{service.description}</CardText>
//                 </CardContent>
//               </CardWrapper>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </SectionWrapper>
//   );
// };

// export default EssentialServices;
