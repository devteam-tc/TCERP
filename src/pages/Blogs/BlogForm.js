// import React, { useState } from "react";
// import { db, storage } from '../../firebase';
// import { addDoc, collection } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const BlogForm = () => {
//   const [blogPosts, setBlogPosts] = useState([
//     { title: "", content: "", tags: [], imageFile: null },
//   ]);

//   const handleFileChange = (index, file) => {
//     const updatedBlogPosts = [...blogPosts];
//     updatedBlogPosts[index].imageFile = file;
//     setBlogPosts(updatedBlogPosts);
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedBlogPosts = [...blogPosts];
//     updatedBlogPosts[index][field] = value;
//     setBlogPosts(updatedBlogPosts);
//   };

//   const addBlogPost = () => {
//     setBlogPosts([...blogPosts, { title: "", content: "", tags: [], imageFile: null }]);
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     await Promise.all(blogPosts.map((post) => uploadBlogPost(post)));
// //   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Wait for all blog posts to upload
//       await Promise.all(blogPosts.map((post) => uploadBlogPost(post)));
//       console.log("All blog posts uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading blog posts: ", error);
//     }
//   };
  

//   // Upload a single image and get its URL
// const uploadImage = async (file) => {
//     try {
//       const storageRef = ref(storage, `images/${file.name}`);
//       await uploadBytes(storageRef, file);
//       const imageURL = await getDownloadURL(storageRef);
//       return imageURL;
//     } catch (error) {
//       console.error("Error uploading image: ", error);
//       return null;
//     }
//   };
  
//   // Upload a single blog post (including image) to Firestore
//   const uploadBlogPost = async (postData) => {
//     try {
//       // Upload image and get URL
//       const imageURL = await uploadImage(postData.imageFile);
//       if (imageURL) {
//         await addDoc(collection(db, "blogs"), {
//           title: postData.title,
//           content: postData.content,
//           image: imageURL,
//           tags: postData.tags,
//           createdAt: new Date(),
//         });
//         console.log("Blog post added successfully!");
//       } else {
//         console.error("Failed to upload image URL");
//       }
//     } catch (error) {
//       console.error("Error adding blog post: ", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {blogPosts.map((post, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={post.title}
//             onChange={(e) => handleInputChange(index, "title", e.target.value)}
//             placeholder="Title"
//             required
//           />
//           <textarea
//             value={post.content}
//             onChange={(e) => handleInputChange(index, "content", e.target.value)}
//             placeholder="Content"
//             required
//           />
//           <input
//             type="text"
//             value={post.tags.join(", ")}
//             onChange={(e) => handleInputChange(index, "tags", e.target.value.split(", "))}
//             placeholder="Tags (comma-separated)"
//           />
//           <input
//             type="file"
//             onChange={(e) => handleFileChange(index, e.target.files[0])}
//             accept="image/*"
//             required
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addBlogPost}>Add Another Blog Post</button>
//       <button type="submit">Submit All Blog Posts</button>
//     </form>
//   );
// };

// export default BlogForm;


import React, { useState } from "react";
import { db } from '../../firebase';
import { addDoc, collection } from "firebase/firestore";

const BlogForm = () => {
  const [blogPosts, setBlogPosts] = useState([
    { title: "", content: "", tags: [], imageUrl: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedBlogPosts = [...blogPosts];
    updatedBlogPosts[index][field] = value;
    setBlogPosts(updatedBlogPosts);
  };

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: "", content: "", tags: [], imageUrl: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Wait for all blog posts to upload
      await Promise.all(blogPosts.map((post) => uploadBlogPost(post)));
      console.log("All blog posts uploaded successfully!");
    } catch (error) {
      console.error("Error uploading blog posts: ", error);
    }
  };

  // Upload a single blog post to Firestore
  const uploadBlogPost = async (postData) => {
    try {
      await addDoc(collection(db, "blogs"), {
        title: postData.title,
        content: postData.content,
        image: postData.imageUrl, // Use image URL directly
        tags: postData.tags,
        createdAt: new Date(),
      });
      console.log("Blog post added successfully!");
    } catch (error) {
      console.error("Error adding blog post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <input
            type="text"
            value={post.title}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={post.content}
            onChange={(e) => handleInputChange(index, "content", e.target.value)}
            placeholder="Content"
            required
          />
          <input
            type="text"
            value={post.tags.join(", ")}
            onChange={(e) => handleInputChange(index, "tags", e.target.value.split(", "))}
            placeholder="Tags (comma-separated)"
          />
          <input
            type="text"
            value={post.imageUrl}
            onChange={(e) => handleInputChange(index, "imageUrl", e.target.value)}
            placeholder="Image URL"
            required
          />
        </div>
      ))}
      <button type="button" onClick={addBlogPost}>Add Another Blog Post</button>
      <button type="submit">Submit All Blog Posts</button>
    </form>
  );
};

export default BlogForm;
 