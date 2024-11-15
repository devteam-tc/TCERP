import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase'; // Firebase setup
import { getDocs, collection, addDoc } from 'firebase/firestore'; // Import addDoc for adding data
import { Section } from '../IndustryPage';
import Perks from './Perks';

const CurrentOpeningsSection = styled.section`
  text-align: center;
`;

// Your other styled components
const JobCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    height: 95%; // Makes cards fill available height within column
    max-width: 100%;
    min-height: 300px; // Set a minimum height for uniformity
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

// Additional styled components
const CustomJobAlertSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 5vh;
  
  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    margin-bottom: 1rem;
    color: #FF5200;
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  
`;

const StyledImage = styled.img`
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 768px) {
    border-radius: 0px; // Modify border-radius for mobile devices
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
    navigate(`/careers/${jobId}`);
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
          <h2 className='m-5'>Current Openings</h2>
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
                  <Button style={{backgroundColor: '#ef5226', border: 'none'}} onClick={() => handleApplyNow(job.id)}>Apply Now</Button>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </CurrentOpeningsSection>

      <Perks/>
      <CustomJobAlertSection>
        <Container>
          <Row style={{boxShadow:'rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px', borderRadius: '10px'}}>
            <Col md={5} className='p-0'>
              <StyledImage src="https://storage.googleapis.com/a1aa/image/StViV5aM4pLiCNRrd1IiukR76pZRTzpUnZefOsfX0Nz8W0bnA.jpg" alt="People walking in business attire"/>
            </Col>
            <Col md={7} style={{padding: '20px', marginTop: '2vh'}}> 
              <h1>Seeking A New Role? <br/><span>Create A Custom </span> <br/> <span>Job Alert Now!</span></h1>
              <Form onSubmit={handleAlertSubmit} >
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
                <Button type="submit" style={{backgroundColor: '#EF5226', border: 'none'}}>Apply Now</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </CustomJobAlertSection>
      
      {/* PerksSection as before */}
    </div>
  );
};

export default CareersList;