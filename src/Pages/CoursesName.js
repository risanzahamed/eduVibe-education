import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const CoursesName = ({courseName}) => {
    console.log(courseName);

    const data = useLoaderData()
    console.log(data.title)
    const [name , setName] = useState([])

    useEffect(()=>{
        fetch(`https://education-api-server.vercel.app/courses`)
        .then(res => res.json())
        .then(data => setName(data))
    })

    return (
        <div>
            {/* <h1 className='text-xs mt-4'>{courseName.title}</h1> */}
        </div>
    );
};

export default CoursesName;