import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Roots from "./Roots";
import Faq from "../Pages/Faq";
import CourseDetails from "../Pages/CourseDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Roots></Roots>,
      errorElement: <ErrorPage />,
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
          loader: () => fetch(`https://education-api-server.vercel.app/courses/`)
        },
        {
          path:'/courses/:id',
          element: <Courses/>,
          loader: ({params}) => fetch(`https://education-api-server.vercel.app/courses/${params.id}`)
        },
        {
          path:'/course/:id',
          element: <CourseDetails/>,
          loader: ({params}) => fetch(`https://education-api-server.vercel.app/courses/${params.id}`)
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