import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ContentColumn, Section } from '../IndustryPage';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { expoDetails } from '../../utils/constants';

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css"; // Import fullscreen plugin
import "lightgallery/css/lg-share.css"; // Import share plugin
import "lightgallery/css/lg-rotate.css"; // Import rotate plugin

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen"; // Fullscreen plugin
import lgShare from "lightgallery/plugins/share"; // Share plugin
import lgRotate from "lightgallery/plugins/rotate"; // Rotate plugin


const FlippedImage = styled.img`
  transition: transform 0.2s ease-in-out; /* Smooth transition for zoom effect */
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02); /* Zoom in when hovered */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
  }

  &:not(:hover) {
    transform: scale(1); /* Zoom out to original size */
  }
`;

const ExpoDetail = () => {
  const { id } = useParams();

  const expo = expoDetails[id]; // Use dynamic data from constants

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

  const openModal = (index) => {
  };

  return (
    <>
      <Section className='text-center'>
        <Container>
          <Row>
            <h1 className='fw-bold'>{expo.title}</h1>
            <div className='d-flex justify-content-center align-items-center my-2'>
              <div><FaMapMarkerAlt className='fs-3'/></div>
              <p className='fs-4 fs-md-6 m-0'>{expo.venue}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2 my-2'>
              <div><FaCalendar className='fs-3'/></div>
              <p className='fs-4 m-0'>{expo.date}</p>
            </div>
          </Row>
        </Container>
      </Section>

      <Container>
        <Row>
          <ContentColumn md={12} className='mt-4'>
            {/* First two images taking full width */}
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[
                lgThumbnail,
                    lgZoom,
                    lgFullscreen, // Add fullscreen plugin
                    lgShare,      // Add share plugin
                    lgRotate      // Add rotate plugin
              ]}>
            {expo.images.slice(0,2).map((img, index) => (
              <a href={img} key={index}>
              <img 
                key={index} 
                src={img} 
                alt={expo.title} 
                className="w-100 mb-2" 
                onClick={() => openModal(index)} 
                style={{ cursor: 'pointer' }} 
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
                          lgFullscreen, // Add fullscreen plugin
                          lgShare,      // Add share plugin
                          lgRotate      // Add rotate plugin
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
