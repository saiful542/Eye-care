import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import InitializeFirebase from '../Firebase/Firebase.init';
InitializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
    const GoogleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        GoogleSignIn,
        LogOut
    };
};

export default useFirebase;