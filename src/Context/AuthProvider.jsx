
import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from '../../firebase.init';


const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword (auth,email,password)
  }

  const logOut = ()=>{
    return signOut(auth)
  }

  const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      console.log("Auth state changed", currentUser)
      setLoading(false)
    });
    return ()=>{
      unSubscribe ()
    }
  },[])

  const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut
  }

  return (
   <AuthContext value={authInfo}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;