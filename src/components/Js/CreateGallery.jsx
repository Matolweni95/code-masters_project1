import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, getDocs,updateDoc, onSnapshot, deleteDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { db } from '../Config/Firebase-config';


function CreateGallery() {
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

  useEffect(() => {
    if (editing && editId) {
      const fetchGalleryItem = async () => {
        try {
          const galleryDocRef = doc(db, "gallery", editId);
          const galleryDocSnap = await getDocs(galleryDocRef);

          if (galleryDocSnap.exists()) {
            const existingData = galleryDocSnap.data();
            setData(existingData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching gallery item data: ", error);
        }
      };

      fetchGalleryItem();
    }
  }, [editing, editId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setGalleryItems(items);
    }, (error) => {
      console.error("Error fetching gallery items: ", error);
      setError("Error fetching gallery items. Please try again.");
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  const handleEdit = (id) => {
    setEditing(true);
    setEditId(id);

    const galleryDocRef = doc(db, "gallery", id);
    getDocs(galleryDocRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      const galleryDocRef = doc(db, "gallery", id);
      await deleteDoc(galleryDocRef);
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
          setLoading(true);
          setError(null);
    
          if (data.image instanceof File) {
            const imageUrl = await handleImageUpload(data.image);
    
            if (editing && editId) {
         
              const galleryDocRef = doc(db, "gallery", editId);
              await updateDoc(galleryDocRef, {
                caption: data.caption,
                description: data.description,
                event: data.event,
                image: imageUrl,
              });
            } else {
              
              const galleryRef = collection(db, "gallery");
              await addDoc(galleryRef, {
                caption: data.caption,
                description: data.description,
                event: data.event,
                image: imageUrl,
              });
            }
    
            setData({
              caption: "",
              description: "",
              event: "",
              image: null,
            });
            setEditing(false);
            setEditId(null);
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

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    
      return (
        <div>
          <button className="bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
 onClick={openModal}>Add New Gallery Items</button>

{isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <button onClick={closeModal}>Exit</button>
      <form onSubmit={handleSubmit} className="container mx-auto max-w-md p-4 bg-gray-100 border rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Create Gallery</h1>

        <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-600">Select Image</label>
        <input
            id="image"
            type="file"
            name="image"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
       </div>
       <div className="mb-4">
        <label htmlFor="caption" className="block text-sm font-medium text-gray-600">Caption</label>
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
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
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
        <label htmlFor="event" className="block text-sm font-medium text-gray-600">Event Name</label>
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

     <button type="submit" className="bg-blue text-white p-2 rounded-md" disabled={loading}>
     {loading ? "Submitting..." : editing ? "UPDATE" : "SUBMIT"}
     </button>
      </div>
    
   </form>
    </div>
  </div>
)}
          


<div>
  <h1  className="text-2xl font-bold mb-4">Our Galleries</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {galleryItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={item.image} alt="gallery image" className="w-full h-50 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold mb-2">{item.caption}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-gray-500 mb-2">{item.event}</p>
            <div className="flex justify-between">
                <button onClick={() => handleEdit(item.id)} className="bg-blue text-white py-2 px-8 rounded-md hover:underline focus:outline-none">
                    Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="bg-red text-white py-2 px-8 rounded-md hover:underline focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
    ))}
</div>
</div>
        </div>
      );
}

export default CreateGallery