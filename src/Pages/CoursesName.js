import React from 'react';

const CoursesName = ({courseName}) => {

    return (
        <div>
            <h1 className='text-xs mt-4'>{courseName.title}</h1>
        </div>
    );
};

export default CoursesName;