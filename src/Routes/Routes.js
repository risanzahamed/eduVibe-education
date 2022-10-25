import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Roots from "./Roots";
import Faq from "../Pages/Faq";
import CoursesName from "../Pages/CoursesName";

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
          loader: ()=> fetch(`https://education-api-server.vercel.app/courses`)
        },
        {
          path:'/courses/:id',
          element: <CoursesName/>,
          loader: ({params})=> fetch(`https://education-api-server.vercel.app/courses/${params.name}`)
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