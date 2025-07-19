/* eslint-disable react-refresh/only-export-components */
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Components/Firebase/FireBase';


export  const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const googleLogin =()=>{
       return signInWithPopup(auth,googleProvider)
    }
    const registerUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth, email,password)
    }
    const userLogOut = ()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const UnSubscribe =onAuthStateChanged(auth, currentUser=>{
            
                console.log(currentUser);
                setUser(currentUser)          
        })
        return()=>{
            UnSubscribe()
        }
    },[])


    const authInfo={
        user,
        googleLogin,
        registerUser,
        userLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;