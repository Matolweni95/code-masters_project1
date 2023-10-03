import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../css/BlogStyle.css";
import BlogHero from "./BlogHero";
import imageOne from "../images/imageOne.png";

const BlogCards = () => {
  const blogTitle = "Our Stories";
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToPage = (pageNumber) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: (pageNumber - 1) * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentPage(pageNumber);
    }
  };

  // Placeholder data
  const blogData = [
    {
      id: 1,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 2,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 3,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 4,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 5,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 6,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 7,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 8,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 9,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 10,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 11,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 12,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 13,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 14,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 15,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
    {
      id: 16,
      title: "How I retain and remember what I study",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est atque, magnam soluta, hic sit ipsum fugiat similique quia veniam consectetur eos libero perspiciatis nobis minima, numquam aliquam maxime asperiores?",
    },
  ];

  const numRows = 2;
  const numColumns = 3;
  const itemsPerPage = numRows * numColumns;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = blogData.slice(startIndex, endIndex);

  return (
    <div>
      <BlogHero title={blogTitle} />
      <div>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </div>
      <div className="container" ref={containerRef}>
        <div className="grid-container">
          {currentPageData.map((article) => (
            <div key={article.id} className="grid-item">
              <div className="card">
                <div className="image">
                  <img src={imageOne} alt="Image One" />
                </div>
                <h2>{article.title}</h2>
                <hr />
                <p>{article.content}</p>

                <Link to={`/blog/${article.id}`}>
                  <button className="btn-read-more">
                    <span>READ MORE</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-colour btn-read-more"
        >
          prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => scrollToPage(page)}
            className={`btn-read-more ${page === currentPage ? "active" : ""}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn-colour btn-read-more"
        >
          next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogCards;
