import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { MyContext } from '../../App';
import { useContext } from 'react';

function Galleries() {
  const { contextValue } = useContext(MyContext);
  const userId = contextValue;

  const [data, setData] = useState({
    caption: "",
    description: "",
    event: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJOZW8iLCJyb2xlIjoiQURNSU4iLCJpZCI6MiwibGFzdG5hbWUiOiJNYWdvbGVsYSIsImlhdCI6MTcwNzEzMTM5NiwiZXhwIjoxNzA3MjE3Nzk2fQ.GLUUhL-3NMaYozHpDNHN3AYWeSar_tumZQ9F7oBe-DY',
    'Content-Type': 'application/json',
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/gallery/all');
        setGalleryItems(response.data);
      } catch (error) {
        console.error("Error fetching gallery items: ", error);
        setError("Error fetching gallery items. Please try again.");
      }
    };

    fetchData();
  }, [userId]);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/gallery/${id}`);
      const galleryData = response.data;

      setData({
        caption: galleryData.caption || "",
        description: galleryData.description || "",
        event: galleryData.event || "",
      });

      setEditing(true);
      setEditId(id);

      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching gallery item for edit: ", error);
      setError("Error fetching item for edit. Please try again.");
    }
  };

  const galleryData = {
    caption: data.caption,
    description: data.description,
    event: data.event,
    
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/gallery/delete/${id}`);
      setGalleryItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting gallery item: ", error);
      setError("Error deleting item. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setData({ ...data, image: imageFile });
  };

  const handleImageUpload = async (imageFile) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "gallery/" + Date.now());
  
      await uploadBytes(storageRef, imageFile);
  
      const downloadUrlRef = ref(storage, storageRef.fullPath);
      const imageUrl = await getDownloadURL(downloadUrlRef);
  
  
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      setLoading(true);
      setError(null);
  
      if (data.image instanceof File) {
        const imageUrl = await handleImageUpload(data.image);
  
        const galleryData = {
          caption: data.caption,
          description: data.description,
          event: data.event,
          image: imageUrl,
          
        };
  
        if (editing && editId) {
          await axios.put(`http://localhost:8080/api/v1/gallery/update/${editId}`, { ...galleryData,imageUrl,user_id:userId });
          setIsModalOpen(false);
  
        } else {
          await axios.post(`http://localhost:8080/api/v1/gallery/save/${userId}`, { ...galleryData,imageUrl,user_id:userId });
          setIsModalOpen(false);
        }
  
        setData({
          caption: "",
          description: "",
          event: "",
          image: null,
        });
        setEditing(false);
        setEditId(null);
        setIsModalOpen(false);

        window.location.reload();
      } else {
        setError("No image file selected.");
      }
    } catch (error) {
      console.error("Error adding/updating image: ", error);
      setError("Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditing(false);
    setData({
      caption: "",
      description: "",
      event: "",
      image: null,
    });
  };

  const galleriesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastGallery = currentPage * galleriesPerPage;
  const indexOfFirstGallery = indexOfLastGallery - galleriesPerPage;
  const currentGallery = galleryItems.slice(indexOfFirstGallery, indexOfLastGallery);

  const totalPages = Math.ceil(galleryItems.length / galleriesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div>
        <div className="relative">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold mb-4">Our Galleries</h1>
            <button
              className="uppercase bg-blue-500 text-white mr-6 mt-4 px-4"
              onClick={() => {
                setIsModalOpen(true);
                setEditing(false);
              }}
            >
              Create New Gallery
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {currentGallery.map((item) => (
    <div key={item.id} className="bg-white rounded-md shadow-lg mt-6">
      <img src={item.imageUrl} alt="gallery image" className="w-full h-50" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.caption}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-gray-500 mb-2">{item.event}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              handleEdit(item.id);
              setIsModalOpen(true);
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:underline focus:outline-none"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:underline focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



        </div>

        {isModalOpen && (
          <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg relative z-50">
              <button onClick={closeModal} className="absolute top-2 bold text-2xl right-2 text-gray-600">
                X
              </button>
              <form
                onSubmit={handleSubmit}
                className="container mx-auto max-w-md p-4 bg-gray-100 border rounded-lg shadow-md relative"
              >
                <h1 className='text-xl bold'>{editing ? "UPDATE GALLERY" : "CREATE GALLERY"}</h1>

                <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                    Select Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="caption" className="block text-sm font-medium text-gray-600">
                    Caption
                  </label>
                  <input
                    id="caption"
                    type="text"
                    name="caption"
                    value={data.caption}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="event" className="block text-sm font-medium text-gray-600">
                    Event Name
                  </label>
                  <input
                    id="event"
                    type="text"
                    name="event"
                    value={data.event}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  {error && <div className="text-red-500 mb-4">{error}</div>}

                  <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" disabled={loading}>
                    {loading ? "Submitting..." : editing ? "UPDATE" : "CREATE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center text-center mt-8">
        <ul className="flex items-center justify-center text-center">
          <li className="bg-blue-500 mt-20 py-2 px-6 text-white">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`mx-1 ${index + 1 === currentPage ? 'mt-20 py-2 px-6 text-white bg-red-500 rounded-full' : 'bg-gray-300 rounded-full py-2 px-6 mt-20 text-gray-700 '}`}>
              <button
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="bg-blue-500 mt-20 text-white py-2 px-6">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Galleries;
