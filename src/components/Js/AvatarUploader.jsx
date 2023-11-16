import React, { useState } from 'react';
import { Avatar } from '@material-tailwind/react';


const placeholderImage = 'https://images.squarespace-cdn.com/content/v1/5de1f65b98e1587c6356b434/1597215557716-ZIAT4P7GRV3XHZ4XM848/team-placeholder.png';
function AvatarUploader({ initialValue, onUpload }) {
  const [imageURL, setImageURL] = useState(initialValue ||  placeholderImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const newAvatarUrl = e.target.result;
        setImageURL(newAvatarUrl);
        onUpload(newAvatarUrl); // Pass the new avatar URL to the parent component
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="mb-8">
        <label htmlFor="avatarInput" className="cursor-pointer">
          <Avatar
            src={imageURL}
            size="lg"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </label>
        <input
          id="avatarInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

export default AvatarUploader;
