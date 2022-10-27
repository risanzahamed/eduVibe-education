import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const Githubprovider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true)


    const [user , setUser] = useState('')

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

    const updateName = (name)=>{
        return updateProfile(auth.currentUser, {displayName: name})
    }

    const updatePhoto = (url)=>{
        return updateProfile(auth.currentUser, {photoURL: url})
    }


    const verifyEmail =()=>{
            return sendEmailVerification(auth.currentUser)
        }


    const signinwithgoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
        
    }

    const signinwithgithub =()=>{
        
    }


    const logOut = ()=>{
        return signOut(auth)
    }

    

    useEffect(() => {
       
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
    
const authInfo ={
    user,
    loading,
    createUser,
    updateName,
    verifyEmail,
    signinwithgoogle,
    signin,
    updatePhoto,
    logOut,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;