import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';
import './Courses.css'
import CoursesName from './CoursesName';

const Courses = () => {
  const data = useLoaderData()
  // const [courses , setCourses] = useState([])
  // console.log(courses);
  console.log(data);



  return (
    <div className=" py-16  sm:max-w-xl md:max-w-full  md:px-24  lg:py-20">
      <div>

        <div>
          <p className="">
            Total Courses {data.length}

            <div className='flex m-0'>

              <div className='w-4/12'>
                {
                  data.map(courseName => <CoursesName
                    courseName={courseName}
                    key={data.id}>
                  </CoursesName>
                  )
                }
              </div>
              
              <div className='grid 9/12 gap-4 grid-cols-3 grid-rows-2'>

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