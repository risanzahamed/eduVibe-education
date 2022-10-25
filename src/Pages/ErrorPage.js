import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
      <>
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
          <h1 className='text-4xl'>Link is not correct. Please Try again</h1>
          <br />
          {error && (
            <div className='text-center text-3xl mb-3 font-bold'>
              <p className='text-red-500'>{error.statusText || error.message}</p>
              <p>{error.status}</p>
            </div>
          )}
        </div>
      </>
    )
};

export default ErrorPage;