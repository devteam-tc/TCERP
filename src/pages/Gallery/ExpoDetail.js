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
      <Section className='text-center'>
        <Container>
          <Row>
            <h1 className='fw-bold'>{expo.title}</h1>
            <div className='d-flex justify-content-center align-items-center my-2'>
              <div><FaMapMarkerAlt className='fs-3'/></div>
              <p className='fs-4 fs-md-6 m-0 text-start'>{expo.venue}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2 my-2'>
              <div><FaCalendar className='fs-3'/></div>
              <p className='fs-4 m-0 text-start'>{expo.date}</p>
            </div>
          </Row>
        </Container>
      </Section>

      <Container>
        <Row>
          <ContentColumn md={12} className='mt-4'>
            {/* First two images taking fixed size */}
            <LightGallery
              onInit={onInit}
              speed={500}
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
