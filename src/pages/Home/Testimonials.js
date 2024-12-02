// import React, { useState, useEffect } from "react";
// import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
// import styled from "styled-components";
// import { releavant } from "../../utils/constants";
// import axios from "axios";

// // Styled Components
// const GradientContainer = styled(Container)`
//   background-image: url(${releavant.testimonials_bg});
//    background-position: center;
//   background-size: contain; /* Ensure it covers the full background */
//   background-repeat: no-repeat;
//   width: 80%;
//   height: 50vh;
//   padding: 2%;
//   @media (max-width: 992px) {
//     background-size: contain; /* Adjust background size for responsiveness */
//     width: 100%;
//   }
// `;

// const StyledCard = styled(Card)`
//   border: none;
//   background-color: transparent;
// `;

// const StyledCardBody = styled(Card.Body)`
//   background-color: transparent !important;
//   padding: 2rem;
// `;

// const StyledCarouselItem = styled(Carousel.Item)`
//   .row {
//     justify-content: center;
//   }
//   .text-center.text-lg-start {
//     text-align: center;
//     @media (min-width: 992px) {
//       text-align: left;
//     }
//   }
// `;

// const CarouselWrapper = styled.div`
//   position: relative;
// `;

// const CarouselControls = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: sticky;
//   margin-top: 5vh;

//   button {
//     background: none;
//     width: 65px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #e93906;
//     border: none;
//     font-size: 3rem;
//     cursor: pointer;

//     &:disabled {
//       cursor: not-allowed;
//       opacity: 0.2;
//       background: none;
//     }
//   }
// `;

// export const Title = styled.h3`
//   font-size: 40px;
//   color: #ef5226;
//   // line-height: 60px;
//   margin-bottom: 20px;

//   @media screen and (max-width: 1024px) {
//     font-size: 32px;
//     margin-bottom: 30px;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 28px;
//     margin-bottom: 20px;
//   }
// `;

// const Testimonials = () => {
//   const [reviews, setReviews] = useState([]); // To store reviews
//   const [loading, setLoading] = useState(true); // To manage loading state
//   const [error, setError] = useState(null); // To handle errors
//   const [index, setIndex] = useState(0); // Carousel index state

