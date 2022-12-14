import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';



const Header = () => {

  const [dark, setDark] = useState([false])

  const { user, logOut } = useContext(AuthContext)


  const handleLogout = () => {
    logOut()
      .then(toast.success('User logged out!'))
      .catch(error => console.log(error))
  }

  return (
    <div data-theme={dark ? "dark" : "light"} className="navbar bg-base-100 z-40 h-28 shadow-black-100 shadow-lg " >
      <div className="navbar-start z-40">
        <div className="dropdown ">
          <label tabIndex={0} className="btn text-black btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className="flex">
              <Link to="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</Link>
            </li>
            <li className="flex">
              <Link to="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</Link>
            </li>
            <li className="flex">
              <Link to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/"> <img src="https://eduvibe.react.devsvibe.com/images/logo/logo.png" alt=" " srcset="" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-40">
        <ul className="menu menu-horizontal z-40 p-0">
          <li className="flex">
            <Link to="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</Link>
          </li>
          <li className="flex">
            <Link to="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</Link>
          </li>
          <li className="flex">
            <Link to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

        {user?.uid ? (
          <>
            <div className="tooltip" data-tip={user.displayName}>
              <img className='rounded-lg w-10 h-10 mr-5' src={user ? user.photoURL : "not available"} alt="" srcset=""  />
            </div>

            {/* <Link to='/checkout' className='mr-5 hover:text-gray-900'>
              CheckOut
            </Link> */}
            <button
              onClick={handleLogout}
              className='inline-flex items-center bg-blue-300 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
            >
              Logout
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
              <Toaster />
            </button>

          </>
        ) : (
          <>

            <Link to='/login' className='mr-5 lg:text-2xl hover:text-blue-500'>
              Login
            </Link>
            <Link to='/sign-up' className='mr-5 lg:text-2xl hover:text-blue-500'>
              Sign Up
            </Link>

          </>
        )}

        <label className="swap swap-rotate">


          <input type="checkbox" onClick={() => setDark(!dark)} />


          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>


      </div>

    </div>
  );
};

export default Header;