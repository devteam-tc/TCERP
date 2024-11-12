
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase'; // Firebase setup
import { getDocs, collection, addDoc } from 'firebase/firestore'; // Import addDoc for adding data
import { Section } from '../IndustryPage';
import Perks from './Perks';
const CurrentOpeningsSection = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

// Your other styled components
const JobCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Additional styled components
const CustomJobAlertSection = styled.section`

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #FF5200;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
`;


const CareersList = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [alertData, setAlertData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });
  const navigate = useNavigate();

  // Fetching jobs from Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      const jobCollection = collection(db, 'jobOpenings');
      const jobSnapshot = await getDocs(jobCollection);
      const jobs = jobSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobOpenings(jobs);
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  const handleAlertChange = (e) => {
    const { name, value, files } = e.target;
    setAlertData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAlertSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add alert data to Firestore
      const jobAlertCollection = collection(db, 'jobAlerts');
      await addDoc(jobAlertCollection, {
        name: alertData.name,
        email: alertData.email,
        phone: alertData.phone,
        position: alertData.position,
        resume: alertData.resume ? alertData.resume.name : '', // Optional: handle file storage separately if needed
      });

      alert('Job alert created successfully!');
      setAlertData({ name: '', email: '', phone: '', position: '', resume: null });
    } catch (error) {
      console.error("Error adding job alert: ", error);
      alert('Error creating job alert. Please try again.');
    }
  };

  return (
    <div>
      <Section>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Join Our Team</h1>
              <p>Join Our Dynamic Team And Be Part Of An Innovative Company. Shape The Future, Grow Professionally, And Inspire Success!</p>
            </Col>
          </Row>
        </Container>
      </Section>

      <CurrentOpeningsSection>
        <Container>
          <h2>Current Openings</h2>
          <p>Discover our current job openings and embark on a rewarding career journey with us. Your next opportunity awaits!</p>
          <Row>
            {jobOpenings.map((job) => (
              <Col md={4} key={job.id}>
                <JobCard>
                  <div className='d-flex align-items-center'>
                    <img src={job.imageURL} height="100" alt={`${job.title} Icon`} />
                    <h5>{job.title}</h5>
                  </div>
                  <div className='text-start'>
                  <p className='fs-6'><strong>Experience:</strong> {job.experience}</p>
                  <p className='fs-6'><strong>Location:</strong> {job.location}</p>
                  <p className='fs-6'><strong>Work Mode:</strong> {job.workMode}</p>
                  </div>
                  <Button onClick={() => handleApplyNow(job.id)}>Apply Now</Button>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </CurrentOpeningsSection>

      <CustomJobAlertSection>
        <Container>
          <Row  style={{backgroundColor: '#E6F6FA'}}>
            <Col md={6}>
              <img src="https://storage.googleapis.com/a1aa/image/StViV5aM4pLiCNRrd1IiukR76pZRTzpUnZefOsfX0Nz8W0bnA.jpg" alt="People walking in business attire"/>
            </Col>
            <Col md={6} style={{padding: '20px', margin: 'auto'}}>
              <h3>Seeking A New Role? Create A Custom Job Alert Now!</h3>
              <Form onSubmit={handleAlertSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={alertData.name}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="email"
                  placeholder="E-mail *"
                  name="email"
                  value={alertData.email}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Phone number *"
                  name="phone"
                  value={alertData.phone}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Applying for Position (optional)"
                  name="position"
                  value={alertData.position}
                  onChange={handleAlertChange}
                />
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleAlertChange}
                />
                <Button type="submit" style={{backgroundColor: '#EF5226', border: 'none'}}>Apply Now</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </CustomJobAlertSection>
      <Perks/>
      {/* PerksSection as before */}
    </div>
  );
};

export default CareersList;