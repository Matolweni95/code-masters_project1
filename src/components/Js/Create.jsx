import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Reference to the hidden file input element
  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
    }, 3000);
  };
  <div className="image-preview">
  {isUploading ? (
    <p>Uploading...</p>
  ) : (
    <img src={imagePreview} alt="Selected" className="circular-image" />
  )}
</div>

  const handleAddImageClick = () => {
    // Trigger the hidden file input
    fileInputRef.current.click();
  };

  return (
    <div>
      <Link to={"/Edit"}>Edit</Link>
      <div className="container">
       <h1 className="post-title">Create Post</h1>
        <div className="image-preview">
          {/* Hidden file input */}
          <input
            type="file"
            id=""
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }} // Hide the input element
          />

          {/* Plus sign button for adding an image */}
          <button className="add-image-button" onClick={handleAddImageClick}>
            <span>Upload picture</span>
          </button>
        </div>
        {selectedImage && (
          <div className="image-preview">
            {isUploading ? (
              <p>Uploading...</p>
            ) : (
              <img src={imagePreview} alt="Selected" />
            )}
          </div>
        )}

        <div className="form-group">
          <input type="text" className="input-field" placeholder="Post title" />
        </div>
        <div className="text-group">
          <textarea className="text-field" placeholder="POST BODY"></textarea>
        </div>
        <div className="form-group">
          <input type="text" className="input-field" placeholder="Tag/Category" />
        </div>
        <button type="submit" className="custom-button">SUBMIT</button>

      </div>
    </div>
  );
}

export default Create; 



