import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ContentColumn, Section } from '../IndustryPage';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { expoDetails } from '../../utils/constants';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css"; 
import "lightgallery/css/lg-fullscreen.css"; 
import "lightgallery/css/lg-share.css"; 
import "lightgallery/css/lg-rotate.css"; 
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen"; 
import lgShare from "lightgallery/plugins/share"; 
import lgRotate from "lightgallery/plugins/rotate"; 

const FlippedImage = styled.img`
  transition: transform 0.2s ease-in-out; 
  cursor: pointer;
  border-radius: 8px; 
  
  &:hover {
    transform: scale(1.02); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
`;

const FixedSizeImage = styled.img`
  width: 100%; 
  max-width: 1296px; 
  height: 444px; 
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 992px) {
    height: auto; 
  }
`;

// const ResponsiveText = styled.p`
//   font-size: 1.25rem; /* Default size */
//   margin: 0;

//   @media (max-width: 992px) {
//     font-size: 1rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 0.875rem;
//   }
// `;

// const ResponsiveIcon = styled.div`
//   font-size: 1.5rem; /* Default size */
//   display: flex;
//   align-items: center;

//   @media (max-width: 992px) {
//     font-size: 1.25rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const ResponsiveRow = styled(Row)`
//   @media (max-width: 768px) {
//     text-align: left;
//     justify-content: flex-start;
//   }
//   @media (min-width: 769px) {
//     text-align: center;
//     justify-content: center;
//   }
// `;

const ResponsiveText = styled.p`
  font-size: 1.25rem; /* Default size */
  margin: 0;

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ResponsiveIcon = styled.div`
  font-size: 1.5rem; /* Default size */
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ResponsiveRow = styled(Row)`
  @media (min-width: 992px) {
    justify-content: center; /* Center alignment for large screens */
    display: flex;
    align-items: center;
  }

  @media (max-width: 991px) {
    justify-content: flex-start; /* Start alignment for smaller screens */
    text-align: left;
  }
`;

const ExpoDetail = () => {
  const { id } = useParams();
  const expo = expoDetails[id]; 

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  if (!expo) {
    return (
      <div className='text-center'>
        <h1>Expo not found!</h1>
      </div>
    );
  }

  const openModal = (index) => {};

  return (
    <>
      {/* <Section className='text-center'>
        <Container>
          <Row>
            <h1 className='fw-bold'>{expo.title}</h1>
            <div className='d-flex justify-content-center align-items-center my-2'>
              <FaMapMarkerAlt className='fs-6'/>
              <p className='fs-4 fs-md-6 m-0 text-start'>{expo.venue}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2 my-2'>
              <FaCalendar className='fs-6'/>
              <p className='fs-4 m-0 text-start'>{expo.date}</p>
            </div>
          </Row>
        </Container>
      </Section> */}

{/* <Section className='text-center'>
        <Container>
          <ResponsiveRow className="flex-column flex-md-row">
            <h1 className="fw-bold">{expo.title}</h1>
            <div className="d-flex align-items-center gap-2 my-2">
              <ResponsiveIcon>
                <FaMapMarkerAlt />
              </ResponsiveIcon>
              <ResponsiveText>{expo.venue}</ResponsiveText>
            </div>
            <div className="d-flex align-items-center gap-2 my-2">
              <ResponsiveIcon>
                <FaCalendar />
              </ResponsiveIcon>
              <ResponsiveText>{expo.date}</ResponsiveText>
            </div>
          </ResponsiveRow>
        </Container>
      </Section> */}

<Section>
        <Container>
          <ResponsiveRow>
            <h1 className="fw-bold">{expo.title}</h1>
            <div className="d-flex justify-center align-items-center gap-2 my-2">
              <ResponsiveIcon>
                <FaMapMarkerAlt />
              </ResponsiveIcon>
              <ResponsiveText>{expo.venue}</ResponsiveText>
            </div>
            <div className="d-flex justify-center align-items-center gap-2 my-2">
              <ResponsiveIcon>
                <FaCalendar />
              </ResponsiveIcon>
              <ResponsiveText>{expo.date}</ResponsiveText>
            </div>
          </ResponsiveRow>
        </Container>
      </Section>

      <Container>
        <Row>
          <ContentColumn md={12} className='mt-4'>
            {/* First two images taking fixed size */}
            <LightGallery
              onInit={onInit}
              speed={500}
              download={false}  
              plugins={[
                lgThumbnail,
                lgZoom,
                lgFullscreen,
                lgShare,
                lgRotate
              ]}>
              {expo.images.slice(0, 2).map((img, index) => (
                <a href={img} key={index}>
                  <FixedSizeImage
                    src={img}
                    alt={expo.title}
                    className="mb-2"
                    onClick={() => openModal(index)}
                  />
                </a>
              ))}
            </LightGallery>

            {/* Remaining images in a row with flip effect */}
            <Row>
              {expo.images.slice(2).map((img, index) => (
                <Col md={4} key={index + 2} className='mb-3'>
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    download={false}  
                    plugins={[
                      lgThumbnail,
                      lgZoom,
                      lgFullscreen,
                      lgShare,
                      lgRotate
                    ]}>
                    <a href={img} key={index}>
                      <FlippedImage
                        src={img}
                        alt={expo.title}
                        className="w-100"
                        onClick={() => openModal(index + 2)}
                      />
                    </a>
                  </LightGallery>
                </Col>
              ))}
            </Row>
          </ContentColumn>
        </Row>
      </Container>
    </>
  );
};

export default ExpoDetail;