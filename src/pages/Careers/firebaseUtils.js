import { useEffect, useState } from 'react';
import { addDoc, collection, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';


export const addJobPost = async (jobData) => {
  try {
    const docRef = await addDoc(collection(db, "jobPosts"), jobData);
    console.log("Job added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding job: ", e);
  }
};

export const updateJobPost = async (id, updatedData) => {
  const jobRef = doc(db, 'jobPosts', id);
  await updateDoc(jobRef, updatedData);
};

export const deleteJobPost = async (id) => {
  await deleteDoc(doc(db, 'jobPosts', id));
};



export const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsCollection = collection(db, 'jobPosts');
      const jobSnapshot = await getDocs(jobsCollection);
      const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobList);
    };

    fetchJobs();
  }, []);

  return jobs;
};