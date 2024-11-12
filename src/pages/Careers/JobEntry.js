import React, { useState } from "react";
import { db } from "../../firebase"; // Make sure this imports your initialized Firebase app
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button, Form, Container } from "react-bootstrap";

const AddJobOpening = () => {
  const [jobData, setJobData] = useState({
    title: "",
    experience: "",
    location: "",
    workMode: "",
    description: "",
    responsibilities: [""],
    qualifications: [""],
    vacancies: 0,
    imageURL: "",
    postedDate: Timestamp.now(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleArrayChange = (e, key, index) => {
    const newArray = [...jobData[key]];
    newArray[index] = e.target.value;
    setJobData({ ...jobData, [key]: newArray });
  };

  const addArrayField = (key) => {
    setJobData({ ...jobData, [key]: [...jobData[key], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "jobOpenings"), jobData);
      alert("Job Opening Added Successfully!");
      setJobData({
        title: "",
        experience: "",
        location: "",
        workMode: "",
        description: "",
        responsibilities: [""],
        qualifications: [""],
        vacancies: 0,
        imageURL: "",
        postedDate: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error adding job opening: ", error);
    }
  };

  return (
    <Container>
      <h2>Add Job Opening</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            name="experience"
            value={jobData.experience}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Work Mode</Form.Label>
          <Form.Control
            type="text"
            name="workMode"
            value={jobData.workMode}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={jobData.description}
            onChange={handleChange}
          />
        </Form.Group>

        {["responsibilities", "qualifications"].map((key) => (
          <Form.Group key={key}>
            <Form.Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Form.Label>
            {jobData[key].map((item, index) => (
              <div key={index}>
                <Form.Control
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayChange(e, key, index)}
                />
              </div>
            ))}
            <Button variant="link" onClick={() => addArrayField(key)}>
              Add {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          </Form.Group>
        ))}

      <Form.Group>
          <Form.Label>Vacancies</Form.Label>
          <Form.Control
            type="integer"
            name="vacancies"
            value={jobData.vacancies}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageURL"
            value={jobData.imageURL}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Job
        </Button>
      </Form>
    </Container>
  );
};

export default AddJobOpening;
