// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // // import { db } from '../firebaseConfig';
// // import { db } from '../../firebase';
// // import { Container, Row, Col } from 'react-bootstrap';

// // const JobDetail = () => {
// //   const { jobId } = useParams();
// //   const [job, setJob] = useState(null);

// //   useEffect(() => {
// //     const fetchJobDetails = async () => {
// //       const jobDoc = await db.collection('jobPosts').doc(jobId).get();
// //       if (jobDoc.exists) {
// //         setJob(jobDoc.data());
// //       }
// //     };
// //     fetchJobDetails();
// //   }, [jobId]);

// //   if (!job) return <p>Loading...</p>;

// //   return (
// //     <Container>
// //       <Row>
// //         <Col>
// //           <h2>{job.title}</h2>
// //           <p><strong>Location:</strong> {job.location}</p>
// //           <p><strong>Experience:</strong> {job.experience}</p>
// //           <p><strong>Work Mode:</strong> {job.workMode}</p>
// //           <p>{job.description}</p>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default JobDetail;


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../firebase';
// import { Container, Row, Col } from 'react-bootstrap';

// const JobDetails = () => {
//   const { jobId } = useParams();
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       const jobRef = doc(db, 'jobOpenings', jobId);
//       const jobSnap = await getDoc(jobRef);
//       if (jobSnap.exists()) {
//         setJob(jobSnap.data());
//       }
//     };

//     fetchJobDetails();
//   }, [jobId]);

//   if (!job) return <p>Loading job details...</p>;

//   return (
//     <Container>
//       <Row>
//         <Col className="text-center">
//           <h1>{job.title}</h1>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Experience:</strong> {job.experience}</p>
//           <p><strong>Work Mode:</strong> {job.workMode}</p>
//           <p><strong>Job Description:</strong> {job.description}</p>
//           <p><strong>Roles and Responsibilities:</strong> {job.rolesAndResponsibilities}</p>
//           <p><strong>Qualifications:</strong> {job.qualifications}</p>
//           <p><strong>Highlights:</strong> {job.highlights}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default JobDetails;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faClock, faUsers, faArrowRight, faTrophy, faUserShield, faMoneyBillWave, faChartLine, faHandHoldingUsd, faGift, faTools, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';  // Import EmailJS


const Header = styled.header`
  background: linear-gradient(90deg, rgba(255,94,0,1) 0%, rgba(255,0,0,1) 100%);
  color: #ffffff;
  text-align: center;
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  color: #ff4d4d;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SectionContent = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const JobHighlights = styled.div`
  background-color: #ff4d4d;
  color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

const HighlightItem = styled.div`
  margin-bottom: 1rem;
`;

const DropCV = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Perks = styled.div`
  margin-top: 2rem;
`;


