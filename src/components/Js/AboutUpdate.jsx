// "use Client"
import { useState, useEffect } from "react";
// import '.../App.css'
// import db from "./firebase-config";
import db from "../Config/Firebase-config";
import{collection, addDoc, getDocs, setDoc,doc} from "firebase/firestore"
import { Link } from "react-router-dom";




const Aboutupdate = () =>{


// const [about, setAbout] = useState("")
// const [mission, setMission] = useState("")
// const [vision, setVision] = useState("")
const [data, setData] = useState({ about: '', mission: '', vision: '' });

const [id,setId] =useState("")
 const handleAddData = async () => {
    const aboutCollectionRef = collection(db, 'aboutus')

    try {
      const docRef = await addDoc(aboutCollectionRef, data);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
 }
 const handleUpdateData = async () => {
    const myDocRef = doc(db, 'aboutus', id); 

    try {
      await setDoc(myDocRef, data, { merge: true });
      console.log('Document updated successfully!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  useEffect(() => {
    const fetchId = async () => {
      const myCollectionRef = collection(db, 'aboutus');
      const querySnapshot = await getDocs(myCollectionRef);

      let docs ='';
      querySnapshot.forEach((doc) => {
        docs=doc.id;
      });
      
      setId(docs);
    };
   
    fetchId();
    
  }, []);



    return(
<div>
  <Link to={"/about"}>ABOUT</Link>
  
<div className="m-20">
<h1 className="text-blue-900 font-bold text-25 font-300 pb-10">ABOUT US</h1>
<p className="text-20 pt-10 pb-7">About Us</p>
<textarea className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none" type="text" value={data.about}  onChange={(e) => setData({ ...data, about: e.target.value })} />
<button className="bg-blue-900 h-8 w-28 mt-3 text-white float-right" >Save</button>
<p className="text-20 pt-10 pb-7">Our Mission</p>
<textarea className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none"  type="text" value={data.mission} onChange={(e) => setData({ ...data, mission: e.target.value })}/>
<button  className="bg-blue-900 h-8 w-24 mt-3 text-white float-right" onClick={handleUpdateData}>update</button>
<p className="text-20 pt-10 pb-7">Our Vision</p>
<textarea className="bg-slate-200 w-full h-32 outline-0 p-3 resize-none"   type="text" value={data.vision} onChange={(e) => setData({ ...data, vision: e.target.value })}/>
<button className="bg-blue-900 h-8 w-24 mt-3 text-white float-right" onClick={handleAddData}>Save data</button>
</div>
</div>
    )

}
export default Aboutupdate;