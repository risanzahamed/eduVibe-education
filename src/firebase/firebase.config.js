import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCStUD5InrZadHFfds72jWMvciYXoKf1sI",
  authDomain: "practice-firebase-react-dom.firebaseapp.com",
  projectId: "practice-firebase-react-dom",
  storageBucket: "practice-firebase-react-dom.appspot.com",
  messagingSenderId: "448931082649",
  appId: "1:448931082649:web:ebc257a69aa77bacace308"
};


const app = initializeApp(firebaseConfig);
export default app