//   const API_KEY = "7ac3c2f3d0msh1bffd5a34152d39p19a862jsnd4f765804488";
//   const URL =
//     "https://maps-data.p.rapidapi.com/reviews.php?business_id=0x3bcb93de3fc4f259%3A0xa1ff55809ce56a46&country=in&lang=en&limit=20&sort=Newest&place_id=ChIJWfLEP96TyzsRRmrlnIBV_6E";

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(URL, {
//           headers: {
//             "x-rapidapi-key": API_KEY,
//             "x-rapidapi-host": "maps-data.p.rapidapi.com",
//           },
//         });
//         setReviews(response.data.data.reviews); // Save reviews in state
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Failed to fetch reviews.");
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []); // Runs only once on component mount

//   const lastIndex = reviews.length - 1;

//   const handleSelect = (selectedIndex) => {
//     if (selectedIndex < 0) {
//       setIndex(lastIndex);
//     } else if (selectedIndex > lastIndex) {
//       setIndex(0);
//     } else {
//       setIndex(selectedIndex);
//     }
//   };

//   if (loading) {
//     return <Container>Loading reviews...</Container>;
//   }

//   if (error) {
//     return <Container>Error: {error}</Container>;
//   }

//   return (
    
//     <Container className="text-center w-100 w-md-50 p-md-5">
//   <Title className="text-center pt-4 pt-md-0">Testimonials</Title>
//   <GradientContainer>
//     <StyledCard>
//       <StyledCardBody className="px-4 py-md-5">
//         <CarouselWrapper className="bg-transparent">
//           <Carousel
//             activeIndex={index}
//             onSelect={handleSelect}
//             indicators={false}
//             controls={false}
//             variant="dark"
//           >
//             {reviews
//               .filter((review) => review.review_text && review.review_text.trim() !== "")
//               .map((review, idx) => (
//                 <StyledCarouselItem key={idx}>
//                   <Row className="d-flex justify-content-center">
//                     <Col
//                       md={12}
//                       className="text-center text-md-start mx-auto mx-lg-0 text-white"
//                       style={{
//                         backgroundColor: "rgba(255, 255, 255, 0.2)",
//                         backdropFilter: "blur(50px)",
//                         borderRadius: "20px",
//                         border: "20px solid rgba(255, 255, 255, 0.3)",
//                         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                         height: "auto",
//                         padding: "2%",
//                         width: window.innerWidth >= 992 ? "65%" : "100%",
//                       }}
//                     >
//                       <p
//                         className="mb-0 pd-3 text-black w-75 m-auto"
//                         style={{
//                           color: "#3F3D56",
//                           height: '80px',
//                           overflowY: 'auto',
//                           scrollbarWidth: "thin", // For Firefox, enables a thin scrollbar
//                           scrollbarColor: "#ef5226 transparent", // For Firefox, colors the scrollbar
                          
//                         }}
//                       >
//                         {review.review_text}
//                       </p>
//                       <CarouselControls>
//                         <button
//                           onClick={() => handleSelect(index - 1)}
//                           disabled={index === 0}
//                         >
//                           &#8592;
//                         </button>
//                         <div className="d-flex flex-column justify-content-center align-items-center">
//                           <h4 className="mb-0 mt-3 fs-4 fs-md-3 text-black">
//                             {review.user_name || "Anonymous"}
//                           </h4>
//                         </div>
//                         <button
//                           onClick={() => handleSelect(index + 1)}
//                           disabled={index === lastIndex}
//                         >
//                           &#8594;
//                         </button>
//                       </CarouselControls>
//                     </Col>
//                   </Row>
//                 </StyledCarouselItem>
//               ))}
//           </Carousel>
//         </CarouselWrapper>
//       </StyledCardBody>
//     </StyledCard>
//   </GradientContainer>
// </Container>

//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { releavant } from "../../utils/constants";
import axios from "axios";

// Styled Components
const GradientContainer = styled(Container)`
  background-image: url(${releavant.testimonials_bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 50vh;
  padding: 2%;
  @media (max-width: 992px) {
    background-size: contain;
    width: 100%;
  }
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

export const Title = styled.h3`
  font-size: 40px;
  color: #ef5226;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  const API_KEY = "7ac3c2f3d0msh1bffd5a34152d39p19a862jsnd4f765804488";
  const URL =
    "https://maps-data.p.rapidapi.com/reviews.php?business_id=0x3bcb93de3fc4f259%3A0xa1ff55809ce56a46&country=in&lang=en&limit=20&sort=Newest&place_id=ChIJWfLEP96TyzsRRmrlnIBV_6E";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "maps-data.p.rapidapi.com",
          },
        });
        setReviews(response.data.data.reviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch reviews.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleSelect = (selectedIndex) => {
    if (selectedIndex < 0) {
      setIndex(reviews.length - 1); // Loop to the last review
    } else if (selectedIndex >= reviews.length) {
      setIndex(0); // Loop back to the first review
    } else {
      setIndex(selectedIndex);
    }
  };

  if (loading) {
    return <Container>Loading reviews...</Container>;
  }

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  return (
    <Container className="text-center w-100 w-md-50 p-md-5">
      <Title className="text-center pt-4 pt-md-0">Testimonials</Title>
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
                {reviews
                  .filter(
                    (review) =>
                      review.review_text && review.review_text.trim() !== ""
                  )
                  .map((review, idx) => (
                    <StyledCarouselItem key={idx}>
                      <Row className="d-flex justify-content-center">
                        <Col
                          md={12}
                          className="text-center text-md-start mx-auto mx-lg-0 text-white"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(50px)",
                            borderRadius: "20px",
                            border: "20px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            height: "auto",
                            padding: "2%",
                            width:
                              window.innerWidth >= 992 ? "65%" : "100%",
                          }}
                        >
                          <p
                            className="mb-0 pd-3 text-black w-75 m-auto"
                            style={{
                              color: "#3F3D56",
                              height: "80px",
                              overflowY: "auto",
                              scrollbarWidth: "thin",
                              scrollbarColor: "#ef5226 transparent",
                            }}
                          >
                            {review.review_text}
                          </p>
                          <CarouselControls>
                            <button
                              onClick={() => handleSelect(index - 1)}
                            >
                              &#8592;
                            </button>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <h4 className="mb-0 mt-3 fs-4 fs-md-3 text-black">
                                {review.user_name || "Anonymous"}
                              </h4>
                            </div>
                            <button
                              onClick={() => handleSelect(index + 1)}
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
