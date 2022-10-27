import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();


const CheckOut = () => {

    return (

        <div className=' app align-middle text-center justify-center p-40 m-40'>
            <Pdf targetRef={ref} filename="edu-vibe.pdf">
                {({ toPdf }) => <button className='btn btn-info text-3xl' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <div className='text-center' ref={ref}>
                <h1 className='text-2xl mt-10 text-blue-500 font-bold'>Thanks For Buying This Course</h1>
            </div>
                <Link to="/"><button className='btn btn-primary mt-20'>Return To Home</button></Link>


        </div>
    );
};

export default CheckOut;