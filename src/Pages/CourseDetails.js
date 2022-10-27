import React  from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';



const CourseDetails = () => {


    const data = useLoaderData()

    const { title, price, longDescription, rating, image, author, authorImage } = data

    return (
        <div className='lg:flex '>
            <div class=" lg:ml-44 lg:mr-44 my-20">
                <img class="object-cover object-center w-full h-100" src={image} alt="avatar" />

                <div className='bg-yellow-50'>
                    <div class="flex items-center px-6 py-3 bg-gray-900">


                        <h1 class="mx-3  lg:text-4xl font-semibold text-white">{title}</h1>
                    </div>

                    <div class="px-6 py-4">
                        <h1 className='text-4xl font-bold mb-12 mt-6'>Description:</h1>
                        <p class="py-2 text-1xl text-gray-700 dark:text-gray-400">{longDescription}</p>

                        <div class="lg:flex  text-2xl items-center mt-4 pb-20 text-gray-700 dark:text-gray-200">

                            <h1 class="px-2 text-2xl"> Price : {price}</h1>
                            <FaStar /> <h1 class="px-2 text-2xl">{rating.rate}</h1>
                            <Link to="/checkOut"><button  className='btn btn-outline ml-12'>Get premium access</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mr-12 items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"

                >
                    <img className='h-56 w-64 align-middle justify-center mx-auto' src={authorImage} alt="" />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Author: {author}</h3>
                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;