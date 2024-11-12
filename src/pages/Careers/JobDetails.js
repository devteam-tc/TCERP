import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from 'emailjs-com';  // Import EmailJS
import {  Description, Section } from '../IndustryPage';
import { FaBook, FaBriefcase, FaChair, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Perks from './Perks';
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
  background-size: 100% 100%;
  background-position: center;
  border-radius: 5px;
  padding: 8rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  @media (max-width: 992px) {
    padding: 2rem;
    background-repeat: no-repeat;
    background-image: none;
  }
`;

const FormBgContainer = styled.div`
  border-radius: 5px;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const SocialIcons = styled.div`
            
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #ff5722;
  font-size: 36px;
`;

const StyledFormControl = styled(Form.Control)`
  border-radius: 5px;
  height: 45px;
  &:focus {
    box-shadow: none;
    border-color: #ff5722;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ff5722;
  border-color: #ff5722;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    background-color: #e64a19;
    border-color: #e64a19;
  }
`;

const FileUpload = styled.div`
  border: 2px dashed #ff5722;
  padding: 20px;
  text-align: center;
  color: #ff5722;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // New state for file
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name); // Store the file name in state
    }
  };

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
        <div>
          <SectionTitle>Roles and Responsibilities</SectionTitle>
          <SectionContent>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </SectionContent>
        </div>
        <div style={{backgroundColor: '#E6F6FA', padding: '2rem', borderRadius: '10px', marginTop: '2rem'}}>
          <SectionTitle>Required Qualifications</SectionTitle>
          <SectionContent>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </SectionContent>
        </div>
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
                <Icon><FaCalendarAlt /></Icon>
                    <div>
                      <strong>Date posted</strong><br />
                        {(() => {
                          const date = job.postedDate.toDate();
                          return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                        })()}
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
            <div className="mt-4">
              <p>Share this job on:</p>

                <SocialIcons>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fs-3" style={{ marginRight: '10px', color: 'white' }} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="fs-3" style={{ marginRight: '10px', color: 'white' }} />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="fs-3" style={{ marginRight: '10px', color: 'white'  }} />
                    </a>
                </SocialIcons>

            </div>
        </JobHighlights>
        <DropCV>
                  <Header>
                      <Title>Drop Your CV</Title>
                  </Header>
                  <FormBgContainer>
                  <Form>
                      <Row>
                          <Col md={6}>
                              <Form.Group className="mb-3">
                                  <Form.Label>Full name</Form.Label>
                                  <StyledFormControl type="text" placeholder="John David" />
                              </Form.Group>
                          </Col>
                          <Col md={6}>
                              <Form.Group className="mb-3">
                                  <Form.Label>Your email *</Form.Label>
                                  <StyledFormControl type="email" placeholder="example@yourmail.com" />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                              <Form.Group className="mb-3">
                                  <Form.Label>Phone Number *</Form.Label>
                                  <StyledFormControl type="text" placeholder="Please Enter Your Phone Number" />
                              </Form.Group>
                          </Col>
                          <Col md={6}>
                              <Form.Group className="mb-3">
                                  <Form.Label>Location *</Form.Label>
                                  <StyledFormControl type="text" placeholder="Please Enter your Location" />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Form.Group className="mb-3">
                          <Form.Label>Cover Letter</Form.Label>
                          <br/>
                          <StyledFormControl as="textarea" placeholder="Hello there,I would like to talk about how to..." style={{ width: '100%', height: '200px', padding: '10px' }} />
                      </Form.Group>
                      {/* <FileUpload>
                          <p>Attach any files you feel would be useful</p>
                          <small>(doc, xls, pdf, txt and ppt files only, Max Size 2MB)</small>
                      </FileUpload> */}
                      <FileUpload>
                    <p>Attach any files you feel would be useful</p>
                    <label htmlFor="file-upload" style={{ cursor: 'pointer', color: '#ff5722', textDecoration: 'underline' }}>(doc, xls, pdf, txt and ppt files only, Max Size 2MB)</label>
                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
                    {selectedFile && <p>Selected file: {selectedFile}</p>}
                  </FileUpload>
                      <div className='text-center'>
                      <StyledButton type="submit" className="btn-block">Apply Now</StyledButton>
                      </div>
                  </Form>
                  </FormBgContainer>
        </DropCV>
        <Perks/>
      </Container>

    </div>
  );
};

export default JobDetails;
