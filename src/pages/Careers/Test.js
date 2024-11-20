import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
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
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    width: 100%;
  }
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
  skills: Yup.array().min(1, 'At least one skill is required'),
});

const JobApplicationForm = ({ jobTitle }) => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    education: '',
    totalExperience: '',
    experienceList: [{ from: '', to: '', company: '', responsibilities: '' }],
    skills: [],
    newSkill: '',
    currentCTC: '',
    expectedCTC: '',
  };

  const fetchEmailKeys = async () => {
    try {
        const docRef = doc(db, "emailConfig", "emailKeys");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const { service_id, template_id, public_key } = docSnap.data();
            return { service_id, template_id, public_key };
        } else {
            throw new Error("No email configuration found!");
        }
    } catch (error) {
        console.error("Error fetching email keys:", error);
        throw error;
    }
};

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const structuredData = {
      ...values,
      experienceList: JSON.stringify(values.experienceList),
      skills: values.skills.join(', '),
      AppliedRole: jobTitle,
    };

    try {
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
      toast.success('Application submitted successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });
      resetForm();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer>
            <ToastContainer /> {/* Add the ToastContainer */}
      <h3 className="text-center">Job Application Form</h3>
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

            <h4 className="mt-4">Work Experience</h4>
            
            <FieldArray name="experienceList">
              {({ push, remove }) => (
                <>
                  {values.experienceList.map((_, index) =>  (
                    <div key={index} className="border p-3 mb-3 rounded"  style={{
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    }}>
                      <Row>
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Field
                              name={`experienceList.${index}.company`}
                              placeholder="Company Name"
                              className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}                            />
                            <ErrorMessage
                              name={`experienceList.${index}.company`}
                              component="div"
                              className="text-danger"
                            />
                          </Form.Group>
                        </Col>
                     
                      </Row>

                      <Row className="mt-3">
                      <Col md={6}>
  <Form.Group>
    <Form.Label className="mb-3">From</Form.Label> {/* Add margin-bottom */}
    <DatePicker
      selected={values.experienceList[index].from}
      onChange={(date) => setFieldValue(`experienceList.${index}.from`, date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      placeholderText="Select start date"
      className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
    />
    <ErrorMessage
      name={`experienceList.${index}.from`}
      component="div"
      className="text-danger"
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group>
    <Form.Label className="mb-3">To</Form.Label> {/* Add margin-bottom */}
    <DatePicker
      selected={values.experienceList[index].to}
      onChange={(date) => setFieldValue(`experienceList.${index}.to`, date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      placeholderText="Select end date"
      className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
    />
    <ErrorMessage
      name={`experienceList.${index}.to`}
      component="div"
      className="text-danger"
    />
  </Form.Group>
</Col>

                        <Col md={12} className="mt-3">
                                      <Form.Group>
                <Form.Label>Responsibilities</Form.Label>
                <Field
                  name={`experienceList.${index}.responsibilities`}
                  placeholder="Responsibilities"
                  as="textarea" // Change the input to a textarea
                  className={`form-control ${touched.responsibilities && errors.responsibilities ? 'is-invalid' : ''}`}
                  rows="4" // You can adjust the number of rows based on your preference
                />
                <ErrorMessage
                  name={`experienceList.${index}.responsibilities`}
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

                        </Col>
                      </Row>
                      {index > 0 && (
                        <Button
                        type="button"
                        variant="danger"
                        onClick={() => remove(index)}
                        className="mt-2"
                        style={{ backgroundColor: 'rgb(5, 167, 204)', color: 'white' , border: 'none' }} 
                      >
                         -
                      </Button>
                      )}
                    </div>
                  ))}
                  <Button
  type="button"
  onClick={() => push({ from: '', to: '', company: '', responsibilities: '' })}
  style={{ backgroundColor: 'rgb(5, 167, 204)', color: 'white' , border: 'none' }} 
>
  + Add Experience
</Button>

                </>
              )}
            </FieldArray>

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
            <h4 className="mt-4">Skills</h4>
            <Form.Group>
  <Row className="mt-3">
    <Col md={10}>
      <Field
        type="text"
        name="newSkill" // Add a new field for skill input
        placeholder="Enter a skill"
        className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}        onBlur={handleBlur}
        onChange={handleChange}
      />
    </Col>
    <Col md={2} >
    <Button
  type="button"
  variant="outline-primary"
  onClick={() => {
    // Check if newSkill is defined and not empty
    const newSkillValue = values.newSkill || '';
    if (newSkillValue.trim() !== "") {
      setFieldValue('skills', [...values.skills, newSkillValue.trim()]);
      setFieldValue('newSkill', ''); // Clear the input field after adding
    }
  }}
  style={{ backgroundColor: 'rgb(5, 167, 204)', color: 'white', border: 'none' }} 
>
  Add Skill
</Button>


    </Col>
  </Row>
  
  <div className="skills-list">
                  {values.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <Button className='mt-3'
                        variant="danger"
                        size="sm"
                        onClick={() => setFieldValue('skills', values.skills.filter((_, i) => i !== index))}
                        style={{ marginLeft: '10px' , backgroundColor: 'rgb(242, 117, 81)', color: 'white', border: 'none' }}
                      >
                          {skill} ✖
                      </Button>
                    </div>
                  ))}
                </div>
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