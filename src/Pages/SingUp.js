import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const SingUp = () => {

    const navigate = useNavigate()

    const { createUser, updateName, verifyEmail, signinwithgoogle, updatePhoto, signinwithgithub, user } = useContext(AuthContext)
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault()


        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const url = e.target.url.value

        createUser(email, password)

            .then(result => {
                console.log(result.user);
                toast.success('create user succesfull')
                navigate('/')
                updateName(name)
                updatePhoto(url)

            }).then(() => {
                toast.success('Name Updated Successfully')
            }).catch((error) => {
                console.log(error)
            });


        verifyEmail()
            .then(() => {
                toast.warning('check your mail')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleGoogle = () => {
        signinwithgoogle()
            .then(result => {
                console.log(result.user);
                alert('Google signUp success')
                navigate('/')
            })
    }

    const handleGithub = () => {
        signinwithgithub()
            .then((result) => {
                toast.success('logged in success using Github')
                console.log(result.user);
                navigate('/')

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex align-middle justify-center mt-32 mb-32 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                    Get Your Free Account Now.
                </h2>

                <p className="text-xs mt-4 text-center text-gray-600 dark:text-gray-200">
                    Lets get you all set up so you can verify your personal account and begin setting up your profile.
                </p>
                <button onClick={handleGoogle}>
                    <Link href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign Up with Google</span>
                    </Link>
                    <Toaster />
                </button>
                <Toaster />
                <div>
                    <Link onClick={handleGithub} to="#" className="flex px-4 py-2 items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign Up with Github</span>
                    </Link>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <Link to="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or Sign Up
                        with email</Link>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                {/* forum feild */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="name">Your Name</label>
                        <input
                            id="name"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            name='name' />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                        <input
                            id="email"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            type="email"
                            name='email' />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Photo Url</label>
                        <input
                            id="url"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            type="url"
                            name='url' />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                        </div>

                        <input
                            id="loggingPassword"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password"
                            name='password' />
                    </div>
                    <div className="mt-8">
                        <input className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            type="submit"
                            value="Sign Up"
                        />

                    </div>

                    <Toaster />
                </form>
                {/* forum feild */}

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default SingUp;