import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function getLoginState (auth) {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            return setUser({
                signIn: true,
                user
            })
        } else {
            return setUser({
                signIn: false,
                massage: "user Sign out"
            })
        }
        });
    },[])

    return user

}