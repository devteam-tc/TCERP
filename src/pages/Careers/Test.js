import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { db, storage } from '../../firebase'; // Ensure `storage` is correctly initialized
import { collection, addDoc, doc, getDocs, query, where, Timestamp, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  education: Yup.string().required('Education level is required'),
  resume: Yup.mixed().required('Resume is required'),
});

const JobApplicationForm = ({ jobTitle }) => {
  const [resumeFile, setResumeFile] = useState(null);

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    education: '',
    resume: null,
    
    AppliedDate: Timestamp.now(),
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

  // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     if (!resumeFile) {
  //       toast.error('Please upload a resume!', { position: 'top-center' });
  //       setSubmitting(false);
  //       return;
  //     }

  //     // Check for duplicate applications
  //     const jobApplicationsRef = collection(db, 'jobApplications');
  //     const querySnapshot = await getDocs(
  //       query(
  //         jobApplicationsRef,
  //         where('email', '==', values.email),
  //         where('phone', '==', values.phone),
  //         where('fullName', '==', values.fullName),
  //         where('AppliedRole', '==', jobTitle)
  //       )
  //     );

  //     if (!querySnapshot.empty) {
  //       toast.error('You have already applied for this position.', { position: 'top-center', autoClose: 3000 });
  //       setSubmitting(false);
  //       return;
  //     }

  //     // Upload resume to Firebase Storage
  //     const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
  //     await uploadBytes(resumeRef, resumeFile);
  //     const resumeURL = await getDownloadURL(resumeRef);

  //     // Store application in Firestore
  //     const structuredData = {
  //       ...values,
  //       resumeURL,
  //       AppliedRole: jobTitle,
  //       AppliedDate: Timestamp.now(),
  //     };
  //     await addDoc(collection(db, 'jobApplications'), structuredData);

  //     // Send email via EmailJS
  //     const { service_id, template_id, public_key } = await fetchEmailKeys();
  //     const templateParams = {
  //       ...structuredData,
  //       resumeURL,
  //     };
  //     await emailjs.send(service_id, template_id, templateParams, public_key);

  //     toast.success('Application submitted successfully!', { position: 'top-right', autoClose: 5000 });
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error submitting application:', error);
  //     toast.error('Failed to submit application. Please try again.', { position: 'top-center', autoClose: 3000 });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (!resumeFile) {
        toast.error('Please upload a resume!', { position: 'top-center' });
        setSubmitting(false);
        return;
      }
  
      // Check for duplicate applications
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
        toast.error('You have already applied for this position.', { position: 'top-center', autoClose: 3000 });
        setSubmitting(false);
        return;
      }
  
      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${values.email}_${Date.now()}`);
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);
  
      // Store application in Firestore (exclude 'resume' field)
      const structuredData = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        education: values.education,
        AppliedRole: jobTitle,
        AppliedDate: Timestamp.now(),
        resumeURL, // Store the URL of the uploaded resume
      };
  
      await addDoc(collection(db, 'jobApplications'), structuredData);
  
      // Send email via EmailJS
      const { service_id, template_id, public_key } = await fetchEmailKeys();
      const templateParams = {
        ...structuredData,
      };
      await emailjs.send(service_id, template_id, templateParams, public_key);
  
      toast.success('Application submitted successfully!', { position: 'top-right', autoClose: 5000 });
      resetForm();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.', { position: 'top-center', autoClose: 3000 });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <FormContainer>
      <ToastContainer />
      <h3 style={{ color: '#ef5226' }} className="text-center mt-3 mb-3">Job Application Form</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Field type="text" name="fullName" className="form-control" />
                  <ErrorMessage name="fullName" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Field type="tel" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Education Level</Form.Label>
                  <Field as="select" name="education" className="form-control">
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
            <Form.Group className="mt-3">
              <Form.Label>Resume</Form.Label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  setResumeFile(e.target.files[0]);
                  setFieldValue('resume', e.target.files[0]);
                }}
              />
              <ErrorMessage name="resume" component="div" className="text-danger" />
            </Form.Group>
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
