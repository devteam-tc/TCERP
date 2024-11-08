// import React from 'react';
// import styled from 'styled-components';
// import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { TbExternalLink } from "react-icons/tb";
// import { ContentColumn, Heading, Section } from '../IndustryPage';

// // Styled Components
// const Header = styled.header`
//     background: linear-gradient(90deg, rgba(255,94,0,1) 0%, rgba(255,0,0,1) 100%);
//     color: #fff;
//     text-align: center;
//     padding: 2rem 0;

//     h1 {
//         font-size: 2.5rem;
//         margin: 0;
//     }
// `;

// const BlogPost = styled.div`
//     margin-bottom: 2rem;

//     img {
//         width: 100%;
//         height: auto;
//     }

//     h3 {
//         font-size: 1.5rem;
//         margin-top: 1rem;
//     }

//     p {
//         font-size: 1rem;
//         color: #666;
//     }

//     .tags a {
//         font-size: 0.875rem;
//         color: #007bff;
//         margin-right: 0.5rem;

//         &:hover {
//             text-decoration: underline;
//         }
//     }
// `;

// const Footer = styled.footer`
//     background-color: #f8f9fa;
//     padding: 2rem 0;
//     text-align: center;

//     h5 {
//         margin-bottom: 1rem;
//     }

//     .footer-links a {
//         color: #000;
//         margin-right: 1rem;

//         &:hover {
//             color: #007bff;
//         }
//     }
// `;

// const BlogList = () => {
//     return (
//         <div>
//             <Section>
//         <Container>
//           <Row>
//       <h1 className='fw-bold text-center'> Our Blogs</h1>
//           </Row>
//         </Container>
//       </Section>
//             <Container className="mt-5">
//                 <Row>
//                     <Col md={6}>
//                         <BlogPost>
//                             <Image src="https://storage.googleapis.com/a1aa/image/kpbJKw3HEy66P5kZPbMQ6R23jftTnZdgskUeUHlmUoxRZmtTA.jpg" alt="Finding the Right ERP to Integrate With Your Shopify Store" height={400} />
//                             <h3>
//                                 Finding the Right ERP to Integrate With Your Shopify Store
//                                 <i icon={TbExternalLink} />
//                             </h3>
//                             <p>
//                                 As your ecommerce business grows, managing operations becomes more complex. This is where Enterprise Resource Planning (ERP) systems come in...
//                             </p>
//                             <div className="tags">
//                                 <a href="#">E-Commerce</a>
//                                 <a href="#">Retail Industry</a>
//                                 <a href="#">Web Development</a>
//                             </div>
//                         </BlogPost>
//                     </Col>
//                     <Col md={6}>
//                         <BlogPost>
//                             <Image src="https://storage.googleapis.com/a1aa/image/muOmfDQVmo3CYKvzweKQulCltJUAtklE7BYOqxnnTGbYZmtTA.jpg" alt="Exploring the Essentials of ERP Functionality" height={400} />
//                             <h3>
//                                 Exploring the Essentials of ERP Functionality
//                                 <i icon={TbExternalLink} />
//                             </h3>
//                             <p>
//                                 Enterprise resource planning (ERP) software is one of the foundations of a company's technology stack...
//                             </p>
//                             <div className="tags">
//                                 <a href="#">E-Commerce</a>
//                                 <a href="#">Retail Industry</a>
//                                 <a href="#">Web Development</a>
//                             </div>
//                         </BlogPost>
//                     </Col>
//                 </Row>
//                 {/* Add more rows and blog posts as needed */}
//             </Container>
//         </div>
//     );
// }

// export default BlogList;



// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// // import { db } from './firebaseConfig';  // Adjust path as needed
// import { db, storage } from '../../firebase';
// import { collection, getDocs } from "firebase/firestore";
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import { TbExternalLink } from "react-icons/tb";

// // Styled Components (reused from your previous code)
// const Header = styled.header`
//     background: linear-gradient(90deg, rgba(255,94,0,1) 0%, rgba(255,0,0,1) 100%);
//     color: #fff;
//     text-align: center;
//     padding: 2rem 0;

