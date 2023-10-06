import React, { useState } from 'react';
import '../css/Image.css';

const ImageGallery = () => {
  // State to store the list of selected image files
  const [imageFiles, setImageFiles] = useState([]);
  // Function to handle adding images
  const handleImageUpload = (e) => {
    const selectedFiles = e.target.files;
    
    // Convert the FileList to an array and store it in state
    const newImageFiles = Array.from(selectedFiles);
    setImageFiles([...imageFiles, ...newImageFiles]);
    
    // Clear the input field
    e.target.value = null;
  };
  
  return (

    <div>
      <h2>Image Gallery</h2>
      <div>
        <input
          type="file"
          multiple // Allow multiple file selection
          accept="image/*" // Specify that only image files can be selected
          onChange={handleImageUpload}
        />
      </div>
      <div className="image-container">
        {imageFiles.map((file, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(file)}
              alt={`Image ${index}`}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
