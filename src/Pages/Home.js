import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (




        <div>
            {/* // * Hero section // */}


            <div className="bg-yellow-50  relative px-4 pt-20 pb-20 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
                <div className="max-w-xl mx-auto pb-20 lg:max-w-screen-xl">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                            </div>
                            <h1 className='text-5xl font-bold mb-4'>Education Is About Academic Excellence</h1>
                            <p className="text-base text-gray-700 md:text-lg">
                                It is long established that a reader will be distracted by the
                                readable popular and best content.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Link
                                to="/sign-up"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                to="courses"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                View Courses
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-40 z-0  lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                    <img
                        className='lg:w-2/3 lg:h-auto'
                        src="https://eduvibe.react.devsvibe.com/images/banner/banner-02/banner-01.png"
                        alt=""
                    />
                </div>
            </div>

            {/* // * Hero section end// */}


            {/* // * Features section // */}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/e8a55a54c7dea285250bb3dd92dd14c3/1.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Create Free Account</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                As a delivery driver, you'll make reliable money—working anytime, anywhere.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/d29b8a0de86764e008c2fe2e38f68f41/2.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Monitor user Analytics</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Grow your business and reach new customers with us.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/d26d0493634839ef3a83454e5242c861/3.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Safe & Trusted</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Get the best DoorDash experience with live order tracking.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/514fd3c17ab9428ab4f11b7673da9f5b/4.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Fast Customer Support</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Get the best DoorDash experience with live order tracking.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* // * Features section end// */}


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                The quick, brown fox
                                <br className="hidden md:block" />
                                jumps over{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    a lazy dog
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                            <div>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-10 h-10 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">
                                    I'll be sure to note that in my log
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum
                                    Powrtland stove up dooryahd
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-10 h-10 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">
                                    Iterative approaches to corporate strategy
                                </h6>
                                <p className="text-sm text-gray-900">
                                    A slice of heaven. O for awesome, this chocka full cuzzie is as
                                    rip-off as a cracker.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                </div>
            </div>

        </div>

        // * Features section end//
    );
};

export default Home;