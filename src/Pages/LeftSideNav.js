import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const LeftSideNav = ({singleCouse}) => {

    console.log(singleCouse.id)

    //   const [name , setName] = useState([])

    // useEffect(()=>{
    //     fetch(`https://education-api-server.vercel.app/courses`)
    //     .then(res => res.json())
    //     .then(data => setName(data))
    // })

    return (
        <div>

            <Link to={singleCouse.id}><h3>{singleCouse.title}</h3></Link>
            {/* {
                name.map(coursName => <p key={name.id}>
                    <SingleCourse
                    coursName = {coursName}
                    >
                        
                    </SingleCourse>
                </p>)
            } */}
        </div>
    );
};

export default LeftSideNav;