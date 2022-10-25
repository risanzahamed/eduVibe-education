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
                            
                        </span>{' '}
                        A broad selection of courses
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
                            <h6 className="mb-2 font-semibold leading-5">JavaScript</h6>
                            <p className="mb-3 text-sm text-gray-900">
                            JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build.....
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/d29b8a0de86764e008c2fe2e38f68f41/2.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Data Science</h6>
                            <p className="mb-3 text-sm text-gray-900">
                            Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you are into research, statistics.....
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/d26d0493634839ef3a83454e5242c861/3.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Excel</h6>
                            <p className="mb-3 text-sm text-gray-900">
                            Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to.....
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://superprops-gatsby.vercel.app/static/514fd3c17ab9428ab4f11b7673da9f5b/4.png" alt="" srcset="" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
                            <p className="mb-3 text-sm text-gray-900">
                            The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.
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
                                Become an instructor
                                <br className="hidden md:block" />
                                in our Website{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    and teach people
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                            </p>

                            <Link to= "/sign-up"><button className='btn btn-primary mt-4'>Sign Up Now</button></Link>
                        </div>


                    </div>
                    <div>
                        <img
                            className="object-cover w-fullrounded "
                            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
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