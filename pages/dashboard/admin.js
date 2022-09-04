import React, { useEffect } from "react";
// import { auth } from "firebase/auth";
import getLoginState from "../../utils/loginState";
import { Router, useRouter } from "next/router";
import { child, get, getDatabase, ref } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../state/index";

function AdminDashboard({ auth }) {
  if (typeof window == "undefined") {
    return;
  } else {
    const router = useRouter();
    const user = getLoginState(auth);
    console.log("user: ", user);

    if (!user.signIn == false) {
      console.log("please sign in first.");
      router.push("/userAuth/sign-up");
    }
    const checkAdmin = async () => {
        try {
            const userFormDb = await get(child(ref(getDatabase()), `users/${user.user.uid}`))
            if (!userFormDb.isAdmin) {
              router.push("/");
              console.log("You are not an Admin.");
            }
        } catch (error) {
            console.log("fome error in user fetch.")
        }
    }
    useEffect(() => {
        checkAdmin()
    },[user])
    // const signedInUserData = useSelector((state) => state.userData);
    return <div>AdminDashboard</div>;
  }
}

export default AdminDashboard;

// export function getStaticProps()
