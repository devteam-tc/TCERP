import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { db, storage } from '../../firebase'; 
import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
  margin: auto;
  padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(75px);
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffffd6;
    background-size: 100% 100%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const UploadSection = styled.div`
  border: 2px dashed #ff6b00; /* Orange border */
  text-align: center;
  padding: 20px;
  // background-color: #000; 
  color: #ef5226 !important; 
  // max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 14px;
  color: #ef5226 !important; 
    margin-top: 10px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 16px;
  color: #ef5226 !important; 
  text-decoration: underline;
`;

// Validation Schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  education: Yup.string().required('Education level is required'),
  totalExperience: Yup.number()
  .typeError('Total years of work experience must be a number')
  .min(0, 'Experience cannot be negative') 
  .required('Total years of work experience is required') ,
  resume: Yup.mixed().required('Resume is required'),
  experienceList: Yup.array().of(
    Yup.object({
      from: Yup.date().required('Start date is required'),
      to: Yup.date().required('End date is required'),
      company: Yup.string().required('Company name is required'),
      responsibilities: Yup.string().required('Responsibilities are required'),
    })
  ),
  currentCTC: Yup.number()
    .typeError('Current CTC must be a valid number')
    .positive('Current CTC must be a positive number')
    .required('Current CTC is required'),
  expectedCTC: Yup.number()
    .typeError('Expected CTC must be a valid number')
    .positive('Expected CTC must be a positive number')
    .required('Expected CTC is required'),
  
});

const JobApplicationForm = ({ jobTitle }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    education: '',
    resume: null,
    totalExperience: '',
    experienceList: [{ from: '', to: '', company: '', responsibilities: '' }],
    currentCTC: '',
    expectedCTC: '',
    AppliedDate: Timestamp.now()
  };

  const fetchEmailKeys = async () => {
    const docRef = doc(db, "emailConfig", "emailKeys");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { service_id, template_id, public_key } = docSnap.data();
      return { service_id, template_id, public_key };
    } else {
      throw new Error("No email configuration found!");
    }
  };

const handleSubmit = async (values, { setSubmitting, resetForm }) => {

  const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);
  

  const structuredData = {
    ...values,
    experienceList: JSON.stringify(values.experienceList),
    AppliedRole: jobTitle,
    resumeURL, 
    AppliedDate: Timestamp.now()
  };

  try {

    // Check if the user has already applied
  const jobApplicationsRef = collection(db, 'jobApplications');
  const querySnapshot = await getDocs(
    query(
      jobApplicationsRef,
      where('email', '==', values.email),
      where('phone', '==', values.phone),
      where('fullName', '==', values.fullName),
      where('AppliedRole', '==', jobTitle)
    )
  );

  if (!querySnapshot.empty) {
    toast.error('You have already applied for this position.', {
      position: 'top-center',
      autoClose: 3000,
    });
    setSubmitting(false);
    return;
  }

    // Store in Firebase
    await addDoc(collection(db, 'jobApplications'), structuredData);
    // Prepare data for EmailJS
    const templateParams = {
      ...structuredData,
      experienceList: values.experienceList
        .map(
          (exp, index) =>
            `${index + 1}. From: ${exp.from ? new Date(exp.from).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} ` +
          `To: ${exp.to ? new Date(exp.to).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} | ` +
          `Company: ${exp.company} | Responsibilities: ${exp.responsibilities}`
        )
        .join('\n'),
    };
    // Send email using EmailJS
    const { service_id, template_id, public_key } = await fetchEmailKeys();
    await emailjs.send(service_id, template_id, templateParams, public_key);
    toast.success('Application submitted successfully!', { position: 'top-right', autoClose: 5000 });
    resetForm();
  } catch (error) {
    console.error('Error submitting application:', error);
    toast.error('Failed to submit application. Please try again.', {
      position: 'top-center !important',
      autoClose: 3000,
      
    });
  } finally {
    setSubmitting(false);
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.size <= 2 * 1024 * 1024) { // Check for file size (2 MB max)
    setResumeFile(file);
  } else {
    alert("File size exceeds 2 MB or is invalid");
  }
};


  return (
    <FormContainer>
            <ToastContainer /> {/* Add the ToastContainer */}
      <h3  style={{ color: '#ef5226' }}  className="text-center mt-3 mb-3">Job Application Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched, handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="fullName" className="mt-3">
                  <Form.Label>Full Name</Form.Label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="fullName" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="phone" className="mt-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="education" className="mt-3">
                  <Form.Label>Education Level</Form.Label>
                  <Field
                    as="select"
                    name="education"
                    className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </Field>
                  <ErrorMessage name="education" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="totalExperience" className="mt-3">
              <Form.Label>Total Years of Work Experience</Form.Label>
              <Field
                type="number"
                name="totalExperience"
                placeholder="Enter total years of experience"
                className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                />
              <ErrorMessage name="totalExperience" component="div" className="text-danger" />
            </Form.Group>

          

            <Row>
              <Col md={6}>
                <Form.Group controlId="currentCTC" className="mt-3">
                  <Form.Label>Current CTC</Form.Label>
                  <Field
  type="number"
  name="currentCTC"
  placeholder="Enter current CTC"
  className={`form-control ${touched.currentCTC && errors.currentCTC ? 'is-invalid' : ''}`}
/>
<ErrorMessage name="currentCTC" component="div" className="text-danger" />

                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="expectedCTC" className="mt-3">
                  <Form.Label>Expected CTC</Form.Label>
                  <Field
  type="number"
  name="expectedCTC"
  placeholder="Enter expected CTC"
  className={`form-control ${touched.expectedCTC && errors.expectedCTC ? 'is-invalid' : ''}`}
/>
<ErrorMessage name="expectedCTC" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <UploadSection className="mt-3">
  <FileInput
    type="file"
    id="fileUpload"
    onChange={handleFileChange}
    accept=".doc,.xls,.pdf,.txt,.ppt"
  />
  <Label htmlFor="fileUpload">Attach any files you feel would be useful</Label>
  <p>(doc, xls, pdf, txt, and ppt files only, Max Size 2MB)</p>
  
  {/* Display uploaded file details */}
  {resumeFile && (
    <div className="mt-2">
      <p><strong>Selected File:</strong> {resumeFile.name}</p>
      <p><small>Size: {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB</small></p>
    </div>
  )}
</UploadSection>


            <div className="d-flex justify-content-center">
            <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="mt-5 mb-5"
                style={{ backgroundColor: 'rgb(239, 82, 38)', color: 'white', border: 'none' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
          </div>

          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
export default JobApplicationForm;