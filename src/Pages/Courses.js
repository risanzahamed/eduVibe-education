import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';
import './Courses.css'

const Courses = () => {
  const data = useLoaderData()
  // const [courses , setCourses] = useState([])
  // console.log(courses);
  console.log(data);



  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="flex max-w-xl mb-36 lg:w-2/3 md:mx-auto lg:text-left mt-10 sm:text-center lg:max-w-5xl md:mb-12">

        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Total Courses {data.length}

            <div>
              
              <div className='grid gap-4 grid-cols-3 grid-rows-2'>
                
                {
                data.map(singleCouse => <SingleCourse
                  singleCouse={singleCouse}
                  key={data.id}></SingleCourse>
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