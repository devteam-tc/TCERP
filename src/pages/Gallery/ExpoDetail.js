import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap'; // Import Spinner
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase'; // Adjust the import path to your firebase config file
import styled from 'styled-components';
import { ContentColumn, Section } from '../IndustryPage';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
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
  const { id } = useParams(); // Dynamic ID from route
  const [expo, setExpo] = useState(null);
  const [images, setImages] = useState([]); // For fetched images

  useEffect(() => {
    const fetchExpoDetails = async () => {
      try {
        // Fetch document data
        const docRef = doc(db, 'expoDetails', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setExpo(data);

          // Fetch images dynamically
          if (data.imagesFolder) {
            const folderRef = ref(storage, data.imagesFolder);
            const fileList = await listAll(folderRef);
            const imageUrls = await Promise.all(
              fileList.items.map((item) => getDownloadURL(item))
            );
            setImages(imageUrls);
            console.log('Fetched expo images:', imageUrls);
          }
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching expo details:', error);
      }
    };

    fetchExpoDetails();
  }, [id]);

  if (!expo) {
    return (
      <div className="text-center h-full">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
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
          <ContentColumn md={12} className="mt-4">
            <LightGallery
              speed={500}
              download={false}  
              plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgRotate]}>
              {images.slice(0, 2).map((img, index) => (
                <a href={img} key={index}>
                  <FixedSizeImage 
                    src={img} 
                    alt={`${expo.title} Image ${index + 1}`} // Unique alt tag
                    className="mb-2" 
                  />
                </a>
              ))}
            </LightGallery>

            <Row>
              {images.slice(2).map((img, index) => (
                <Col md={4} key={index + 2} className="mb-3">
                  <LightGallery
                    speed={500}
                    download={false}  
                    plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgRotate]}>
                    <a href={img} key={index}>
                      <FlippedImage 
                        src={img} 
                        alt={`${expo.title} Image ${index + 3}`} // Unique alt tag
                        className="w-100" 
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
