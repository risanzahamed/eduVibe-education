import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className='text-4xl align-middle justify-center text-center m-40 font-bold'>wait a moment....</div>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state= {{from : location}} replace/>
};

export default PrivateRoutes;