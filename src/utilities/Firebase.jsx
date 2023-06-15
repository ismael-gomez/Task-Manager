import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc,getDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCjkYPW-4z6J-jQyIFST-14sMzrBO-PiHI",
  
    authDomain: "task-manager-82639.firebaseapp.com",
  
    projectId: "task-manager-82639",
  
    storageBucket: "task-manager-82639.appspot.com",
  
    messagingSenderId: "1027255989072",
  
    appId: "1:1027255989072:web:9ac8fb1ed7ff26b1c6b255"
  
  };
  //Initialized Firebase 
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);


  export const taskCollection = collection(db, 'tarea')
  /// Fuction async db 
  async function AddData (data) {
    try {
      const docRef = await addDoc(taskCollection, data);
      const docSnapshot = await getDoc(docRef);
      const documento = { id: docSnapshot.id, ...docSnapshot.data() };
      // console.log('Documento creado:', documento);
      return documento;
    } catch (error) {
      console.log("error")
    }
  }
  export default AddData
