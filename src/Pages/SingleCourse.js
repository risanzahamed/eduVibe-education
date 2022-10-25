import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ singleCouse }) => {

    const { title, price, description, image } = singleCouse
    return (
        <div>
            <div>
                <Link to={`/course/${singleCouse.id}`}>
                
                <div className="max-w-xs mb-10 mt-3 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 capitalize dark:text-white">{title}</h1>
                        <p className="mt-5  text-1xl  text-gray-600 dark:text-gray-400">{description}</p>
                    </div>

                    <img className="object-cover w-full h-48 mt-2" src={image} alt="NIKE AIR " />

                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-lg font-bold text-white">${price}</h1>
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                    </div>
                </div>
                
                </Link>
            </div>


        </div>
    );
};

export default SingleCourse;