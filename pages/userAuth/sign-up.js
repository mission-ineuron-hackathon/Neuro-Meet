import React, { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";
// import { getAuth } from "firebase/auth"

function SignUp({auth}) {
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
            
            console.log("Credential: ", credential);
            console.log("Token: ", token);
            console.log("User: ", user);

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
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  name="email"
                  value={formInputs.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name="password"
                  value={formInputs.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                ref={buttonText}
              >
                Sign Up
              </button>
              <p ref={errorMsg} className="text-red-600 my-2" ></p>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account? 
                  <Link href="/userAuth/sign-in" >
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                      Login
                    </a>
                  </Link>
                </p>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

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
