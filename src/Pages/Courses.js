import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';
import './Courses.css'

const Courses = () => {
  const data = useLoaderData()


  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`https://education-api-server.vercel.app/courses`)
      .then(res => res.json())
      .then(data => setCourses(data))
  })

  return (
    <div className=" py-16  sm:max-w-xl md:max-w-full  md:px-24  lg:py-20">
      <div>

        <div>
          <p className="">
            Total Courses {courses.length}

            <div className='lg:flex wrap m-0'>

              <div className='lg:w-4/12'>


                {
                  courses.map(courses => <p className='text-1xl border border-solid m-3 p-4 mt-4 font-bold' key={courses.id}>
                    
                    <Link to={`/course/${courses.id}`}>{courses.title}</Link>
                  </p>)
                }

              </div>

              <div className='lg:grid 9/12 gap-4 grid-cols-3 grid-rows-2'>

                {
                  data.map(singleCouse => 
                  <SingleCourse
                  
                    singleCouse={singleCouse}
                    key={data.id}>
                    
                  </SingleCourse>
                  )
                }
              </div>

            </div>

          </p>
        </div>

      </div>
    </div>
  );
};

export default Courses;