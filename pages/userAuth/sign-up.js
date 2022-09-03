import React, { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, onValue,child, get, set, push, update } from "firebase/database";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../state/index";

// import { getAuth } from "firebase/auth"

function SignUp({auth}) {


  const data = useSelector((state) => state.newTicketData);
  const dispatch = useDispatch();
  const { setUserdata } = bindActionCreators(actionCreators, dispatch);



  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const buttonText = useRef(null);
  const errorMsg = useRef((null))

  const handleChange = (e) => {
    e.preventDefault();
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  // Router
  const router = useRouter()

  // useEffect(())

  const handleSingUp = async (e) => {
    e.preventDefault();
    // console.log("email:", formInputs.email);
    // console.log("password:", formInputs.password);

    try {
        buttonText.current.innerHTML =  "loading..."
        errorMsg.current.innerHTML = ""
        const userCred = await createUserWithEmailAndPassword(auth, formInputs.email, formInputs.password)
        const user = userCred.user

        window.alert("User signed in successfully")

        console.log("Created User: ", user);

        buttonText.current.innerHTML =  "Sign Up"
        router.push("/")

    } catch (error) {
        buttonText.current.innerHTML =  "Sign Up"
        if(error.code.includes("email-already-in-use")){
          errorMsg.current.innerHTML = "User already registered. Kindly login."
        }
        console.log("Something wrong in signup request \n", error.code);
    }
  };

  // To handle Ooth sign ups / sign-in s
  const handleOothSignUp = (e) => {
    e.preventDefault();
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
             const user = result.user;
            
            // console.log("Credential: ", credential);
            // console.log("Token: ", token);
            console.log("User: ", user);
            console.log(data);
            

            try {
              const db = getDatabase();
              set(ref(db, 'users/' + user.uid ), {
              username: user.displayName,
              email: user.email,
              profile_picture: user.photoURL,
              uid: user.uid,
              isAdmin: false,
            });

            setUserdata({
              username: user.displayName,
              email: user.email,
              profile_picture: user.photoURL,
              uid: user.uid,
              isAdmin: false,
            })

            } catch (error) {
              console.log(error);
            }
            router.push("/")


        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("error in Ooth", errorCode, " ", errorMessage);
        });
  }

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSingUp}>
              <div
                className="px-7 py-3 text-blue-500 border border-blue-500 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: "#fff" }}
                onClick={handleOothSignUp}
              >
                {/* <!-- Google --> */}
                <img src="/assets/googleLogo.jpg" alt="logo" height="40" width="40" />
                Continue with Google
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
