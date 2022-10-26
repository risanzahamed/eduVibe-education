import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    // step-2

    const updateName = (name)=>{
        return updateProfile(auth.currentUser, {displayName: name})
    }

    const updatePhoto = (url)=>{
        return updateProfile(auth.currentUser, {photoURL: url})
    }

    // step-3

    const verifyEmail =()=>{
            return sendEmailVerification(auth.currentUser)
        }

    // step-4

    // Google Signin

    const signinwithgoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // step-5
    // Login with password

    const signin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
        
    }

    // step-6
    // logout

    const logOut = ()=>{
        return signOut(auth)
    }

       // step-6
    // Reset Password

    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          //this part will execute once the component is unmounted.
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
    resetPassword,
    logOut,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;