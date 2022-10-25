import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Roots from "./Roots";
import Faq from "../Pages/Faq";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Roots></Roots>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path:'/blog',
          element: <Blog/>
        },
        {
          path:'/faq',
          element: <Faq/>
        },
        {
          path:'/courses',
          element: <Courses/>,
          loader: ()=> fetch(`http://localhost:5000/courses`)
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/sign-up',
          element: <SingUp/>
        },
      ],
    },
  ])