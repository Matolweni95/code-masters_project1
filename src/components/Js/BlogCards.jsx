import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../css/BlogStyle.css";
import imageOne from "../images/imageOne.png";
import SectionBanner from "./SectionBanner";
import { useNavigate } from 'react-router-dom';

const BlogCards = () => {
  const [stories, setStories] = useState([]);
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchStories = async () => {


    const result =await axios.get("http://localhost:8080/api/v1/posts/posts");
    setStories(result.data);
    console.log(result.data);
   


};
useEffect(() => {

  fetchStories();
}, []);


const scrollToPage = (pageNumber) => {
  if (containerRef.current) {
    containerRef.current.scrollTo({
      left: (pageNumber - 1) * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
    setCurrentPage(pageNumber);
  }
};



  const numRows = 2;
  const numColumns = 3;
  const itemsPerPage = numRows * numColumns;

  // Calculate the total number of pages
  const totalPages = Math.ceil(stories.length / itemsPerPage);

  // Create an array to represent the pages
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Slice the blog data for the current page
  const currentStories = stories.slice(startIndex, endIndex);

  return (
    //displayed cards below
    <div className="blogStories">
      <SectionBanner />
      <div className="blogStories__container" ref={containerRef}>
        <div className="blogStories__cards d-flex flex-wrap justify-center">
          {currentStories.map((story) => (
            <div key={story.id} className="blogStories__card">
              <div className="blogStories_cardItem">
                <div className="cardItem_imageContainer">
                  <img className="blogStoriesCard__image" src={story.picture} alt="Image One" />
                </div>
                <div className="blogStoriesText__section d-flex flex-column align-items-center">
                  <div className="blogStoriesCard__headerContainer">
                    <h2 className="blogStoriesCard__header">{story.title}</h2>
                  </div>
                  <div className="blogStoriesCard__line"></div>
                  <div className="blogStoriesCard__text">
                    <p>{story.content}</p>
                  </div>
                  <Link to={`/blog/${story.id}`}>
                  <button className="blogStories-btn">READ MORE</button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* The pagination below*/}
      <div className="pagination d-flex justify-content-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-colour"
        >
          Prev
        </button>
        
        {pagesArray.map((page) => (
          <div className={page === currentPage ? "active-click" : ""}>
          <button
            key={page}
            onClick={() => scrollToPage(page)}
            className="page-btn"
          >
            {page}
          </button>
          </div>
        ))}
        
        <button
          onClick={() => setCurrentPage(1 + 1)}
          disabled={1 === totalPages}
          className="btn-colour"
        >
          Nex
        </button>
      </div>
      
    </div>
  );
};

export default BlogCards;
