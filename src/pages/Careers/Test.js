import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormContainer = styled.div`
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const JobApplicationForm = ({jobTitle}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    totalExperience: '', // Added Total Years of Work Experience
    experienceList: [{ from: '', to: '', company: '', responsibilities: '' }], // Added Company Name
    skills: [],
    currentCTC: '',
    expectedCTC: '',
  });

  const [skillInput, setSkillInput] = useState('');

  const handleDateChange = (index, date, name) => {
    const updatedExperienceList = [...formData.experienceList];
    updatedExperienceList[index][name] = date;
    setFormData({ ...formData, experienceList: updatedExperienceList });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = [...formData.experienceList];
    updatedExperienceList[index][name] = value;
    setFormData({ ...formData, experienceList: updatedExperienceList });
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experienceList: [...prevData.experienceList, { from: '', to: '', company: '', responsibilities: '' }],
    }));
  };

  const removeExperience = (index) => {
    const updatedExperienceList = formData.experienceList.filter((_, i) => i !== index);
    setFormData({ ...formData, experienceList: updatedExperienceList });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skillInput.trim()],
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };

  const sendEmail = async (templateParams) => {
    try {
      await emailjs.send('service_fj9wi0o', 'template_tm4e4d2', templateParams, 'v6VpiooczQgoGx3mg');
      alert('Email sent successfully!');
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const structuredData = {
      ...formData,
      experienceList: JSON.stringify(formData.experienceList),
      skills: formData.skills.join(', '),
      AppliedRole: jobTitle,  // Include job title here for Firebase
    };

    try {
      // Store in Firebase
      await addDoc(collection(db, 'jobApplications'), structuredData);
      // Prepare data for EmailJS
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        currentCTC: formData.currentCTC,
        expectedCTC: formData.expectedCTC,
        totalExperience: formData.totalExperience,
        AppliedRole: jobTitle, // Include job title here for EmailJS
        experienceList: formData.experienceList
        .map(
          (exp, index) =>
            `${index + 1}. From: ${exp.from ? new Date(exp.from).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} ` +
            `To: ${exp.to ? new Date(exp.to).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} | ` +
            `Company: ${exp.company} | Responsibilities: ${exp.responsibilities}`
        )
        .join('\n'),
        skills: formData.skills.join(', '),
      };
      await sendEmail(templateParams);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <FormContainer>
      <h3 className='text-center'>Job Application Form</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="fullName" className=' mt-3'>
              <Form.Label style={{ fontSize: '14px' }}>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" name="fullName" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email" className=' mt-3'>
              <Form.Label style={{ fontSize: '14px' }}>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="phone" className=' mt-3'>
              <Form.Label style={{ fontSize: '14px' }}>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" name="phone" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="education" className='mb-3 mt-3'>
              <Form.Label style={{ fontSize: '14px' }}>Education Level</Form.Label>
              <Form.Control as="select" name="education" onChange={handleChange} required>
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="totalExperience" className="mt-3">
          <Form.Label style={{ fontSize: '14px' }}>Total Years of Work Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter total years of experience"
            name="totalExperience"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <h4 style={{ marginTop: '1rem' }}>Work Experience</h4>
        <hr/>
        {formData.experienceList.map((exp, index) => (
          <div key={index} style={{ position: 'relative', marginBottom: '1rem', marginTop: '1rem', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '5px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            
            {index > 0 && (
              <Button
                className='mt-1 mb-3'
                size="md"
                onClick={() => removeExperience(index)}
                style={{ position: 'absolute', top: 0, right: 5, backgroundColor: '#ef5226', border: 'none' }}
              >
                -
              </Button>
            )}
            <Row>
              <Col>
              <Form.Group controlId={`company-${index}`}>
              <Form.Label style={{ fontSize: '14px' }}>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} required />
            </Form.Group></Col>
            </Row>
            <Row>
              <Col >
                <Form.Group controlId={`from-${index}`}>
                  <Form.Label style={{ fontSize: '14px' }}>From</Form.Label>
                  {/* <Form.Control type="date" name="from" value={exp.from} onChange={(e) => handleExperienceChange(index, e)} required /> */}
                  <DatePicker
                    selected={exp.from}
                    onChange={(date) => handleDateChange(index, date, 'from')}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    placeholderText="Select start date"
                    className="form-control m-lg-3"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`to-${index}`}>
                  <Form.Label style={{ fontSize: '14px' }}>To</Form.Label>
                  {/* <Form.Control type="date" name="to" value={exp.to} onChange={(e) => handleExperienceChange(index, e)} required /> */}
                  <DatePicker
                    selected={exp.to}
                    onChange={(date) => handleDateChange(index, date, 'to')}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    placeholderText="Select end date"
                    className="form-control m-lg-3"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId={`responsibilities-${index}`}>
              <Form.Label style={{ fontSize: '14px' }}>Responsibilities</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Responsibilities" name="responsibilities" value={exp.responsibilities} onChange={(e) => handleExperienceChange(index, e)} />
            </Form.Group>
          </div>
        ))}
        <Button  onClick={addExperience} style={{ marginBottom: '1rem', backgroundColor: '#05a7cc', color: 'white', border: 'none' }}>
          + Add Experience
        </Button>

        <Row>
          <Col md={6}>
            <Form.Group controlId="currentCTC">
              <Form.Label style={{fontSize: '14px'}}>Current CTC</Form.Label>
              <Form.Control type="text" placeholder="Enter current CTC" name="currentCTC" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="expectedCTC">
              <Form.Label style={{fontSize: '14px'}}>Expected CTC</Form.Label>
              <Form.Control type="text" placeholder="Enter expected CTC" name="expectedCTC" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <h4 style={{ marginTop: '1rem' }} >Skills</h4>
        <Form.Group controlId="skills">
          <Row>
            <Col xm={11}>
              <Form.Control
                type="text"
                placeholder="Enter a skill and press Add"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
            </Col>
            <Col xm={1}>
              <Button onClick={addSkill} style={{ width: 'auto', backgroundColor: '#05a7cc', border: 'none' }}>
                +
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <div className="skills-list">
          {formData.skills.map((skill, index) => (
            <Button
            key={index}
            pill
            bg="primary"
            className="m-2 p-2 fs-6"
            style={{ cursor: 'pointer', backgroundColor: '#f27551', border: 'none', fontWeight: '100' }}
            onClick={() => removeSkill(index)}
          >
            {skill} ✖
          </Button>
          ))}
        </div>

        

        <div className="text-center">
        <Button type="submit" className='m-auto mt-5 mb-5' style={{ backgroundColor: '#ef5226', color: 'white', border: 'none' }}>
          Submit Application
        </Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default JobApplicationForm;
