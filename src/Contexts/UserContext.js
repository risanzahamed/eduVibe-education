import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
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
    
const authInfo ={
    user,
    createUser,
    updateName,
    verifyEmail,
}
    return (
        <AuthContext.Provider value={user}>

        

            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;