const JobDetails = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    coverLetter: '',
    file: null,
    fileBase64: '' // Store file in base64 format

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, file: e.target.files[0] });
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, file, fileBase64: reader.result.split(',')[1] });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, phone, coverLetter, fileBase64 } = formData;

    const templateParams = {
      fullname,
      email,
      phone,
      coverLetter,
      file: fileBase64, // Pass file as base64 to EmailJS
    };

    // Send email using EmailJS
    emailjs
      .send('service_fj9wi0o', 'template_z1grzln', templateParams, 'v6VpiooczQgoGx3mg')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your application has been submitted successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('There was an issue submitting your application. Please try again.');
        }
      );
  };

  return (
    <div>
      <Header>
        <Container>
          <h1>Product Manager</h1>
          <p>Seeking a proactive Product Manager adept in Upwork lead generation, with 7+ years of experience. Responsibilities include mastering Upwork, generating leads, securing projects, and nurturing client relationships. The ideal candidate thrives in both independent and team settings, possessing a keen interest in emerging technologies like Swift, Kotlin, Flutter, React Native, and AI.</p>
        </Container>
      </Header>

      <Container>
        <div>
          <SectionTitle>Roles and Responsibilities</SectionTitle>
          <SectionContent>
            <ul>
              <li>Employ online platforms for effective lead generation and project acquisition.</li>
              <li>Cultivate enduring client relationships to ensure satisfaction and retention.</li>
              <li>Contribute to shaping product strategy based on market insights.</li>
              <li>Collaborate cross-functionally to prioritize and plan product roadmaps effectively.</li>
              <li>Define clear requirements and specifications for new product features and enhancements.</li>
              <li>Conduct comprehensive market analysis to identify opportunities and competitive landscape.</li>
              <li>Monitor product performance metrics to iterate and improve product offerings.</li>
              <li>Communicate with stakeholders to align goals and expectations effectively.</li>
            </ul>
          </SectionContent>
        </div>

        <div>
          <SectionTitle>Required Qualifications</SectionTitle>
          <SectionContent>
            <ul>
              <li>Minimum of 7+ years of demonstrable experience as a Product Manager in the software/web services industry, with a track record of successful product launches and improvements.</li>
              <li>Proficiency in leveraging Upwork platform for lead generation, project acquisition, and client relationship management, with a clear understanding of its features and functionalities.</li>
              <li>Strong understanding of mobile and web development technologies, including Swift, Kotlin, Flutter, React Native, and familiarity with emerging AI technologies.</li>
              <li>Ability to think strategically and translate market trends and customer insights into actionable product strategies, roadmaps, and feature sets that drive growth and customer satisfaction.</li>
            </ul>
          </SectionContent>
        </div>

        <JobHighlights>
          <SectionTitle className="text-white">Job Highlights</SectionTitle>
          <HighlightItem><FontAwesomeIcon icon={faBriefcase} /> Work mode: Hybrid</HighlightItem>
          <HighlightItem><FontAwesomeIcon icon={faMapMarkerAlt} /> Unit No: 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad-500081.</HighlightItem>
          <HighlightItem><FontAwesomeIcon icon={faCalendarAlt} /> Date posted: 01-10-2024</HighlightItem>
          <HighlightItem><FontAwesomeIcon icon={faClock} /> Experience: 7+ year</HighlightItem>
          <HighlightItem><FontAwesomeIcon icon={faClock} /> Working Hours: 9 AM - 5 PM</HighlightItem>
          <HighlightItem><FontAwesomeIcon icon={faUsers} /> No. of Vacancy: 3</HighlightItem>
          <HighlightItem><a href="#"><FontAwesomeIcon icon={faArrowRight} /> View all jobs</a></HighlightItem>
        </JobHighlights>

        {/* <DropCV>
          <h2>Drop Your CV</h2>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Control type="text" placeholder="Full name *" defaultValue="John David" />
              </Col>
              <Col md={6}>
                <Form.Control type="email" placeholder="Your email *" defaultValue="example@mail.com" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Control type="text" placeholder="Phone Number *" />
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Location *" />
              </Col>
            </Row>
            <Form.Control as="textarea" rows={5} placeholder="Cover Letter *" defaultValue="My desire to work in Techcloud ERP is..." />
            <Form.Group>
              <Form.Label>Attach any files you feel would be useful (doc, xls, pdf, txt, jpg, png) Max size: 2MB</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button type="submit" className="btn">Apply Now</Button>
          </Form>
        </DropCV> */}

<DropCV>
        <h2>Drop Your CV</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Control 
                type="text" 
                placeholder="Full name *" 
                name="fullname" 
                value={formData.fullname}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Control 
                type="email" 
                placeholder="Your email *" 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Control 
                type="text" 
                placeholder="Phone Number *" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Control 
                type="text" 
                placeholder="Location *"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Form.Control 
            as="textarea" 
            rows={5} 
            placeholder="Cover Letter *" 
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
          />
          <Form.Group>
            <Form.Label>Attach your resume (doc, pdf)</Form.Label>
            <Form.Control 
              type="file" 
              name="file"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Button type="submit" className="btn">Apply Now</Button>
        </Form>
      </DropCV>

        <Perks>
          <h2>Perks Of Working With Techcloud ERP</h2>
          <Row>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faTrophy} />
              <p>Performance Appreciation Rewards</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faUserShield} />
              <p>Employee First Policy</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faMoneyBillWave} />
              <p>Leave Encashment</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faChartLine} />
              <p>Career Growth Opportunity</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faHandHoldingUsd} />
              <p>Competitive Salary Package</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faGift} />
              <p>Festival & Work Anniversary Celebration</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faTools} />
              <p>Access to the Latest Tools</p>
            </Col>
            <Col md={4} className="perk-item">
              <FontAwesomeIcon icon={faHandsHelping} />
              <p>Employee Assistance Programme</p>
            </Col>
          </Row>
        </Perks>
      </Container>

    </div>
  );
};

export default JobDetails;
