import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Config/Firebase-config";
import { collection, addDoc } from "firebase/firestore";

import "../css/create.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Create() {
  const initialState = {
    title: "",
    body: "",
    picture: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setData({ ...data, picture: imageFile });
  };

  
  const handleImageUpload = async (imageFile) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "images/" + Date.now());

    
      await uploadBytes(storageRef, imageFile);

     
      const imageUrl = await getDownloadURL(storageRef);

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      if (data.picture instanceof File) {
        
        const imageUrl = await handleImageUpload(data.picture);

       
        const storiesRef = collection(db, "stories");
        await addDoc(storiesRef, {
          title: data.title,
          body: data.body,
          picture: imageUrl,
        });

        setData(initialState);
      } else {
      
        console.error("No image file selected.");
      }
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };


  

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <h1 className="post-title">Create Post</h1>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={data.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-group">
          <textarea
            className="text-field"
            type="text"
            name="body"
            placeholder="POST BODY"
            onChange={handleInputChange}
            value={data.body}
          ></textarea>
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            placeholder="image"
            name="picture"
            onChange={handleImageChange}
          />
        </div>
        <button  type="submit" className="custom-button">
          SUBMIT
        </button>
      </form>

      <div></div>
    </div>
  );
}

export default Create;
