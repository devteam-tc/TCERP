import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {  Description, Section } from '../IndustryPage';
import { FaBook, FaBriefcase, FaChair, FaClock, FaFacebook, FaLinkedin, FaWhatsapp, } from 'react-icons/fa6';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Perks from './Perks';
import JobApplicationForm from './Test';
const SectionTitle = styled.h2`
  color: #FF5200;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SectionContent = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  padding-left: 2rem;
`;

const JobHighlights = styled.div`
  background-color: #D94B23;
  color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

const DropCV = styled.div`
  background-image: url(${require('../../assets/formBg.png')});
  // background-size: 100% 100%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  padding: 8rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  @media (max-width: 992px) {
    padding: 0rem;
    background-repeat: no-repeat;
    background-image: none;
    box-shadow:none;
  }
`;

const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const SocialIcons = styled.div`


    padding-left: 1vw;
            
  i {
    font-size: 32px;
    }
`;

const CustomButton = styled.button`
  /* Custom button styles */
  padding: 10px 20px;
  background-color: transparent; /* Set background color */
  border: 2px solid white; /* Set border color */
  border-radius: 4px;
  cursor: pointer;

  /* Style the Link inside the button */
  a {
    color: white; /* Set default link color to white */
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: black; /* Change color to orange on hover, focus, or active */
  }
}
`;
const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      const jobRef = doc(db, 'jobOpenings', jobId);
      const jobSnap = await getDoc(jobRef);
      if (jobSnap.exists()) {
        setJob(jobSnap.data());
      }
    };
    fetchJobDetails();
  }, [jobId]);

  if (!job) return <p>Loading job details...</p>;
  
  const currentUrl = window.location.href;

  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`Check out this job: ${currentUrl}`)}`;
  
  return (
    <div>
      <Section>
        <Container>
          <Row className='text-center'>
              <h1 className='fw-semibold'>{job.title}</h1>
              <Description>{job.description}</Description>
          </Row>
        </Container>
      </Section>

      
        <Container>
          <SectionTitle>Roles and Responsibilities</SectionTitle>
          <SectionContent>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </SectionContent>
        </Container>
        <div style={{backgroundColor: '#E6F6FA', padding: '2rem', marginTop: '2rem'}}>
          <Container>
          <SectionTitle>Required Qualifications</SectionTitle>
          <SectionContent>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </SectionContent>
          </Container>
        </div>
        <Container>
        <JobHighlights>
          <h2>Job Highlights</h2>
            <Row>
              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                  <Icon><FaBriefcase /></Icon>
                  <div>
                  <strong>Work mode</strong><br />
                    {job.workMode}
                  </div>
              </Col>
              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                  <Icon><FaMapMarkerAlt /></Icon>
                    <div>
                      {job.location}
                    </div>
              </Col>

              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                <Icon><FaBook /></Icon>
                  <div>
                    <strong>Preferred Candidates</strong><br />
                    {job.prefferedCandidates}
                  </div>
              </Col>

              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                <Icon><FaBook /></Icon>
                  <div>
                    <strong>Experience :</strong><br />
                      {job.experience}
                  </div>
              </Col>
              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                <Icon><FaClock /></Icon>
                  <div>
                    <strong>Working Hours</strong><br />
                      10 AM - 7 PM
                  </div>
              </Col>
              <Col md={4} className="mb-3 mt-3 d-flex align-items-center">
                <Icon><FaChair /></Icon>
                  <div>
                    <strong>No.of Vacancy :</strong><br />
                      {job.vacancies}
                  </div>
              </Col>
            </Row>
            <div className="mt-4">
              <CustomButton><Link to="/careers" onClick={scrollToTop}>View all jobs</Link></CustomButton>
            </div>
            <div className="mt-4 d-flex align-items-center">
              <p className='m-0'>Share this job on:</p>

              <SocialIcons>
              <a href={linkedinShare} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="fs-3" style={{ marginRight: '10px', color: 'white' }} />
              </a>
              <a href={facebookShare} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="fs-3" style={{ marginRight: '10px', color: 'white' }} />
              </a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="fs-3" style={{ marginRight: '10px', color: 'white' }} />
              </a>
            </SocialIcons>

            </div>
        </JobHighlights>
        </Container>
      <DropCV>
        <Container>
        <JobApplicationForm jobTitle={job.title} />
        </Container>
      </DropCV>
        <Perks/>
    </div>
  );
};

export default JobDetails;