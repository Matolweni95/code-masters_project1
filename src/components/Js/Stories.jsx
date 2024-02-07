

import { Link } from "react-router-dom";
import db from "../Config/Firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../css/stories.css";
import "../css/BlogStyle.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Stories() {
  const [stories, setStories] = useState([]);
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const framesPerPage = 6; 


  const fetchStories = async () => {


    const result =await axios.get("http://localhost:8080/api/v1/posts/posts");
    setStories(result.data);
    console.log(result.data);
   


};
useEffect(() => {

  fetchStories();
}, []);




  

  const handleDelete = async (storyId) => {
    try {
      const storyDocRef = doc(db, "stories", storyId);
      await deleteDoc(storyDocRef);

      setStories((prevStories) =>
        prevStories.filter((story) => story.id !== storyId)
      );
    } catch (error) {
      console.error("Error deleting story: ", error);
    }
  };



  const totalPages = Math.ceil(stories.length / framesPerPage);

  const startIndex = (currentPage - 1) * framesPerPage;
  const endIndex = currentPage * framesPerPage;

  const currentStories = stories.slice(startIndex, endIndex);

  return (
    <>
      <div className="header-container">
        <div className="label">
          <div className="text-wrapper">OUR STORIES</div>
        </div>
      </div>

      <div className="create-container">
      <div className="frame1">
          <Link to={"../create"} className="text">
            CREATE POST
          </Link>
        </div>
      </div>
      
      <div className="frame-container">
        {currentStories.map((story) => (
          <div key={story.id} className="frame">
            <div className="div">
              <img className="rectangle" src={story.picture} alt="Image" />
              <p className="text-wrapper">{story.title}</p>
             
            </div>
            <div className="line mb-3"></div>
            <p className="p">{story.body}</p>
            <div className="div-2 pb-4">
              <div className="div-wrapper">
                <Link
                  to={`/dashboard/edit/${story.id}`}
                  className="text-wrapper-2"
                >
                  EDIT
                </Link>
              </div>
              <div className="div-wrapper-2">
                <button
                  className="text-wrapper-2"
                  onClick={() => handleDelete(story.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
          className="btn-colour"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(prevPage + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
          className="btn-colour"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Stories;
