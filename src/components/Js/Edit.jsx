import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../Config/Firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import "../css/edit.css";
import { Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [storyData, setStoryData] = useState({
    title: "",
    body: "",
    picture: "",
  });

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        const storyDocRef = doc(db, "stories", id);
        const storyDocSnap = await getDoc(storyDocRef);

        if (storyDocSnap.exists()) {
          const data = storyDocSnap.data();
          setStoryData(data);
          setImageUrl(data.picture); 
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching story data: ", error);
      }
    };

    fetchStoryData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStoryData({ ...storyData, [name]: value });
  };

  const handleImageUpload = async (imageFile) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "images/" + Date.now());
  
      await uploadBytes(storageRef, imageFile);
  
      const imageUrl = await getDownloadURL(storageRef);
      setImageUrl(imageUrl);
  
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const storyDocRef = doc(db, "stories", id);
      await updateDoc(storyDocRef, {
        title: storyData.title,
        body: storyData.body,
        picture: imageUrl, 
      });


    } catch (error) {
      console.error("Error updating story data: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
     
        <input
          type="text"
          name="title"
          value={storyData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          value={storyData.body}
          onChange={handleInputChange}
        />

    
        {imageUrl && (
          <div className="image-url">
            <strong>Image URL:</strong> {imageUrl}
          </div>
        )}


        <input
          type="file"
          name="picture"
          onChange={(e) => handleImageUpload(e.target.files[0])}
        />

     
        <Link to={"/dashboard /stories"} type="submit" className="save-button">
          SAVE/UPDATE
        </Link>
      </form>
    </div>
  );
}

export default Edit;