//     h1 {
//         font-size: 2.5rem;
//         margin: 0;
//     }
// `;

// const BlogPost = styled.div`
//     margin-bottom: 2rem;
//     img {
//         width: 100%;
//         height: auto;
//     }
//     h3 {
//         font-size: 1.5rem;
//         margin-top: 1rem;
//     }
//     p {
//         font-size: 1rem;
//         color: #666;
//     }
//     .tags a {
//         font-size: 0.875rem;
//         color: #007bff;
//         margin-right: 0.5rem;
//         &:hover {
//             text-decoration: underline;
//         }
//     }
// `;

// const BlogList = () => {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             const querySnapshot = await getDocs(collection(db, "blogs"));
//             const blogsData = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setBlogs(blogsData);
//         };
//         fetchBlogs();
//     }, []);

//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <h1 className='fw-bold text-center'>Our Blogs</h1>
//                 </Row>
//             </Container>
//             <Container className="mt-5">
//                 <Row>
//                     {blogs.map(blog => (
//                         <Col md={6} key={blog.id}>
//                             <BlogPost>
//                                 <Image src={blog.image} alt={blog.title} height={400} />
//                                 <h3>{blog.title} <TbExternalLink /></h3>
//                                 <p>{blog.content.slice(0, 100)}...</p>
//                                 <div className="tags">
//                                     {blog.tags.map((tag, index) => (
//                                         <a href="#" key={index}>{tag}</a>
//                                     ))}
//                                 </div>
//                             </BlogPost>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default BlogList;


// import React from 'react';
// import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// const StyledContainer = styled(Container)`
//   color: #fff;
//   font-family: Arial, sans-serif;
//   padding-top: 30px;
// `;

// const StyledCard = styled(Card)`
// //   background-color: #111;
//   border: none;
//   margin-bottom: 30px;
// `;

// const StyledCardTitle = styled(Card.Title)`
//   font-size: 1.25rem;
//   font-weight: bold;
// `;

// const StyledCardText = styled(Card.Text)`
//   font-size: 0.875rem;
// `;

// const StyledBadge = styled(Badge)`
//   background-color: #e83e8c;
//   margin-right: 5px;

//   &:nth-child(2) {
//     background-color: #6f42c1;
//   }

//   &:nth-child(3) {
//     background-color: #007bff;
//   }
// `;

