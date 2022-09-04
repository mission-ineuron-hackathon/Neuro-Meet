import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAuth, onAuthStateChanged, signOut, auth } from "firebase/auth";
import getLoginState from "../../utils/loginState";


import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../state/index";

function Navbar({ cart, auth }) {

  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const { setUserdata } = bindActionCreators(actionCreators, dispatch);



  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.alert("Sign-out successful.");
      })
      .catch((error) => {
        console.log("some error in signout");
      });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const stateObj = getLoginState(auth);
  useEffect(() => {
    setIsLoggedIn(stateObj.signIn);

      if (stateObj.signIn) {
        setUserdata({
          username: stateObj.user.displayName,
          email: stateObj.user.email,
          profile_picture: stateObj.user.photoURL,
          uid: stateObj.user.uid,
          isAdmin: false,
        })
      }

  }, [stateObj]);

  console.log("user state" ,stateObj);
  console.log("reduxData: ", data);


  return (
    <header className="text-gray-400 bg-[#FFFFFF] body-font shadow-lg">
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <Image
              src={`/assets/neuroMeetLogo.svg`}
              alt="logo"
              height="50"
              width="200"
              className="text-white p-2 rounded-full"
            />
            
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-textColor">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-textColor">About</a>
          </Link>
          <Link href="/contact_us">
            <a className="mr-5 hover:text-textColor">Contact Us</a>
          </Link>
        </nav>
        {isLoggedIn ? (
          <p
            onClick={handleSignOut}
            className="cursor-pointer inline-flex items-center bg-orange-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Sign Out
          </p>
        ) : (
          <Link href="http://localhost:3000/userAuth/sign-in">
            <a className="inline-flex items-center bg-orange-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
