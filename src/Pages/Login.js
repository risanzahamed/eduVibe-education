import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import app from '../firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';

const auth = getAuth(app)

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { signinwithgoogle, signin, resetPassword } = useContext(AuthContext)
    const Githubprovider = new GithubAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        signin(email, password)
            .then(result => {
                navigate(from, { replace: true })
                toast.success('login successfull')
                console.log(result.user);
            }).catch((error) => {
                toast.success("Email or password something is wrong", error.message)
            });

    }

    const handleGoogle = () => {
        signinwithgoogle()
            .then(result => {
                console.log(result.user);
                navigate('/')
                toast.success('login successfull using Google')
            })
    }

    const handleGithub = () => {
        signInWithPopup(auth, Githubprovider)
            .then((result) => {
                console.log(result.user);

            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className="flex align-middle justify-center mt-32 mb-32 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                    Dear User
                </h2>

                <p className="text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>

                {/* forum feild */}





                <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                    <form onSubmit={handleSubmit}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                            <input
                                id="email"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                name='email' />
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
                                value="Login"
                            />
                            <Toaster />
                        </div>

                    </form>


                    <div className="flex items-center mt-6 -mx-2">
                        <button onClick={handleGoogle} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                </path>
                            </svg>

                            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                            <Toaster />
                        </button>

                        <Link onClick={handleGithub} to="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </Link>
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/sign-up" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
                </div>

                {/* forum feild */}
            </div>
        </div>
    );
};

export default Login;