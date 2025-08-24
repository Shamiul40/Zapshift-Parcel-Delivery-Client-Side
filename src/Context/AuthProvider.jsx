
import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../firebase.init';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = ()=>{
    setLoading(true)
    return signInWithEmailAndPassword (auth,email,password)
  }

  const logOut = (email,password)=>{
    return signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
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
    logOut
  }

  return (
   <AuthContext value={authInfo}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;