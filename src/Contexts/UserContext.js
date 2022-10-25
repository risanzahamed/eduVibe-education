import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const Githubprovider = new GithubAuthProvider();


    const [user , setUser] = useState('')

    // step-1

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step-2

    const updateName = name=>{
        return updateProfile(auth.currentUser, {displayName: name})
    }

    // step-3

    const verifyEmail =()=>{

            return sendEmailVerification(auth.currentUser)
        }

    // step-4

    // Google Signin

    const signinwithgoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    // step-5
    // Login with password

    const signin = (email, password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }

    // step-6
    // logout

    const logOut = ()=>{
        return signOut(auth)
    }
    
const authInfo ={
    user,
    createUser,
    updateName,
    verifyEmail,
    signinwithgoogle,
    signin,
    logOut
}
    return (
        <AuthContext.Provider value={user}>

        

            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;