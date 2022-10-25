import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaFunnelDollar } from 'react-icons/fa';

const CourseDetails = () => {

    const data = useLoaderData()
    console.log(data.title);

    const { title, price, description, rating, image } = data



    return (
        <div>
            <div class=" mx-60">
                <img class="object-cover object-center w-full h-100" src={image} alt="avatar" />

                <div class="flex items-center px-6 py-3 bg-gray-900">


                    <h1 class="mx-3  text-4xl font-semibold text-white">{title}</h1>
                </div>

                <div class="px-6 py-4">


                    <p class="py-2 text-2xl text-gray-700 dark:text-gray-400">{description}</p>

                    <div class="flex  text-2xl items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaFunnelDollar />

                        <h1 class="px-2 text-2xl"> Price : {price}</h1>
                    </div>

                    <div class="flex text-2xl items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaStar/>
                        <h1 class="px-2 text-2xl">{rating.rate}</h1>
                    </div>
                    <div>
                        <Link><button className='btn btn-outline mt-11'>Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;