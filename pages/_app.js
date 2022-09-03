import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MSS_SENDERID,
  appId: process.env.FB_APPID,
  databaseURL: process.env.DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app)

// init auth
const auth = getAuth();

// get user sign in state
// const [user, setUser] = useState({})
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     setUser(user)
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     setUser(null)
//   }
// });


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar auth={auth} />
      <div className="max-w-[1250px] mx-auto">
        <Component db={db} auth={auth} {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}

export default MyApp
