import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div className=' align-middle text-center justify-center p-40 m-40'>
            <h1 className='text-4xl text-blue-500 font-bold'>Thanks For Buying This Course</h1>
            <Link to="/"><button className='btn btn-primary mt-20'>Return To Home</button></Link>
            
        </div>
    );
};

export default CheckOut;