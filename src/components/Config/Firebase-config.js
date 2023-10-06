import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage";



    const firebaseConfig = {
        apiKey: "AIzaSyDiefiG9E4JKiTNnnRVnAalndYdW5HCFcg",
        authDomain: "schoolproject-b10ad.firebaseapp.com",
        projectId: "schoolproject-b10ad",
        storageBucket: "schoolproject-b10ad.appspot.com",
        messagingSenderId: "561310751362",
        appId: "1:561310751362:web:671f36130120d7688db29b",
        measurementId: "G-G8LSZ9BGL5"
      };
    
      const app = initializeApp(firebaseConfig);
    

      export const storage = getStorage(app);
       
      export const db = getFirestore(app);


    
   
 export default db;