// const StyledCardLink = styled.a`
//   color: #fff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const App = () => {
//   return (
//     <StyledContainer>
//       <Row>
//         <Col md={6}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/xwFY1kXWA2L0AB2MxbprfR5AUeaGfp6xhUJro6jNPzdLusbnA.jpg"
//               alt="Hand drawing a network of connected nodes on a chalkboard"
//               height="400"
//               width="600"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 Finding the Right ERP to Integrate With Your Shopify Store
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 As your ecommerce business grows, managing operations becomes more complex. This is where Enterprise Resource Planning (ERP) systems come in. ERPs provide a complete solution for managing both simple and complex business processes, helping to drive and support your company's growth.
//               </StyledCardText>
//               <StyledBadge>E-Commerce</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//         <Col md={6}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/x780eZLdDTxddKWwD93COkUfeKb2e62I0fd9HnOCjXXY4yudC.jpg"
//               alt="Laptop screen displaying ERP software interface"
//               height="400"
//               width="600"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 Exploring the Essentials of ERP Functionality
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 Enterprise resource planning (ERP) software is one of the foundations of a company's technology stack. It supports critical functions for accounting, financial reporting, business intelligence (BI), and data analysis, among other enterprise requirements.
//               </StyledCardText>
//               <StyledBadge>E-Commerce</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/V9CwTm42qUqEPVC1JjfHtOcfla70Gyva1jk1mO9LjIfOusbnA.jpg"
//               alt="Man pulling a large ball labeled 'Technical Debt'"
//               height="600"
//               width="1200"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 Is Tech Debt Holding Your Company Back?
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 Tech debt is the gap between existing and optimal systems when decisions are made to take shortcuts, skip maintenance, and delay investments in technology solutions. Over time, that gap becomes large enough it becomes a roadblock to company performance and growth. The most famous example of tech debt is the Y2K incident, where to save time and space, programmers adopted the practice of using two digits for the year.
//               </StyledCardText>
//               <StyledBadge>E-Commerce</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/1jLkx2I6Hd7zANKHBJAyu2XMuf6ixTIymdXlfJORTnJEX2tTA.jpg"
//               alt="Handshake over a business document"
//               height="400"
//               width="600"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 The Strategic Advantage of Hiring an ERP Consultant
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 In this article, I'll explain why hiring an enterprise resource planning consultant is critical to ensuring the success of your ERP implementation project. Drawing on my 30+ years of experience as an ERP provider and publisher.
//               </StyledCardText>
//               <StyledBadge>HRMS</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//         <Col md={6}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/IUZSPx7yMJLIH5zbEuvfQkoCX7T9fdQ3tuz3aL81G8CBX2tTA.jpg"
//               alt="Charts and graphs on a desk"
//               height="400"
//               width="600"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 How to Know You Need An ERP
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 Looking to assess whether your business could benefit from an ERP system? Look no further! We've compiled a comprehensive guide to help you identify the three key indicators that suggest it's time to implement a tailored ERP solution.
//               </StyledCardText>
//               <StyledBadge>E-Commerce</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <StyledCard>
//             <Card.Img
//               variant="top"
//               src="https://storage.googleapis.com/a1aa/image/fUMwBQeo7MiQdkwWEezpLkqievmJpm4hKBCGwHCUvYlncZ3OB.jpg"
//               alt="Group of people discussing in a modern kitchen"
//               height="600"
//               width="1200"
//             />
//             <Card.Body>
//               <StyledCardTitle>
//                 Building a Resilient Enterprise with Composable ERP Solutions
//                 <StyledCardLink href="#">
//                   <i className="fas fa-external-link-alt"></i>
//                 </StyledCardLink>
//               </StyledCardTitle>
//               <StyledCardText>
//                 Unlike traditional systems, a composable ERP strategy allows businesses to assemble a bespoke ERP system that addresses specific challenges and scales according to evolving needs. In this article, we will explore the real-life stories of composable ERP solutions, spotlighting how they resolve common pain points in enterprise management.
//               </StyledCardText>
//               <StyledBadge>E-Commerce</StyledBadge>
//               <StyledBadge>Retail Industry</StyledBadge>
//               <StyledBadge>Web Development</StyledBadge>
//             </Card.Body>
//           </StyledCard>
//         </Col>
//       </Row>
//     </StyledContainer>
//   );
// };

// export default App;


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { blogCardData } from '../../utils/constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContentColumn, Heading, Section } from '../IndustryPage';

const StyledContainer = styled(Container)`
  color: #fff;
  font-family: Arial, sans-serif;
  padding-top: 30px;
`;

const StyledCard = styled(Card)`
  border: none;
  margin-bottom: 30px;
`;

const StyledCardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledCardText = styled(Card.Text)`
  font-size: 0.875rem;
`;

const StyledCardLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <>
    <Section>
      <Container>
        <Row>
            <h1 className="fw-bold text-center">Our Blogs</h1>
        </Row>
      </Container>
    </Section>
    <StyledContainer>
      <Row>
        {blogCardData.map((card, index) => (
          <Col md={index % 3 === 0 ? 12 : 6} key={index}>
            <StyledCard>
              <Card.Img variant="top" src={card.imgSrc} alt={card.title} height={index % 3 === 0 ? 600 : 400} />
              <Card.Body>
                <StyledCardTitle>
                  {card.title}
                  <StyledCardLink href={card.link}>
                    <i className="fas fa-external-link-alt"></i>
                  </StyledCardLink>
                </StyledCardTitle>
                <StyledCardText>{card.description}</StyledCardText>
                {card.tags.map((tag, tagIndex) => (
                  <Button key={tagIndex} style={{ backgroundColor: tag.color || 'green', marginRight: '5px' }}>
                    {tag.label}
                  </Button>
                ))}
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </StyledContainer>
    </>
  );
};

export default App;
