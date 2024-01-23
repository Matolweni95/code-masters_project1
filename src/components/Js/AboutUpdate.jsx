import { useState, useEffect } from "react";
import axios from "axios";
import storage from "../Config/Firebase-config";
import { getStorage, ref, getDownloadURL, uploadBytes,uploadBytesResumable } from "firebase/storage";
import { Link } from "react-router-dom";
import { MyContext } from '../../App';
import { useContext } from 'react';

const Aboutupdate = () => {

  const { contextValue, updateContextValue } = useContext(MyContext);
  const userId = contextValue;
  const [updateVal, setUpdateVal] = useState({})
  const [visionImg,setVisionImg] = useState()
  const [missionImg,setMissionImg] = useState()
  const [updateVal1, setUpdateVal1] = useState(true)
  const [value, setValue] =useState(false)
  const [imageData, setImageData] = useState([]);
  const [image, setImage] = useState(null);

  
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;

    setUpdateVal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleUpdateData =(id) => {
    console.log("my new data is")

    console.log(updateVal)
   axios.put(`http://localhost:8080/api/v1/about/aboutUpdate/${id}`,{about_us:updateVal.about_us,mission:updateVal.mission, vision:updateVal.vision,admin_id: userId})

   window.location.reload();
  };


useEffect(() => {
  fetch()
  console.log('Fetching data...');
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/about/getImage');

      if (!response) {
        throw new Error('No response received from the server');
      }

    
      const data = response.data;
      setImageData(data);
      
      const firstMissionImg = data.find(item => item.category === 'mission');
      const firstVisionImg = data.find(item => item.category === 'vision');

      if (firstMissionImg) {
        setMissionImg(firstMissionImg);
      }

      if (firstVisionImg) {
        setVisionImg(firstVisionImg);
      }

      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  fetchData();
  console.log('Fetch request initiated...');
}, []);

useEffect(() => {

  if ((missionImg === null || visionImg === null) && imageData.length > 0) {
   
    const firstMissionImg = imageData.find(item => item.category === 'mission');
    const firstVisionImg = imageData.find(item => item.category === 'vision');

    if (firstMissionImg) {
      setMissionImg(firstMissionImg);
    }

    if (firstVisionImg) {
      setVisionImg(firstVisionImg);
    }
  }
}, [imageData, missionImg, visionImg]);




  const fetch= async () =>{ 
    const data = await axios.get(`http://localhost:8080/api/v1/about/getAbout`)
    console.log(data)
 if(data.data && data.data.length > 0){
    setUpdateVal(data.data[0])
    setUpdateVal1(false)
 }
  }
 
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  const handleUpload = async (category) => {
    if (image) {
      const storage = getStorage();
      const storageRef = ref(storage, `aboutImg/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

           axios.post("http://localhost:8080/api/v1/about/saveImageUrl",{imageUrl:downloadURL, category:category, admin_id:userId})

            
          });
        }
      );
    }
    window.location.reload();
  };

  const editPicture = async (id, url, category) => {

    try {
      const imageRef = ref(storage, url);
      await getDownloadURL(imageRef);
      console.log("exist")
      if(image){
        const storageRef = ref(storage, 'aboutImg/' + image.name);
      
    try {
    
      await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log("Image")
      console.log(downloadUrl)
      
      axios.put(`http://localhost:8080/api/v1/about/updateImage/${id}`,{imageUrl:downloadUrl, category:category})

      console.log('Image uploaded successfully:', downloadUrl);
    } catch (error) {
      
      console.error('Error uploading image:', error);
    }
      }

      return true;

    } catch (error) {

      console.log(error)
      return false;
    }
    
    window.location.reload();
  };;

  const handleAddData = async () => {
    axios.post(`http://localhost:8080/api/v1/about/saveAbout`,{about_us:updateVal.about_us,mission:updateVal.mission, vision:updateVal.vision,admin_id: userId})
 
    window.location.reload();
  }

  return (
    <div>

      <div className="flex flex-wrap m-20 bg-slate-200 w-70">

      {
        visionImg ?
      <div class="w-30 m-10">
       
       
       <p className="text-blue-900 font-bold text-25 font-300">{missionImg.category}</p>
          <img src={missionImg.imageUrl} alt="" width={300} /> 
          <input type="file" multiple onChange={handleChange} />
             
             <button onClick={() => editPicture(image.id, image.imageUrl, image.category)} className="bg-blue-900 h-8 w-24 mt-3 text-white">Update</button>
      
        </div>:
          <div class="w-30 m-10">
       
       
          <p className="text-blue-900 font-bold text-25 font-300">Mission</p>
             {/* <img src={image.imageUrl} alt="" width={300} />  */}
             <input type="file" multiple onChange={handleChange} />
                
                <button onClick={() => handleUpload("mission")} className="bg-blue-900 h-8 w-24 mt-3 text-white">Upload</button>
         
           </div>
}

{
  missionImg ?
        <div class="w-30 m-10">
          <p className="text-blue-900 font-bold text-25 font-300">{visionImg.category}</p>
          <img src={visionImg.imageUrl} alt="" width={300} /> 
          <input type="file" multiple onChange={handleChange} />
             <button onClick={() => editPicture(image.id, image.imageUrl, image.category)} className="bg-blue-900 h-8 w-24 mt-3 text-white">Update</button>
      
        </div>
        :
        <div class="w-30 m-10">
        <p className="text-blue-900 font-bold text-25 font-300">Vision</p>
        {/* <img src={image.imageUrl} alt="" width={300} />  */}
        <input type="file" multiple onChange={handleChange} />
           <button onClick={() => handleUpload("vision")} className="bg-blue-900 h-8 w-24 mt-3 text-white">Upload</button>
      </div>
}
      </div>

      <div className="m-20">
      
          <div>
           
              <div>
                <h1 className="text-blue-900 font-bold text-25 font-300 pb-10">
                  ABOUT US
                </h1>
                <p className="text-20 pt-10 pb-7">About Us</p>
                
                <textarea
                  className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none"
                  type="text"
                  
                  name="about_us"
                  onChange={handleInputChange2}
                  value={updateVal.about_us}
                />
            
                <p className="text-20 pt-10 pb-7">Our Mission</p>
                <textarea
                  className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none"
                  type="text"
                  name="mission"
                  onChange={handleInputChange2
                  }
                  value={updateVal.mission}
                />
               
                <p className="text-20 pt-10 pb-7">Our Vision</p>
                <textarea
                  className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none"
                  type="text"
                  name="vision"
                   value={updateVal.vision}
                  onChange={handleInputChange2}
                
                />
               {updateVal1?  <button
                  className="bg-blue-900 h-8 w-24 mt-3 text-white float-right"
                  onClick={handleAddData}>
                  Save
                </button>:
                <button
                  className="bg-blue-900 h-8 w-24 mt-3 text-white float-right"
                  onClick={() => handleUpdateData(updateVal.id)}>
                  update
                </button>
                }
              </div>

          </div>

    </div>
    
   </div>
  );

};
export default Aboutupdate;
